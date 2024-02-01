
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

import { SkillConfig } from "@/config/skill-config";

export default function Skills() {
    return (
        <Card className="min-h-[280px] w-full flex flex-col">
            <CardHeader className="pb-1.5">
                <CardTitle>My Skills </CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 items-center justify-between overflow-hidden my-auto pt-6">
                {SkillConfig.slice(0, 4).map((item, index) => (
                    <div key={index} className="border border-foreground rounded-md py-2 px-3 space-y-2">
                        <item.icon size={34} className="text-foreground" />
                        <p>{item.name}</p>
                    </div>
                ))}

            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-start justify-start w-full">
                <Button
                    asChild
                    className="w-full"
                >
                    <Link href="/skills">
                        Show More
                        <Icons.arrowRight size={22} />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}