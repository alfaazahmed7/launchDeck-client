import { CreateProjectPayload, UserAddedProjects } from "@/types/add-project";
import { serverFetch } from "../core/server";

export const getUserProjects = async (
    userEmail: string
): Promise<UserAddedProjects[]> => {
    return serverFetch(
        `/api/get-user-projects?userEmail=${encodeURIComponent(userEmail)}`
    );
}