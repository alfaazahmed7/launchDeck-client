import { getProjects } from "@/lib/api/getProjects";

const FeatruedProjects = async () => {
    const projects = await getProjects();
    console.log(projects, 'projects');

    return (
        <div>
            featured projects section.
        </div>
    );
};

export default FeatruedProjects;