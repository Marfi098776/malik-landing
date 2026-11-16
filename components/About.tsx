
import FadeIn from "./FadeIn";
import Counter from "./Counter";
import { aboutImages, stats } from "@/data/content";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28">

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
                <FadeIn>
                    <p className="eyebrow">Who we are</p>
                    <h2 className="heading">About Malik Seeds</h2>
                    <p className="mt-6 leading-relaxed text-gray-600">
                        Since 1969, when we introduced Atlas-70 cabbage from Sakata Seed Corporation to Bangladesh, Malik Seeds has worked
                        to bring world-class seed varieties to local farmers. Today we combine decades of experience with modern research
                        to help farmers grow more with confidence.
                    </p>
                    <a href="#" className="btn-primary mt-8">Learn More</a>
                </FadeIn>

                <FadeIn delay={200}>
                    <div className="grid grid-cols-2 gap-4">
                        {aboutImages.map((im, i) => (
                            <div key={im.label} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 h-64" : "h-48"}`}>
                                <img src={im.src} alt={im.label} className="h-full w-full object-cover" />
                                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-primary">
                                    {im.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>

            <div className="mx-auto mt-20 max-w-7xl px-5">
                <FadeIn>
                    <div className="grid grid-cols-2 gap-8 rounded-3xl bg-primary p-10 text-white md:grid-cols-3 lg:grid-cols-5">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-4xl font-bold text-accent">
                                    <Counter end={s.value} suffix={s.suffix} />
                                </p>
                                <p className="mt-2 text-sm text-white/80">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}