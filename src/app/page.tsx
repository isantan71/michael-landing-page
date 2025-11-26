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

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const products = [
    {
      name: "MovieFans",
      description: "Movie database and subtitle management platform",
      icon: "M",
      bgColor: "#e63946",
      stagingUrl: "https://moviefans-staging.345321.xyz/",
      productionUrl: "https://moviefans.345321.xyz/",
    },
    {
      name: "Swiss",
      description: "AI-powered Swiss army knife toolkit",
      icon: "S",
      bgColor: "#457b9d",
      stagingUrl: "https://superswiss-staging.vercel.app",
      productionUrl: "https://superswiss.vercel.app",
    },
    {
      name: "OneYumi",
      description: "Modern web application platform",
      icon: "Y",
      bgColor: "#f77f00",
      stagingUrl: "https://staging--oneyumi.netlify.app/",
      productionUrl: "https://www.oneyumi.com/",
    },
  ];

  const handleLogin = () => {
    setShowPasswordDialog(true);
    setError("");
    setPassword("");
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check password against environment variable
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin123";

    if (password === correctPassword) {
      setIsLoggedIn(true);
      setShowPasswordDialog(false);
      setPassword("");
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
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
            <h2 className="text-xl font-bold mb-4">Enter Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-black"
                autoFocus
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
          <a
            key={product.name}
            href={product.productionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-50 p-4 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            <article className="flex items-start gap-4">
              <ProductIcon bgColor={product.bgColor} icon={product.icon} />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                {isLoggedIn && (
                  <div className="flex gap-2 flex-wrap">
                    <a
                      href={product.stagingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                    >
                      Staging
                    </a>
                  </div>
                )}
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
