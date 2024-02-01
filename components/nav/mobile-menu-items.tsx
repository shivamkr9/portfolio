"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MenuConfig } from "@/config/menu-config";

export default function MobileMenuItems() {
    const pathname = usePathname()
    return (
        <div className="bg-background p-2 flex justify-around items-center gap-2 ">
            {MenuConfig.map((item, index) => (
                <Button
                    key={index}
                    asChild
                    variant={pathname === item.href ? "default" : "ghost"}
                    className="text-base flex-col items-center justify-center h-auto w-full"
                >
                    <Link href={item.href}>
                        <item.icons size={22} />
                        <span className="text-xs">
                            {item.title}
                        </span>
                    </Link>
                </Button>
            ))}
        </div>
    )
}