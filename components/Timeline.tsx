"use client";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "./FadeIn";
import { timeline } from "@/data/content";

export default function Timeline() {

    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    const [progress, setProgress] = useState<number[]>(timeline.map(() => 0));

    useEffect(() => {
        let frame = 0;

        const update = () => {
            const trigger = window.innerHeight * 0.6;
            setProgress(
                rowRefs.current.map((el) => {
                    if (!el) return 0;
                    const { top, height } = el.getBoundingClientRect();
                    const p = (trigger - top) / height;
                    return Math.min(Math.max(p, 0), 1);
                })
            );
        };

        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section id="timeline" className="bg-[#0c1a13] py-20 text-white md:py-28">
            <div className="mx-auto max-w-6xl px-5">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Timeline
                </p>
                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">From Humble Beginnings</h2>

                <div className="mt-16">
                    {timeline.map((item, i) => {
                        const p = progress[i];
                        const active = p > 0;

                        return (
                            <div key={item.year}>

                                <h3 className={`pl-10 pb-1 text-3xl font-extrabold transition-colors duration-500 md:pl-0 md:text-center md:text-4xl ${active ? "text-[#a6e37a]" : "text-[#a6e37a]/30"}`}>
                                    {item.year}
                                </h3>


                                <div
                                    ref={(el) => { rowRefs.current[i] = el; }}
                                    className="relative grid gap-8 py-10 pl-10 md:grid-cols-2 md:gap-24 md:pl-0"
                                >

                                    <div className="absolute left-3 top-0 h-full md:left-1/2">

                                        <div className="absolute inset-y-0 border-l border-dashed border-white/15" />

                                        <div className="absolute top-0 border-l border-dashed border-white" style={{ height: `${p * 100}%` }} />

                                        <span
                                            className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-white bg-[#0c1a13]"
                                            style={{ top: `calc(${p * 100}% - 7px)` }}
                                        />
                                    </div>

                                    <FadeIn className={i % 2 === 1 ? "md:order-2" : ""}>
                                        <img src={item.image} alt={item.title} className="h-64 w-full rounded-3xl object-cover md:h-72" />
                                    </FadeIn>


                                    <FadeIn delay={150} className="flex flex-col justify-center">
                                        <h4 className="text-2xl font-extrabold md:text-3xl">{item.title}</h4>
                                        <p className="mt-3 max-w-sm leading-relaxed text-white/80">{item.text}</p>
                                    </FadeIn>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="btn-primary bg-primary-light">See full timeline <FiArrowRight /></a>
                </div>
            </div>
        </section>
    );
}