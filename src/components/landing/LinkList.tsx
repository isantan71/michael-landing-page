import { Link } from "@/config/site";
import { PortBadge } from "./PortBadge";

export function LinkList({
    links,
    port,
    isPlayground = false,
    isFirstSection = false,
}: {
    links: Link[];
    port?: number;
    isPlayground?: boolean;
    isFirstSection?: boolean;
}) {
    return (
        <div className="space-y-2.5 -mx-4 px-4 md:mx-0 md:px-0 mt-1">
            {links.map((link, linkIndex) => {
                const isStandard = isFirstSection && linkIndex === 0;

                return (
                    <div
                        key={link.name}
                        className={`block w-full transition-all group ${isStandard
                            ? isPlayground
                                ? "p-4 md:p-3.5 bg-white rounded-xl border-2 border-violet-200 hover:border-violet-400 shadow-sm hover:shadow-md"
                                : "p-4 md:p-3.5 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-400 shadow-sm hover:shadow-md"
                            : "p-2 md:p-1.5 bg-gray-50/20 rounded-md border border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-100/40 opacity-60 hover:opacity-100 mt-1"
                            }`}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    {isStandard && (
                                        <div className={`w-1.5 h-1.5 rounded-full ${isPlayground ? "bg-violet-500" : "bg-black"}`} />
                                    )}
                                    <span
                                        className={`tracking-wide ${isStandard
                                            ? `text-[13px] font-bold uppercase ${isPlayground ? "text-violet-700" : "text-gray-900"}`
                                            : "text-[9px] font-mono font-semibold text-gray-400 uppercase tracking-tighter"
                                            }`}
                                    >
                                        {link.name}
                                    </span>
                                </div>
                                {link.description && (
                                    <p className={`${isStandard ? "text-xs mb-2.5" : "text-[9px] mb-1.5"} text-gray-400 leading-relaxed font-medium`}>
                                        {link.description}
                                    </p>
                                )}
                                <div className="flex flex-col gap-2">
                                    {link.urls.map((url, urlIndex) => (
                                        <a
                                            key={`${url}-${urlIndex}`}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${isStandard ? "text-[13px] font-semibold" : "text-[10px]"} break-all font-mono leading-relaxed flex items-center gap-2 group/url transition-colors ${isPlayground ? "text-violet-500 hover:text-violet-700" : "text-gray-500 hover:text-gray-900"
                                                }`}
                                        >
                                            <svg
                                                className={`${isStandard ? "w-3.5 h-3.5" : "w-3 h-3"} flex-shrink-0 transition-colors ${isPlayground
                                                    ? "text-violet-300 group-hover/url:text-violet-500"
                                                    : "text-gray-300 group-hover/url:text-gray-500"
                                                    }`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={isStandard ? 2.5 : 2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                />
                                            </svg>
                                            {url}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
