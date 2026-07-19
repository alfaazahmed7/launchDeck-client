export interface CreateProjectPayload {
    name: string;
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