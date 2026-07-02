const fs = require('fs');
require('dotenv').config({ path: '../.env' });
const data = require('../../src/app/projects.json');
const pool = require('../db/postgres');
// const image = require('../public/images/portfolio/portfolio-1.jpg');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');



if (!process.env.SUPABASE_URL) {
    throw new Error('Missing SUPABASE_URL environment variable. Add it to .env or export it before running the script.');
}

const s3_uri = process.env.S3_BUCKET_URL;
const s3Client = new S3Client({
    region: 'us-east-2',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

async function insertProject(project) {
    const slug = project.title.toLowerCase().replace(/\s+/g, '-');
    const technologies = project.skills.split(',').map((t) => t.trim());
    const content = JSON.stringify({
        bullets: project.bullets,
        paragraphs: project.paragraphs,
    });

    const result = await pool.query(
        'INSERT INTO project (title, slug, technologies, content) VALUES ($1, $2, $3, $4) RETURNING project_id',
        [project.title, slug, technologies, content]
    );

    return result.rows[0].project_id;
}

async function insertUploadImages(project, project_id) {
    for (let i = 0; i < 1; i++) {
        const image = project.images[i];
        if (image.endsWith('.mp4')) {
            console.log(`Skipping video file: ${image}`);
            continue;
        }

        const imagePath = `../../public${image}`;
        console.log(`Processing image: ${imagePath}`);
        const imageKey = `project_image/${image.split('/').pop()}`;
        const uploadParams = {
            Bucket: 'amzn-s3-portfolio-images-603767527189-us-east-2-an',
            Key: imageKey,
            Body: fs.createReadStream(imagePath),
           
        };

        try {
            if (!image.includes('embed')) {
                await s3Client.send(new PutObjectCommand(uploadParams));
            }

            await pool.query(
                'INSERT INTO project_image (project_id, s3_key, alt_text, sort_order) VALUES ($1, $2, $3, $4)',
                [project_id, imageKey, project.title, i]
            );
        } catch (error) {
            console.error(`Error processing image ${image}:`, error);
            continue;
        }
    }
}

async function main() {
    const project0 = data.projects[0];
    const project_id = await insertProject(project0);
    // await insertUploadImages(project0, project_id);
    console.log(`Inserted project ${project0.title} with id ${project_id}`);

    await insertUploadImages(project0, project_id);
    console.log(`Inserted images for project ${project0.title}`);
    return;
}

main().catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
});