import { FiArrowRight } from "react-icons/fi";
import FadeIn from "./FadeIn";
import { news } from "@/data/content";

export default function News() {
    return (
        <section id="news" className="bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="eyebrow">News & Stories</p>
                        <h2 className="heading max-w-2xl">Insights from agricultural research & field experts</h2>
                    </div>
                    <a href="#" className="btn-primary">View all <FiArrowRight /></a>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {news.map((n, i) => (
                        <FadeIn key={n.title} delay={(i % 3) * 100} className="h-full">
                            <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-xl">

                                <div className="overflow-hidden">
                                    <img src={n.image} alt={n.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">{n.category}</span>
                                        <span className="text-gray-500">{n.date}</span>
                                    </div>

                                    <h3 className="mt-4 line-clamp-2 text-lg font-bold text-gray-900 transition group-hover:text-primary">{n.title}</h3>
                                    <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                        Read more <FiArrowRight className="transition group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}