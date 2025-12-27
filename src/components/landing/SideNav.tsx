"use client";

import { useEffect, useState } from "react";

interface NavItem {
  id: string;
  name: string;
  parent?: string;
}

export function SideNav({
  items,
  activeId,
}: {
  items: NavItem[];
  activeId: string;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sectionOffsets, setSectionOffsets] = useState<{ id: string; ratio: number }[]>([]);

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

    calculateOffsets();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateOffsets);
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
  };

  return (
    <nav className="fixed right-3 top-1/4 bottom-1/4 w-1.5 hidden lg:flex flex-col z-40 bg-gray-200/30 rounded-full cursor-pointer group transition-all hover:w-3">
      {/* Hit area expansion for easier hover */}
      <div className="absolute -inset-x-4 inset-y-0" />

      {/* Section Markers & Labels */}
      {items.map((item) => {
        const offset = sectionOffsets.find(o => o.id === item.id);
        if (!offset) return null;

        const isSubItem = !!item.parent;
        const isSelected = activeId === item.id;

        return (
          <div
            key={item.id}
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            style={{ top: `${offset.ratio}%` }}
          >
            {/* Dot */}
            <div
              onClick={() => scrollToSection(item.id)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isSelected
                  ? "bg-black scale-125"
                  : "bg-gray-400/50 group-hover:bg-gray-400"
                } ${isSubItem ? "w-1 h-1" : "w-1.5 h-1.5"}`}
            />

            {/* Label - visible on hover or if selected */}
            <button
              onClick={() => scrollToSection(item.id)}
              className={`absolute right-full mr-6 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap uppercase tracking-widest text-[10px] font-bold shadow-sm pointer-events-none group-hover:pointer-events-auto ${isSelected
                  ? "bg-black text-white opacity-100 translate-x-0"
                  : "bg-white text-gray-500 opacity-0 group-hover:opacity-100 translate-x-2"
                }`}
            >
              {item.name}
            </button>
          </div>
        );
      })}

      {/* Scroll Indicator - Pill shape */}
      <div
        className="absolute left-0 right-0 bg-black rounded-full transition-all duration-100 shadow-sm pointer-events-none"
        style={{
          top: `${scrollProgress}%`,
          height: "12px",
          transform: "translateY(-50%)"
        }}
      />
    </nav>
  );
}
