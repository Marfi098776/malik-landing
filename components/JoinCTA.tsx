import { FiArrowRight } from "react-icons/fi";

export default function JoinCTA() {
    return (
        <section id="join" className="py-20">
            <div className="mx-auto max-w-7xl px-5">
                <div className="grid overflow-hidden rounded-3xl bg-primary lg:grid-cols-2">
                    <div className="flex flex-col justify-center p-10 md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Join our Team</p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-5xl">
                            Shape the Future of Agriculture with Malik Seeds
                        </h2>
                        <a href="#" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-primary-dark transition hover:bg-white">
                            Join Today <FiArrowRight />
                        </a>
                    </div>
                    <img src="https://picsum.photos/seed/team2/800/600" alt="Malik Seeds team" className="h-72 w-full object-cover lg:h-full" />
                </div>
            </div>
        </section>
    );
}