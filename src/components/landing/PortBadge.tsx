export function PortBadge({ port }: { port: number }) {
    return (
        <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-semibold bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-md border border-gray-300 shadow-sm">
            :{port}
        </span>
    );
}
