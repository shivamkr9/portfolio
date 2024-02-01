"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import SocialMedia from "../socialmedia";
import { MenuConfig } from "@/config/menu-config";

export default function MenuItems(

) {
    const pathname = usePathname()
    return (
        <div className="flex w-full flex-col gap-2 h-full">
            {MenuConfig.map((item, index) => (
                <Button
                    key={index}
                    asChild
                    variant={pathname === item.href ? "default" : "outline"}
                    className="gap-2 justify-start rounded-full text-base"
                >
                    <Link href={item.href}>
                        <item.icons size={26} />
                        {item.title}
                    </Link>
                </Button>
            ))}
            <Button
                asChild
                variant={"action"}
                className="gap-2 justify-start rounded-full text-base"
            >
                <Link href="mailto:sk9355622@gmail.com" target="_blank">
                    <Icons.contact size={26} />
                    Hire me
                </Link>
            </Button>
            <Separator />
            <div className="flex flex-col space-y-2 mt-auto">
                <p className="font-mono">
                    Follow me on.
                </p>
                <div className="w-full">
                    <SocialMedia />
                </div>
            </div>
        </div>
    )
}