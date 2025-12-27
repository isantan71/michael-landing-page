"use client";

export function SideNav({
    items,
    activeId,
}: {
    items: { id: string; name: string; parent?: string }[];
    activeId: string;
}) {
    const activeItem = items.find((i) => i.id === activeId);
    const activeParent = activeItem?.parent || (activeItem?.id && items.some(i => i.parent === activeItem.id) ? activeItem.id : null);

    return (
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-40">
            {items.map((item) => {
                const isSubItem = !!item.parent;
                const isSelected = activeId === item.id;
                const shouldShowText = isSelected || (item.parent && item.parent === activeParent) || (item.id === activeParent);

                return (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`group flex items-center gap-2 transition-all ${isSelected ? "translate-x-1" : "hover:translate-x-0.5"}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <div className="w-3 flex justify-center items-center flex-shrink-0">
                            <div
                                className={`rounded-full transition-all ${isSelected
                                    ? (isSubItem ? "bg-gray-600 scale-125" : "bg-black scale-150")
                                    : "bg-gray-200 group-hover:bg-gray-300"
                                    } ${isSubItem ? "w-1 h-1" : "w-1.5 h-1.5"}`}
                            />
                        </div>
                        <span
                            className={`font-semibold tracking-wider uppercase transition-all ${shouldShowText
                                ? (isSelected ? (isSubItem ? "text-gray-600" : "text-black") : (isSubItem ? "text-gray-400" : "text-gray-500"))
                                : "text-gray-400 opacity-0 group-hover:opacity-100"
                                } ${isSubItem ? "text-[10px]" : "text-xs"}`}
                        >
                            {item.name}
                        </span>
                    </a>
                );
            })}
        </nav>
    );
}
