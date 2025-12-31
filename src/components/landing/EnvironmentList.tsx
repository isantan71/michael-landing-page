import { Environment } from "@/config/site";
import { PortBadge } from "./PortBadge";

export function EnvironmentList({
  environments,
  port,
  isPlayground = false,
}: {
  environments: Environment[];
  port?: number;
  isPlayground?: boolean;
}) {
  return (
    <div className="space-y-2.5 -mx-4 px-4 md:mx-0 md:px-0">
      {port !== undefined && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-gray-600">Port:</span>
          <PortBadge port={port} />
        </div>
      )}
      {environments.map((env) => (
        <a
          key={env.name}
          href={env.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full p-3.5 md:p-3 bg-white rounded-lg border transition-all group shadow-sm hover:shadow-md ${
            isPlayground
              ? "border-violet-200 hover:border-violet-400"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`text-xs font-bold uppercase tracking-wide ${
                    isPlayground ? "text-violet-700" : "text-gray-900"
                  }`}
                >
                  {env.name}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-colors flex-shrink-0 ${
                    isPlayground
                      ? "text-violet-400 group-hover:text-violet-600"
                      : "text-gray-400 group-hover:text-gray-600"
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
              </div>
              {env.description && (
                <p className="text-xs text-gray-600 mb-1.5 leading-relaxed">
                  {env.description}
                </p>
              )}
              <p
                className={`text-xs break-all font-mono leading-relaxed ${
                  isPlayground ? "text-violet-500" : "text-gray-500"
                }`}
              >
                {env.url}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
