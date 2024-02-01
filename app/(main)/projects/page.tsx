
import ProjectCard from "@/components/project-card"
import { PorjectConfig } from "@/config/project-config"

export default function ProjectsPage() {
    return (
        <div className="mt-20">
            <div className="p-4 flex flex-col gap-4">
                <h1 className="text-xl font-bold ">My Project</h1>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                    {PorjectConfig.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            github={item.github}
                            tech={item.techStack}
                        />
                    ))}
                </div>
            </div>
            <div className="hidded md:block h-12"></div>
        </div>
    )
}