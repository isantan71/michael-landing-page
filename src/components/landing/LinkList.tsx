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
        <div className="space-y-2.5 -mx-4 px-4 md:mx-0 md:px-0">
            {port !== undefined && (
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-600">Port:</span>
                    <PortBadge port={port} />
                </div>
            )}
            {links.map((link, linkIndex) => {
                const isSpecial = isFirstSection && linkIndex === 0;

                return (
                    <div
                        key={link.name}
                        className={`block w-full p-3.5 md:p-3 bg-white rounded-lg border transition-all group shadow-sm hover:shadow-md ${isSpecial
                                ? "border-amber-300 bg-amber-50/30 ring-1 ring-amber-200"
                                : isPlayground
                                    ? "border-violet-200 hover:border-violet-400"
                                    : "border-gray-200 hover:border-gray-400"
                            }`}
                    >
                        <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span
                                        className={`text-xs font-bold uppercase tracking-wide ${isSpecial
                                                ? "text-amber-700"
                                                : isPlayground
                                                    ? "text-violet-700"
                                                    : "text-gray-900"
                                            }`}
                                    >
                                        {link.name}
                                    </span>
                                    {isSpecial && (
                                        <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-600 uppercase tracking-tighter">
                                            Primary
                                        </span>
                                    )}
                                </div>
                                {link.description && (
                                    <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                                        {link.description}
                                    </p>
                                )}
                                <div className="flex flex-col gap-1.5">
                                    {link.urls.map((url, urlIndex) => (
                                        <a
                                            key={`${url}-${urlIndex}`}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`text-xs break-all font-mono leading-relaxed flex items-center gap-1.5 group/url transition-colors ${isPlayground ? "text-violet-500 hover:text-violet-700" : "text-gray-500 hover:text-gray-900"
                                                }`}
                                        >
                                            <svg
                                                className={`w-3 h-3 flex-shrink-0 transition-colors ${isPlayground
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
                                                    strokeWidth={2}
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
