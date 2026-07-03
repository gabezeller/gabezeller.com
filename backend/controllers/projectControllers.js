const projectService = require('../services/projectService');

async function getProjects(req, res) {

    try {
        const projects = await projectService.getProjects();

        if (!projects) {
            return res.status(404).json({ message: 'No projects found' });
        }  
        res.json(projects);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

    }


}

async function getProjectBySlug(req, res) {
    try {
        const project = await projectService.getProjectBySlug(req.params.slug);

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.json(project);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }

}

module.exports = {
    getProjects,
    getProjectBySlug
};