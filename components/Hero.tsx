"use client";
import { useEffect, useState } from "react";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { heroImages } from "@/data/content";

export default function Hero() {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const id = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
            {/* All images are stacked on top of each other. Only the active one is visible (fade effect) */}
            {heroImages.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1500ms] ${i === current ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}
                />
            ))}

            <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-black/10" />


            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-5">
                <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                    Helping Farmers Grow with Confidence
                </h1>
                <p className="mt-5 text-xl font-semibold tracking-widest text-accent">SINCE 1969</p>
                <div className="mt-10 flex flex-wrap gap-4">
                    <a href="#brands" className="btn-primary bg-accent text-primary-dark hover:bg-white">
                        Our Products <FiArrowRight />
                    </a>
                    <a href="#about" className="btn-outline">Learn More</a>
                </div>


                <div className="mt-12 flex gap-2">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${i === current ? "w-10 bg-accent" : "w-2 bg-white/60"}`}
                        />
                    ))}
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-sm text-white/80">
                Scroll to explore
                <FiChevronDown className="mt-2 animate-bounce text-2xl" />
            </a>
        </section>
    );
}