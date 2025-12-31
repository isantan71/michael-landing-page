export function PortBadge({ port }: { port: number }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`http://localhost:${port}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-mono font-bold bg-white text-gray-900 rounded-lg border-2 border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all hover:shadow-md cursor-pointer group/port"
      title={`Open localhost:${port}`}
    >
      <span>:{port}</span>
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
    </button>
  );
}
