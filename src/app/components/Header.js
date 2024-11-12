"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
    { text: "Home", href: "/" },
    { text: "About", href: "/pages/about" },
    { text: "Services", href: "/pages/services" },
    { text: "Gallery", href: "/pages/gallery" },
    { text: "Contact", href: "/pages/contact" },
    { text: "Story", href: "/pages/story" },
    { text: "Careers", href: "/pages/careers" },
    { text: "News", href: "/pages/news" },
];

export default function Header() {
    const location = usePathname();
    const [OpenMenu, setOpenMenu] = useState(false);

    return (
        <header className="fixed top-0 z-[100] bg-slate-900/50 backdrop-blur-xl w-full">
            <nav className="flex gap-5 px-[20px] w-[98%] justify-between items-center">
                <p className="text-[40px] sc-830:text-[30px] text-white">DB-</p>
                <div className="flex sc-830:hidden gap-8">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            style={{
                                color: location === link.href ? "#60a5fa" : "",
                                textDecoration: location === link.href ? "underline" : "none",
                                textDecorationThickness: "2px",
                            }}
                            className="hover:text-blue-400 text-white underline-offset-2 font-semibold hover:scale-105"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
                <button
                    onClick={() => setOpenMenu(!OpenMenu)}
                    className="sc-830:inline-block hidden text-3xl text-white active:scale-90"
                >
                    {OpenMenu ? "×" : "≡"}
                </button>
            </nav>

            <div
                className={`${OpenMenu ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -rotate-90 translate-x-full"
                    } flex justify-end transition-all duration-300 ease-in-out fixed right-0 z-50`}
            >
                <div className="bg-slate-950/50 mx-2 mt-2 rounded-md flex w-fit flex-col gap-2">
                    {links.map((link, i) => (
                        <Link
                            key={i}
                            href={link.href}
                            style={{
                                color: location === link.href ? "#60a5fa" : "",
                                backgroundColor: location === link.href ? "#444455" : "",
                            }}
                            onClick={() => setOpenMenu(false)}
                            className="hover:bg-slate-600 duration-200 p-2 px-4 rounded text-white font-semibold hover:scale-105"
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
}
