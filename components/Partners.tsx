import { partners } from "@/data/content";

export default function Partners() {
    return (
        <section className="py-16">
            <h2 className="heading text-center">Our Development Partners</h2>

            <div className="relative mt-12 overflow-hidden">

                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

                <div className="marquee flex">
                    {[...partners, ...partners].map((p, i) => (
                        <div key={i} className="mr-6 flex h-20 w-52 shrink-0 items-center justify-center rounded-xl border border-gray-200 px-4 text-center text-sm font-semibold text-gray-500 transition hover:border-primary hover:text-primary">

                            {p}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}