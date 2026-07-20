export interface CreateProjectPayload {
    name: string;
    userId: string;
    userEmail: string;
    userName: string;
    tagline: string;
    category: string;
    technologies: string[];
    difficulty: string;
    status: string;
    publishedDate: string;
    thumbnailImage: string;
    overview: string;
    features: string[];
    projectGallery: string[];
    links: {
        liveDemo: string;
        githubRepo: string;
    };
}

export interface UserAddedProjects {
    _id: string,
    name: string;
    userId: string;
    userEmail: string;
    userName: string;
    tagline: string;
    category: string;
    technologies: string[];
    difficulty: string;
    status: string;
    publishedDate: string;
    thumbnailImage: string;
    overview: string;
    features: string[];
    projectGallery: string[];
    links: {
        liveDemo: string;
        githubRepo: string;
    };
}