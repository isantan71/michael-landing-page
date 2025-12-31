export function capitalizeSectionTitle(title: string): string {
    return title
        .split(/[\s-_]+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function SectionTabs({
    sections,
    activeSection,
    onSectionChange,
    isPlayground = false,
}: {
    sections: string[];
    activeSection: string;
    onSectionChange: (section: string) => void;
    isPlayground?: boolean;
}) {
    return (
        <div className="flex gap-1 mb-4 border-b border-gray-200 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide overflow-x-auto whitespace-nowrap">
            {sections.map((section) => (
                <button
                    key={section}
                    onClick={() => onSectionChange(section)}
                    className={`flex-1 md:flex-none px-4 md:px-3 py-2.5 md:py-1.5 text-xs font-semibold transition-all ${activeSection === section
                        ? isPlayground
                            ? "text-violet-700 border-b-2 border-violet-600"
                            : "text-gray-900 border-b-2 border-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    {capitalizeSectionTitle(section)}
                </button>
            ))}
        </div>
    );
}
