import { serverFetch } from "../core/server"

export const getProjects = async () => {
    return serverFetch('/api/get-projects');
}