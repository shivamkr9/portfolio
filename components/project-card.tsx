import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";


interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    github?: string;
    tech: string[];
}

export default function ProjectCard({ title, description, image, link, github, tech }: ProjectCardProps) {
    return (
        <Card className="border-foreground p-0 pt-2 w-full">
            <CardHeader className="pt-0">
                <CardTitle className="text-lg">{title} </CardTitle>
                <p className="line-clamp-6 text-muted-foreground text-sm leading-none">{description}</p>
                <div className="text-muted-foreground">
                    <p>Used Technology</p>
                    <div className=" flex flex-wrap justify-start items-start w-full gap-2">
                        {tech.map((item, index) => (
                            <p
                                key={index}
                                className={badgeVariants({ variant: `${index % 2 == 0 ? "default" : "action"}`, })}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="relative min-h-40 min-w-full px-2">
                <Image
                    src={image}
                    alt="portfolio"
                    fill
                    style={{ objectFit: "contain", padding: "0 20px" }}
                />
            </CardContent>
            <CardFooter className="py-0 pt-4">
                {link && (

                    <Button
                        asChild
                        variant={"link"}

                    >
                        <Link href={link}
                        >
                            Show Site
                            <Icons.arrowUpRight size={22} />
                        </Link>
                    </Button>
                )}
                {github && (

                    <Button
                        asChild
                        variant={"link"}
                    >
                        <Link href={github}
                        >
                            Github Link
                            <Icons.arrowUpRight size={22} />
                        </Link>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}