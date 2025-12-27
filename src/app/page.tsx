"use client";

import { useState, useEffect } from "react";
import { products, playgroundProducts, socialLinks } from "@/config/site";

// Icons
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LockIcon } from "@/components/icons/LockIcon";
import { EyeIcon } from "@/components/icons/EyeIcon";

// Landing Components
import { WordCycler } from "@/components/landing/WordCycler";
import { Logo } from "@/components/landing/Logo";
import { ProductCard } from "@/components/landing/ProductCard";
import { SideNav } from "@/components/landing/SideNav";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeId, setActiveId] = useState("projects");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("michael_admin_logged_in");
    if (stored === "true") {
      setIsLoggedIn(true);
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "projects";

      for (const section of sections) {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 150) {
          current = section.getAttribute("id") || "projects";
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      setError(
        "Auth is not configured. Please set admin username and password.",
      );
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

  const navItems = [
    { id: "projects", name: "Projects" },
    ...products.map((p) => ({
      id: p.name.toLowerCase().replace(/\s+/g, "-"),
      name: p.name,
      parent: "projects",
    })),
    ...(isLoggedIn && !previewMode
      ? [
          { id: "playground", name: "Playground" },
          ...playgroundProducts.map((p) => ({
            id: p.name.toLowerCase().replace(/\s+/g, "-"),
            name: p.name,
            parent: "playground",
          })),
        ]
      : []),
  ];

  return (
    <main className="min-h-screen bg-white px-6 md:px-0">
      <SideNav items={navItems} activeId={activeId} />
      {/* Header */}
      <header className="text-center pt-24 md:pt-48 space-y-4">
        {/* Login/Logout Buttons - Top Right */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
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
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
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
      <section
        id="projects"
        className="max-w-[640px] mx-auto mt-24 md:mt-24 space-y-4"
      >
        {products.map((product) => (
          <ProductCard
            key={product.name}
            id={product.name.toLowerCase().replace(/\s+/g, "-")}
            product={product}
            isLoggedIn={isLoggedIn && !previewMode}
            isPlayground={false}
          />
        ))}
      </section>

      {/* Playground Section - Only visible when logged in and not in preview mode */}
      {isLoggedIn && !previewMode && (
        <section
          id="playground"
          className="max-w-[640px] mx-auto mt-16 space-y-4"
        >
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Playground</h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-violet-100 text-violet-700 rounded-full">
              Private
            </span>
          </div>
          {playgroundProducts.map((product) => (
            <ProductCard
              key={product.name}
              id={product.name.toLowerCase().replace(/\s+/g, "-")}
              product={product}
              isLoggedIn={isLoggedIn && !previewMode}
              isPlayground={true}
            />
          ))}
        </section>
      )}

      {/* Floating Preview Button - Only visible when logged in */}
      {isLoggedIn && (
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className={`fixed bottom-6 right-6 flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg shadow-lg transition-all z-50 ${
            previewMode
              ? "text-white bg-violet-600 hover:bg-violet-700"
              : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-xl"
          }`}
          title={previewMode ? "Viewing as guest" : "View as guest"}
        >
          <EyeIcon isPreview={!previewMode} />
          <span className="hidden sm:inline">
            {previewMode ? "Guest View" : "Preview"}
          </span>
        </button>
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
