export function PortBadge({ port }: { port?: number }) {
  const handleClick = (e: React.MouseEvent) => {
    if (!port) return;
    e.preventDefault();
    e.stopPropagation();
    window.open(`http://localhost:${port}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      disabled={!port}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono font-bold rounded-lg border-2 shadow-sm transition-all ${port
          ? "bg-white text-gray-900 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md cursor-pointer group/port"
          : "bg-gray-50 text-gray-400 border-gray-100 cursor-default"
        }`}
      title={port ? `Open localhost:${port}` : "No port configured"}
    >
      <span>:{port || "-"}</span>
      {port && (
        <svg
          className="w-3.5 h-3.5 text-gray-400 group-hover/port:text-blue-500 transition-colors"
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
      )}
    </button>
  );
}
