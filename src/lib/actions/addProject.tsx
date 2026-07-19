// import { Project } from "@/types/project";
// import { serverFetch, serverMutation } from "../core/server";
// import { CreateProjectPayload } from "@/types/add-project";

// export const getProjects = async (
//     queryString: string
// ): Promise<Project[]> => {
//     return serverFetch<Project[]>(`/api/projects?${queryString}`);
// };

// const payload: CreateProjectPayload = {
//     name,
//     tagline,
//     category,
//     technologies,
//     difficulty,
//     status,
//     thumbnailImage,
//     overview,
//     features,
//     projectGallery: galleryImages,
//     links: {
//         liveDemo,
//         githubRepo
//     }
// };

// export const addProject = async (
//     payload: CreateProjectPayload
// ) => {
//     return serverMutation(
//         `/api/add-project`,
//         payload,
//         'POST'
//     );
// }