"use client";

import { useState, useEffect } from "react";
import { heroWords } from "@/config/site";

export function WordCycler() {
    const words = heroWords;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setIsAnimating(false);
            }, 188);
        }, 2666);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span
            className={`relative inline-block transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
        >
            <span className="relative z-10 italic">{words[currentIndex]}</span>
            <span className="absolute inset-0 bg-pink-200 -rotate-1 rounded" />
        </span>
    );
}
