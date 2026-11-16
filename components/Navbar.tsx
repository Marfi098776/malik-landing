"use client";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { navLinks } from "@/data/content";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [brandsOpen, setBrandsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const linkColor = scrolled ? "text-gray-800 hover:text-primary" : "text-white hover:text-accent";

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-5"}`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5">
                <a href="#home" className={`text-2xl font-extrabold ${scrolled ? "text-primary" : "text-white"}`}>
                    Malik<span className="text-accent">Seeds</span>
                </a>

                <ul className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) =>
                        link.children ? (

                            <li key={link.label} className="group relative">
                                <button className={`flex items-center gap-1 font-medium transition ${linkColor}`}>
                                    {link.label}
                                    <FiChevronDown className="transition group-hover:rotate-180" />
                                </button>

                                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                                    <ul className="w-64 rounded-xl bg-white p-2 shadow-xl">
                                        {link.children.map((c) => (
                                            <li key={c.label}>
                                                <a href={c.href} className="block rounded-lg px-4 py-2 text-gray-700 transition hover:bg-cream hover:text-primary">
                                                    {c.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ) : (
                            <li key={link.label}>
                                <a href={link.href} className={`font-medium transition ${linkColor}`}>{link.label}</a>
                            </li>
                        )
                    )}
                </ul>

                <a href="#join" className="hidden rounded-full bg-accent px-6 py-2.5 font-semibold text-primary-dark transition hover:scale-105 lg:inline-block">
                    Join us
                </a>

                <button onClick={() => setOpen(true)} className={`text-3xl lg:hidden ${scrolled ? "text-primary" : "text-white"}`} aria-label="Open menu">
                    <FiMenu />
                </button>
            </nav>

            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />
            <aside className={`fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setOpen(false)} className="mb-8 ml-auto block text-3xl text-primary" aria-label="Close menu">
                    <FiX />
                </button>
                <ul className="space-y-1">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            {link.children ? (
                                <>
                                    <button onClick={() => setBrandsOpen(!brandsOpen)} className="flex w-full items-center justify-between py-3 font-medium text-gray-800">
                                        {link.label} <FiChevronDown className={`transition ${brandsOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {brandsOpen && (
                                        <ul className="mb-2 space-y-1 border-l-2 border-primary/20 pl-4">
                                            {link.children.map((c) => (
                                                <li key={c.label}>
                                                    <a href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-gray-600">{c.label}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-gray-800">{link.label}</a>
                            )}
                        </li>
                    ))}
                </ul>
                <a href="#join" onClick={() => setOpen(false)} className="btn-primary mt-6 w-full justify-center">Join us</a>
            </aside>
        </header>
    );
}