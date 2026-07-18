import { Project } from "@/types/project";
import { serverFetch } from "../core/server";

export const getProjects = async (
    queryString: string
): Promise<Project[]> => {
    return serverFetch<Project[]>(`/api/projects${queryString}`);
};

export const getFeaturedProjects = async ()
    : Promise<Project[]> => {
    return serverFetch<Project[]>(`/api/projects/featured`);
}

export const getProjectById = async (
    projectId: string
): Promise<Project> => {
    return serverFetch<Project>(`/api/projects/${projectId}`);
};

export const getRelatedProjects = async (
    category: string,
    currentProjectId: string
): Promise<Project[]> => {
    try {
        // `data` is now automatically typed as Project[]
        const data = await serverFetch<Project[]>(
            `/api/projects?category=${encodeURIComponent(category)}`
        );

        return data
            .filter((project) => {
                const id = project._id?.$oid || project.id;
                return id !== currentProjectId;
            })
            .slice(0, 4);
    } catch (error) {
        console.error("Error fetching related projects:", error);
        return [];
    }
};