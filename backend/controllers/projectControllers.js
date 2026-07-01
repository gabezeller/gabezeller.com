const projectService = require('../services/projectService');

async function getProjects(req, res) {
    const projects = await projectService.getProjects();
    res.json(projects);
}

async function getProjectBySlug(req, res) {
    const project = await projectService.getProjectBySlug(req.params.slug);
    res.json(project);
}

module.exports = {
    getProjects,
    getProjectBySlug
};