
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import EducationName from "@/components/education-name";

import { EducationConfig } from "@/config/educationconfig";


export default function Educations() {
    return (
        <Card className="w-full min-h-[280px] flex flex-col justify-between items-start">
            <CardHeader className="">
                <CardTitle>My Educations</CardTitle>
            </CardHeader>
            <div className="w-full space-y-2">
                <div className="p-6 py-0 grid md:grid-cols-2 grid-cols-1 w-full gap-4 ">
                    {EducationConfig.map((item, index) => (
                        <EducationName
                            key={index}
                            title={item.courseName}
                            college={item.collegeName}

                            status={item.status}
                            session={item.session}
                            marks={item.marks}
                        />
                    ))}
                </div>
            </div>
            <CardFooter></CardFooter>
        </Card>
    )
}