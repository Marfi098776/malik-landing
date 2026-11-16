"use client";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa6";
import { testimonials } from "@/data/content";

export default function Testimonials() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: 1 | -1) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.firstElementChild as HTMLElement | null;
        const amount = card ? card.offsetWidth + 24 : track.clientWidth;
        track.scrollBy({ left: dir * amount, behavior: "smooth" });
    };

    return (
        <section className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="eyebrow">Success Stories</p>
                        <h2 className="heading">Voice of Impact</h2>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => scroll(-1)} aria-label="Previous" className="rounded-full border-2 border-primary p-3 text-primary transition hover:bg-primary hover:text-white">
                            <FiArrowLeft />
                        </button>
                        <button onClick={() => scroll(1)} aria-label="Next" className="rounded-full bg-primary p-3 text-white transition hover:bg-primary-dark">
                            <FiArrowRight />
                        </button>
                    </div>
                </div>

                <div ref={trackRef} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                    {testimonials.map((t) => (
                        <article key={t.name} className="w-full shrink-0 snap-start rounded-2xl bg-white p-8 shadow-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                            <FaQuoteLeft className="text-3xl text-accent" />
                            <p className="mt-5 leading-relaxed text-gray-600">{t.quote}</p>
                            <div className="mt-6 flex items-center gap-4">
                                <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-primary">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.location}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}