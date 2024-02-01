import Link from "next/link";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

import ProjectCard from "@/components/project-card";

import { PorjectConfig } from "@/config/project-config";


export default function Projects() {
    return (
        <Card className="min-h-[280px] w-full flex flex-col">
            <CardHeader className="">
                <CardTitle>My Projects </CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 ">
                {PorjectConfig.slice(0, 3).map((item, index) => (
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
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-start justify-start w-full pt-4">
                <Button
                    asChild
                    className="w-full"
                >
                    <Link href="/projects">
                        Show More
                        <Icons.arrowRight size={22} />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}