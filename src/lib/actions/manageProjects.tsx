import { UserAddedProjects } from "@/types/add-project";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL!;

export const deleteUserProject = async (
    projectId: string
): Promise<UserAddedProjects> => {
    const res = await fetch(
        `${baseUrl}/api/delete-user-project?projectId=${encodeURIComponent(projectId)}`,
        {
            method: "DELETE",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to delete project");
    }

    return res.json();
};