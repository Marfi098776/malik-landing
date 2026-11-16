import { FiArrowUpRight } from "react-icons/fi";
import FadeIn from "./FadeIn";
import { brands } from "@/data/content";

export default function Brands() {
    return (
        <section id="brands" className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5">
                <FadeIn className="text-center">
                    <p className="eyebrow">Our Brands</p>
                    <h2 className="heading">Growing Together, Brand by Brand</h2>
                </FadeIn>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {brands.map((b, i) => (

                        <FadeIn key={b.name} delay={i * 100} className="h-full">

                            <a href={b.href} className="group flex h-full flex-col justify-between rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-primary hover:shadow-xl">
                                <div>
                                    <span className="text-5xl font-bold text-primary/10 transition group-hover:text-white/20">0{i + 1}</span>
                                    <h3 className="mt-4 text-2xl font-bold text-primary transition group-hover:text-white">{b.name}</h3>
                                    <p className="mt-3 text-gray-600 transition group-hover:text-white/80">{b.tagline}</p>
                                </div>
                                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition group-hover:text-accent">
                                    Explore <FiArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </span>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}