import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Icons } from "./icons"
import Link from "next/link"

interface EducationNameProps {
    title: string;
    college: string;
    status: string;
    session: string;
    marks: string;
}

export default function EducationName({
    title,
    college,

    status,
    session,
    marks
}: EducationNameProps) {
    return (
        <Card className="w-full ms-2 border-0 shadow-none flex flex-col justify-between items-start">
            <ol className="relative border-s border-muted-foreground dark:border-gray-700">
                <div className="ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-primary  rounded-full -start-3 ring-8 ring-background text-background">
                        <Icons.education size={16} />
                    </span>
                    <CardHeader className="p-0">
                        <CardTitle>{title} </CardTitle>
                        <CardDescription className="line-clamp-5">
                            From:
                            <span className="font-bold">
                                {college}
                            </span>
                        </CardDescription>
                        <CardDescription className="line-clamp-5">
                            Status:
                            <span className="font-bold">
                                {status}
                            </span>
                        </CardDescription>
                        <CardDescription className="line-clamp-5">
                            Session:
                            <span className="font-bold">
                                {session}
                            </span>
                        </CardDescription>
                        <CardDescription className="line-clamp-5">
                            Marks:
                            <span className="font-bold">
                                {marks}
                            </span>
                        </CardDescription>
                        <div className="" />
                    </CardHeader>
                </div>
            </ol>
        </Card>
    )
}