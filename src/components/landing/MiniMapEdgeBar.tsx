"use client";

import { useState, useEffect, useRef } from "react";

interface NavItem {
    id: string;
    name: string;
    parent?: string;
}

export function MiniMapEdgeBar({
    items,
    activeId,
}: {
    items: NavItem[];
    activeId: string;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [sectionOffsets, setSectionOffsets] = useState<{ id: string; ratio: number }[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const calculateOffsets = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight <= 0) return;

            const offsets = items.map(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    return {
                        id: item.id,
                        ratio: (element.offsetTop / document.documentElement.scrollHeight) * 100
                    };
                }
                return null;
            }).filter((item): item is { id: string; ratio: number } => item !== null);

            setSectionOffsets(offsets);
        };

        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            setScrollProgress(progress);
        };

        // Calculate initially and on resize
        calculateOffsets();
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", calculateOffsets);

        // Also recalculate after a short delay to account for dynamic content loading
        const timer = setTimeout(calculateOffsets, 1000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", calculateOffsets);
            clearTimeout(timer);
        };
    }, [items]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        setIsOpen(false);
    };

    return (
        <>
            {/* Redesigned Edge Bar - Inset and more visible */}
            <div
                className="fixed right-3 top-1/4 bottom-1/4 w-1.5 lg:hidden z-40 bg-gray-200/30 rounded-full cursor-pointer group transition-all hover:w-3"
                onClick={() => setIsOpen(!isOpen)}
                title="Jump to section"
            >
                {/* Hit area expansion */}
                <div className="absolute -inset-x-4 inset-y-0" />

                {/* Section Markers */}
                {sectionOffsets.map((offset) => (
                    <div
                        key={offset.id}
                        className={`absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full transition-colors ${activeId === offset.id ? "bg-black" : "bg-gray-400/50"
                            }`}
                        style={{ top: `${offset.ratio}%` }}
                    />
                ))}

                {/* Scroll Indicator - Pill shape */}
                <div
                    className="absolute left-0 right-0 bg-black rounded-full transition-all duration-100 shadow-sm"
                    style={{
                        top: `${scrollProgress}%`,
                        height: "12px",
                        transform: "translateY(-50%)"
                    }}
                />

                {/* Hover Label */}
                <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-black text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest">
                    Nav
                </div>
            </div>

            {/* Overlay (Same functional logic, slightly refined UI) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 lg:hidden"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl p-6 w-72 max-h-[80vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className="font-bold text-xl">Navigation</h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Jump to section</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                                aria-label="Close"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-2">
                            {items.map((item) => {
                                const isSubItem = !!item.parent;
                                const isSelected = activeId === item.id;

                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center gap-4 ${isSelected
                                                ? "bg-black text-white shadow-lg scale-[1.02]"
                                                : "hover:bg-gray-50 text-gray-700 active:scale-95"
                                            }`}
                                    >
                                        {isSubItem && (
                                            <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white/50" : "bg-gray-300"} ml-1`} />
                                        )}
                                        <span className={`font-semibold ${isSubItem ? "text-sm" : "text-base"}`}>
                                            {item.name}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
