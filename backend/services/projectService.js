const pool = require('../db/postgres');
const s3_uri = process.env.S3_BUCKET_URL;

async function getProjects() {
    const result = await pool.query('SELECT * FROM project ORDER BY project_id DESC');

    if (!result) {
        return null;
    }

    // get project image with sort order 0 for each project and 
    // add it to the project object with url using s3_key and the S3 bucket url
    const projectsWithImages = await Promise.all(result.rows.map(async (project) => {
        const projectImages = await getProjectImages(project.project_id);
        const mainImage = projectImages.find(image => image.sort_order === 0);
        return {
            // only need limited project info for projects page
            title: project.title,
            slug: project.slug,
            technologies: project.technologies,
            main_image_url: mainImage ? `${s3_uri}/${mainImage.s3_key}` : null
        };
    }));

    


    return projectsWithImages;
}

async function getProjectBySlug(slug) {
    const result = (await pool.query('SELECT * FROM project WHERE slug = $1', [slug])).rows[0];

    if (!result) {
        return null;
    }

    const project_id = result.project_id;


    // get the project images
    // create url using s3_key and the S3 bucket url
    const projectImages = (await getProjectImages(project_id)).map(image => {
        return {
            alt_text: image.alt_text,
            url: image.s3_key.includes("https://") ? image.s3_key : `${s3_uri}/${image.s3_key}`,
            sort_order: image.sort_order
        }
    });


    
    // combine project and image results into a single object and return it
    return {
        ...result,
        images: projectImages
    };
}

async function getProjectImages(projectId) {
    const result = await pool.query('SELECT * FROM project_image WHERE project_id = $1', [projectId]);
    return result.rows;
}

module.exports = {
    getProjects,
    getProjectBySlug,
    getProjectImages
};

