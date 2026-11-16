"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            obs.disconnect();
            const duration = 2000;
            const start = performance.now();
            const tick = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.floor(eased * end));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        });
        obs.observe(el);
        return () => obs.disconnect();
    }, [end]);

    return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}