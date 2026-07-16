export interface Project {
    _id: { $oid: string };
    id: string;
    name: string;
    tagline: string;
    category: string;
    technologies: string[];
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    status: "Idea" | "Development" | "Production";
    publishedDate: string;
    thumbnailImage: string;
    overview: string;
    features: string[];
    projectGallery: string[];
    links: {
        liveDemo: string;
        githubRepo: string;
    };
    featured: boolean;
}