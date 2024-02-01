import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { SocialMediaConfig } from "@/config/social-media-config";

export default function SocialMedia() {
    return (
        <div className="flex justify-between items-center ">
            {SocialMediaConfig.map((item, index) => (
                <Button
                    asChild
                    key={index}
                    size={"icon"}
                    variant={"ghost"}
                    className="h-auto w-auto"
                >
                    <Link href={item.link} target="_blank">
                        <item.icons size={26} />
                    </Link>
                </Button>
            ))}
        </div>
    )
}