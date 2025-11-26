"use client";


import { useState, useEffect } from "react";

// Word cycler component
function WordCycler() {
  const words = ["beautiful", "lean and agile", "intuitive", "monetizable"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 188);
    }, 2666);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span
      className={`relative inline-block transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
    >
      <span className="relative z-10 italic">{words[currentIndex]}</span>
      <span className="absolute inset-0 bg-pink-200 -rotate-1 rounded" />
    </span>
  );
}

// Logo component with inline SVG
function Logo() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="64" height="64" rx="12" fill="#000000" />
      <text
        x="32"
        y="45"
        fontSize="36"
        fontWeight="bold"
        fill="#ffffff"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
      >
        P
      </text>
    </svg>
  );
}

// Product icon component
function ProductIcon({ bgColor, icon }: { bgColor: string; icon: string }) {
  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg"
      style={{ backgroundColor: bgColor }}
    >
      {icon}
    </div>
  );
}

// Twitter icon
function TwitterIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 hover:opacity-100 transition-opacity"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
      />
    </svg>
  );
}

// GitHub icon
function GitHubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 hover:opacity-100 transition-opacity"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const products = [
    {
      name: "AI Browser Extension",
      description: "AI browser extension",
      icon: "B",
      bgColor: "#a2af4a",
      href: "/",
    },
    {
      name: "B",
      description: "A lightweight file converter",
      icon: "P",
      bgColor: "#5da55c",
      href: "/",
    },
    {
      name: "N",
      description: "hello worlds",
      icon: "N",
      bgColor: "#d4c05f",
      href: "/",
    },
    {
      name: "C",
      description: "GUI for Claude Code",
      icon: "C",
      bgColor: "#b46249",
      href: "/",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 md:px-0">
      {/* Header */}
      <header className="text-center pt-24 md:pt-48 space-y-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo />
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-bold">
          Build <WordCycler /> apps
          <br />
          with ài.
        </h1>
      </header>

      {/* Products Section */}
      <section className="max-w-[640px] mx-auto mt-24 md:mt-24 space-y-4">
        {products.map((product) => (
          <a
            key={product.name}
            href={product.href}
            target={product.href.startsWith("http") ? "_blank" : "_self"}
            rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="block bg-zinc-50 p-4 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <article className="flex items-center gap-4">
              <ProductIcon bgColor={product.bgColor} icon={product.icon} />
              <div>
                <h3 className="font-bold text-sm">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
              </div>
            </article>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer className="flex justify-center gap-4 py-24 mt-24">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our GitHub profile"
        >
          <GitHubIcon />
        </a>
      </footer>
    </main>
  );
}
