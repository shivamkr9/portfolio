import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import MenuItems from "@/components/nav/menu-items";
import MobileMenuItems from "@/components/nav/mobile-menu-items";
import NavBar from "@/components/nav/nav-bar";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <NavBar />
            <div className="md:block min-w-[240px] hidden fixed left-0 z-30 top-0 h-full bg-muted p-4">
                <div className="flex w-full flex-col gap-4 space-y-2 h-full">
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
                    <MenuItems />
                </div>
            </div>
            <div className="md:hidden block">
                <div className="fixed bottom-0 left-0 w-full bg-background z-20">
                    <MobileMenuItems />
                </div>
            </div>
            <main className="flex-grow flex flex-col md:ml-[240px] ml-0">
                {children}
                <div className="mt-auto">
                    <Footer />
                </div>
            </main>

        </div>
    );
}