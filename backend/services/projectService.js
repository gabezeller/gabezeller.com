const pool = require('../db/postgres');

async function getProjects() {
    const result = await pool.query('SELECT * FROM projects');
    return result.rows;
}

async function getProjectBySlug(slug) {
    const result = await pool.query('SELECT * FROM projects WHERE slug = $1', [slug]);
    return result.rows[0];
}

module.exports = {
    getProjects,
    getProjectBySlug
};