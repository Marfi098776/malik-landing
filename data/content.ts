
const img = (seed: string, w = 800, h = 600) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const brands = [
    { name: "Vegetable Seeds", tagline: "High-yield hybrid vegetable varieties for every season.", href: "#" },
    { name: "Potato Seeds", tagline: "Quality seed potatoes for healthier, bigger harvests.", href: "#" },
    { name: "Malik's Farm", tagline: "Fresh produce grown with modern farming practices.", href: "#" },
    { name: "Origene by Malik", tagline: "Premium genetics bred for Bangladeshi conditions.", href: "#" },
    { name: "Malik's Flower", tagline: "Vibrant flower seeds for growers and gardeners.", href: "#" },
    { name: "Innovation & Development", tagline: "Research and trials shaping the future of farming.", href: "#" },
];


export const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Brands", href: "#brands", children: brands.map((b) => ({ label: b.name, href: b.href })) },
    { label: "Our Products", href: "#brands" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
];

export const heroImages = [img("farm1", 1920, 1080), img("farm2", 1920, 1080), img("farm3", 1920, 1080), img("farm4", 1920, 1080)];

export const aboutImages = [
    { src: img("team", 900, 500), label: "Malik Seeds Team" },
    { src: img("field", 500, 500), label: "Years of Experience" },
    { src: img("farmer", 500, 500), label: "Farmer Partners" },
];


export const stats = [
    { value: 1200, suffix: "+", label: "Seed Varieties Trialed" },
    { value: 500, suffix: "+", label: "Ton Seeds Distributed" },
    { value: 300, suffix: "+", label: "Distributor Network" },
    { value: 50, suffix: "+", label: "Agri-Innovation Projects" },
    { value: 5, suffix: "", label: "Decades Farming Legacy" },
];

export const timeline = [
    { year: "1962", title: "A Vision Begins", text: "A small step toward helping local farmers access better seeds.", image: img("t1") },
    { year: "Mid-1960s", title: "The Realization", text: "Seeing that seed quality decides a farmer's harvest and income.", image: img("t2") },
    { year: "Late 1960s", title: "Introduction to World-Class Breeders", text: "Partnering with Sakata and launching Atlas-70 cabbage in 1969.", image: img("t3") },
];


export const testimonials = [
    { name: "Md. Kobbat Hossain Ovi", location: "Savar", quote: "Malik Seeds gave me consistent germination and a harvest I could rely on.", image: img("p1", 200, 200) },
    { name: "Md. Rafiqul Islam Rafiq", location: "Singair", quote: "Their hybrid varieties doubled my yield compared to local seeds.", image: img("p2", 200, 200) },
    { name: "Md. Jangir Alam", location: "Brahmankanda", quote: "The field team guided me from sowing to harvest. Truly trustworthy.", image: img("p3", 200, 200) },
    { name: "Md. Saiful Islam", location: "Manikganj", quote: "Quality seeds, fair prices, and real support for farmers like us.", image: img("p4", 200, 200) },
];

export const partners = ["Dutch Embassy Bangladesh", "World Vision", "Helvetas", "Sakata", "IFAD", "JICA", "KFW DEG"];


export const news = [
    { date: "Aug 30, 2026", category: "Company", title: "Malik Seeds Receives Certificate of Appreciation from Sakata Seed Corporation", image: img("n1") },
    { date: "Aug 30, 2026", category: "Commercial Growers", title: "Commercial growers see record yields this season", image: img("n2") },
    { date: "Aug 30, 2026", category: "Training Programs", title: "Farmer training program on modern vegetable cultivation", image: img("n3") },
    { date: "Aug 30, 2026", category: "Research", title: "New variety trials show strong results in field tests", image: img("n4") },
    { date: "Aug 30, 2026", category: "Company", title: "Expanding our distributor network across Bangladesh", image: img("n5") },
    { date: "Aug 30, 2026", category: "Research", title: "Innovation in seed quality testing and certification", image: img("n6") },
];