"use client";


import { useState, useEffect } from "react";
import { productIcons } from "./icons/products";
import {
  products,
  playgroundProducts,
  heroWords,
  socialLinks,
  generateColorFromString,
  Product,
  Environment,
} from "@/config/site";

// Word cycler component
function WordCycler() {
  const words = heroWords;
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
function ProductIcon({ bgColor, name }: { bgColor: string; name: string }) {
  const iconValue = productIcons[name];

  const fallback = name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  let content: JSX.Element | string = fallback;

  if (typeof iconValue === "string") {
    content = (
      <img
        src={iconValue}
        alt={name}
        className="w-7 h-7 object-contain"
      />
    );
  } else if (iconValue) {
    const IconComponent = iconValue;
    content = <IconComponent />;
  }

  return (
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
      style={{ backgroundColor: bgColor }}
    >
      {content}
    </div>
  );
}

// Port badge component
function PortBadge({ port }: { port: number }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-semibold bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 rounded-md border border-gray-300 shadow-sm">
      :{port}
    </span>
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

// Lock icon for login button
function LockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3z"
        fill="currentColor"
      />
    </svg>
  );
}

// Category tabs component
function CategoryTabs({
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
          className={`${isSingleCategory ? 'w-1/2' : 'flex-1'} md:flex-none px-4 md:px-3 py-2.5 md:py-1.5 text-xs font-semibold transition-all capitalize ${activeCategory === category
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

// Environment list component
function EnvironmentList({
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
          className={`block w-full p-3.5 md:p-3 bg-white rounded-lg border transition-all group shadow-sm hover:shadow-md ${isPlayground
            ? "border-violet-200 hover:border-violet-400"
            : "border-gray-200 hover:border-gray-400"
            }`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`text-xs font-bold uppercase tracking-wide ${isPlayground ? "text-violet-700" : "text-gray-900"
                  }`}>
                  {env.name}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-colors flex-shrink-0 ${isPlayground
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
              <p className={`text-xs break-all font-mono leading-relaxed ${isPlayground ? "text-violet-500" : "text-gray-500"
                }`}>
                {env.url}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

// Product card component
function ProductCard({
  product,
  isLoggedIn,
  isPlayground = false,
}: {
  product: Product;
  isLoggedIn: boolean;
  isPlayground?: boolean;
}) {
  const availableCategories = Object.keys(product.categories).filter(
    (key) => product.categories[key as keyof typeof product.categories]
  );

  const [activeCategory, setActiveCategory] = useState(
    availableCategories[0] || "frontend"
  );

  const bgColor = generateColorFromString(product.name);

  // Guest user logic for non-playground products
  if (!isLoggedIn && !isPlayground) {
    const prodEnv = product.categories.frontend?.environments?.find(
      (e) => e.name === "prod"
    );

    if (!prodEnv) {
      return null; // Don't show product if no prod frontend URL
    }

    return (
      <div
        className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-pointer"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.open(prodEnv.url, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <article className="flex items-start gap-4">
          <ProductIcon bgColor={bgColor} name={product.name} />
          <div className="flex-1">
            <h3 className="font-bold text-base mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          <svg
            className="w-5 h-5 text-gray-400 self-start md:self-center flex-shrink-0 hidden md:block"
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
        </article>
      </div>
    );
  }

  // Logged-in user or playground product view
  const currentCategory = product.categories[
    activeCategory as keyof typeof product.categories
  ] as any;

  return (
    <div
      className={`p-5 rounded-xl border shadow-sm transition-all ${isPlayground
        ? "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200"
        : "bg-white border-gray-200"
        }`}
    >
      <article>
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-5">
          <ProductIcon bgColor={bgColor} name={product.name} />
          <div className="flex-1">
            <h3 className="font-bold text-base mb-1">{product.name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>

        {/* Tabs and Content Section */}
        {availableCategories.length > 0 && (
          <div>
            <CategoryTabs
              categories={availableCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              isPlayground={isPlayground}
            />

            {currentCategory?.environments && (
              <EnvironmentList
                environments={currentCategory.environments}
                port={currentCategory.port}
                isPlayground={isPlayground}
              />
            )}
          </div>
        )}
      </article>
    </div>
  );
}

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("michael_admin_logged_in");
    if (stored === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setShowPasswordDialog(true);
    setError("");
    setUsername("");
    setPassword("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check password against environment variable
    const correctUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (!correctUsername || !correctPassword) {
      setError("Auth is not configured. Please set admin username and password.");
      return;
    }

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      if (typeof window !== "undefined") {
        window.localStorage.setItem("michael_admin_logged_in", "true");
      }
      setShowPasswordDialog(false);
      setUsername("");
      setPassword("");
      setError("");
    } else {
      setError("Incorrect username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("michael_admin_logged_in");
    }
  };

  return (
    <main className="min-h-screen bg-white px-6 md:px-0">
      {/* Header */}
      <header className="text-center pt-24 md:pt-48 space-y-4">
        {/* Login Button - Top Right */}
        <div className="absolute top-6 right-6">
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <LockIcon />
              Login
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
            >
              Logout
            </button>
          )}
        </div>

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

      {/* Password Dialog */}
      {showPasswordDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Admin Login</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              {error && (
                <p className="text-red-600 text-sm mb-4">{error}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowPasswordDialog(false);
                    setUsername("");
                    setPassword("");
                    setError("");
                  }}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Products Section */}
      <section className="max-w-[640px] mx-auto mt-24 md:mt-24 space-y-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            isLoggedIn={isLoggedIn}
            isPlayground={false}
          />
        ))}
      </section>

      {/* Playground Section - Only visible when logged in */}
      {isLoggedIn && (
        <section className="max-w-[640px] mx-auto mt-16 space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Playground</h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 rounded-full">
              Private
            </span>
          </div>
          {playgroundProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              isLoggedIn={isLoggedIn}
              isPlayground={true}
            />
          ))}
        </section>
      )}

      {/* Footer */}
      <footer className="flex justify-center gap-4 py-24 mt-24">
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Twitter"
        >
          <TwitterIcon />
        </a>
        <a
          href={socialLinks.github}
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
