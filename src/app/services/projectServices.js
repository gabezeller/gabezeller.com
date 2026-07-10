
const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function getProjects() {
    const response = await fetch(`${API_URL}/projects`);

    if (!response.ok) {
        throw new Error('Failed to fetch projects');
    }

    return response.json();
}

export async function getProjectBySlug(slug) {
    const response = await fetch(`${API_URL}/projects/${slug}`);

    if (!response.ok) {
        throw new Error('Failed to fetch project');
    }

    return response.json();
}