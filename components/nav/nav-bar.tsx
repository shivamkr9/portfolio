import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export default function NavBar() {
    return (
        <div className="fixed top-0 right-0 w-full z-20">
            <div className="p-4 flex w-full justify-between items-center bg-muted">
                <div className="block md:hidden">
                    <Link href="/"
                        className="flex items-center justify-start gap-2"
                    >
                        <Icons.logo size={36} className="text-background bg-primary p-1 rounded-md" />
                        <Image src="/shivam.png"
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="space-x-2 ml-auto flex items-center">
                    <Button
                        asChild
                        variant="default"
                        className="rounded-full gap-2"
                    >
                        <Link
                            href="/shivam.pdf"
                            target="_blank"
                        >
                            <Icons.document size={26} className="sm:block hidden" />
                            My Resume
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="action"
                        className="rounded-full gap-2"
                    >
                        <Link
                            href="mailto:sk9355622@gmail.com"
                            target="_blank"
                        >
                            <Icons.contact size={26} className="sm:block hidden" />
                            Hire Me
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}