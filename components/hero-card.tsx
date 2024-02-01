import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SocialMedia from "@/components/socialmedia"
import { Separator } from "@/components/ui/separator"


export default function HeroCard() {
    return (
        <Card className="w-full min-h-[280px] flex flex-col justify-between items-start">
            <CardHeader className="pb-1.5">
                <CardTitle>I&apos;m Shivam Kumar </CardTitle>
                <CardTitle className="bg-gradient-to-r from-primary to-action inline-block text-transparent bg-clip-text font-bold whitespace-nowrap">Fullstack Web Developer  </CardTitle>
                <CardDescription className="line-clamp-5">
                    I&apos;m passion for crafting seamless user experiences. Proficient in frontend technologies like React and backend languages such as Node.js. Adept at database management, API integration, and deployment. Detail-oriented problem solver with excellent communication skills, committed to delivering high-quality and scalable web solutions.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-start justify-start w-1/2 mt-auto">
                <p >Follwo me on: </p>
                <Separator />
                <div className="w-full pt-1">
                    <SocialMedia />
                </div>
            </CardFooter>
        </Card>
    )
}