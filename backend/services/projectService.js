const pool = require('../db/postgres');

async function getProjects() {
    const result = await pool.query('SELECT * FROM project ORDER BY project_id DESC');
    return result.rows;
}

async function getProjectBySlug(slug) {
    const result = (await pool.query('SELECT * FROM project WHERE slug = $1', [slug])).rows[0];

    const project_id = result.project_id;


    // get the project images
    // create url using s3_key and the S3 bucket url
    const projectImages = (await getProjectImages(project_id)).map(image => {
        return {
            alt_text: image.alt_text,
            url: `https://fakeurl/${image.s3_key}`,
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

