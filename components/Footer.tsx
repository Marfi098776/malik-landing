import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import { brands } from "@/data/content";

const company = ["About Us", "Our Products", "News & Stories", "Careers", "Contact Us"];
const socials = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-primary-dark pt-20 text-white/70">
            <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <p className="text-2xl font-extrabold text-white">Malik<span className="text-accent">Seeds</span></p>
                    <p className="mt-4 text-sm leading-relaxed">
                        We are committed to delivering high-performance hybrid seed varieties that help farmers grow with confidence.
                    </p>
                    <p className="mt-6 text-sm font-semibold text-white">Follow us on</p>
                    <div className="mt-3 flex gap-3">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a key={label} href={href} aria-label={label} className="rounded-full bg-white/10 p-3 transition hover:bg-accent hover:text-primary-dark">
                                <Icon />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="mb-5 font-semibold text-white">Company</h4>
                    <ul className="space-y-3 text-sm">
                        {company.map((c) => <li key={c}><a href="#" className="transition hover:text-accent">{c}</a></li>)}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-5 font-semibold text-white">Our Brands</h4>
                    <ul className="space-y-3 text-sm">
                        {brands.map((b) => <li key={b.name}><a href={b.href} className="transition hover:text-accent">{b.name}</a></li>)}
                    </ul>
                </div>

                <div>
                    <h4 className="mb-5 font-semibold text-white">Contact</h4>
                    <ul className="space-y-4 text-sm">

                        <li className="flex items-center gap-3"><FiPhone className="text-accent" /> +880 1XXX-XXXXXX</li>
                        <li className="flex items-center gap-3"><FiMail className="text-accent" /> info@malikseeds.com</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 border-t border-white/10 py-6 text-center text-sm">
                © 2026 Malik Seeds. All rights reserved.
            </div>
        </footer>
    );
}