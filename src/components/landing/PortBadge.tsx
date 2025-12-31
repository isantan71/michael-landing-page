export function PortBadge({ port }: { port: number }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`http://localhost:${port}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-semibold bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 transition-colors cursor-pointer"
      title={`Open localhost:${port}`}
    >
      :{port}
    </button>
  );
}
