export function CategoryTabs({
    categories,
    activeCategory,
    onCategoryChange,
    isPlayground = false,
}: {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    isPlayground?: boolean;
}) {
    const isSingleCategory = categories.length === 1;

    return (
        <div className="flex gap-1 mb-4 border-b border-gray-200 -mx-4 px-4 md:mx-0 md:px-0">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`${isSingleCategory ? "w-1/2" : "flex-1"} md:flex-none px-4 md:px-3 py-2.5 md:py-1.5 text-xs font-semibold transition-all capitalize ${activeCategory === category
                        ? isPlayground
                            ? "text-violet-700 border-b-2 border-violet-600"
                            : "text-gray-900 border-b-2 border-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
