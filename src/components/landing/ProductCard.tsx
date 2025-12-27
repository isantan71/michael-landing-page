"use client";

import { useState } from "react";
import { Product, CategoryWithPort, CategoryWithoutPort, generateColorFromString } from "@/config/site";
import { ProductIcon } from "./ProductIcon";
import { CategoryTabs } from "./CategoryTabs";
import { EnvironmentList } from "./EnvironmentList";

export function ProductCard({
    product,
    isLoggedIn,
    isPlayground = false,
    id,
}: {
    product: Product;
    isLoggedIn: boolean;
    isPlayground?: boolean;
    id?: string;
}) {
    const availableCategories = Object.keys(product.categories).filter(
        (key) => product.categories[key as keyof typeof product.categories],
    );

    const [activeCategory, setActiveCategory] = useState(
        availableCategories[0] || "frontend",
    );

    const bgColor = generateColorFromString(product.name);

    // Guest user logic for non-playground products
    if (!isLoggedIn && !isPlayground) {
        const prodEnv = product.categories.frontend?.environments?.find(
            (e) => e.name === "prod",
        );

        if (!prodEnv) {
            return null; // Don't show product if no prod frontend URL
        }

        return (
            <div
                id={id}
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
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
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
    ] as CategoryWithPort | CategoryWithoutPort;

    return (
        <div
            id={id}
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
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
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
                                port={'port' in currentCategory ? currentCategory.port : undefined}
                                isPlayground={isPlayground}
                            />
                        )}
                    </div>
                )}
            </article>
        </div>
    );
}
