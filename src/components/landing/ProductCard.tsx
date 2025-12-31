"use client";

import { useState } from "react";
import {
  Product,
  SectionWithPort,
  SectionWithoutPort,
  generateColorFromString,
} from "@/config/site";
import { ProductIcon } from "./ProductIcon";
import { SectionTabs } from "./SectionTabs";
import { LinkList } from "./LinkList";

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
  const availableSections = Object.keys(product.sections).filter(
    (key) => product.sections[key as keyof typeof product.sections],
  );

  const [activeSection, setActiveSection] = useState(
    availableSections[0] || "",
  );

  const bgColor = generateColorFromString(product.name);

  // Guest user logic for non-playground products
  if (!isLoggedIn && !isPlayground) {
    // Try to find the first link of the first section
    const mainSection = availableSections[0];
    const sectionData = mainSection
      ? (product.sections[mainSection] as
        | SectionWithPort
        | SectionWithoutPort)
      : null;
    const firstLink = sectionData?.links?.[0];

    if (!firstLink) {
      return null;
    }

    const firstUrl = firstLink.urls[0];

    return (
      <div
        id={id}
        className="bg-white p-5 rounded-xl border border-amber-200 bg-gradient-to-br from-white to-amber-50/20 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer group"
        onClick={() => {
          if (typeof window !== "undefined" && firstUrl) {
            window.open(firstUrl, "_blank", "noopener,noreferrer");
          }
        }}
      >
        <article className="flex items-start gap-4">
          <ProductIcon bgColor={bgColor} name={product.name} />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-bold text-base">{product.name}</h3>
              <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-[10px] font-bold text-amber-600 uppercase tracking-tighter">
                Primary
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-2">
              {product.description}
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 font-medium">
              <span className="uppercase tracking-widest text-[9px] bg-amber-100 px-1 rounded">Link:</span>
              <span className="truncate">{firstLink.name}</span>
            </div>
          </div>
          <svg
            className="w-5 h-5 text-amber-400 self-start md:self-center flex-shrink-0 transition-transform group-hover:translate-x-0.5"
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
  const currentSection = product.sections[
    activeSection as keyof typeof product.sections
  ] as SectionWithPort | SectionWithoutPort;

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
        {availableSections.length > 0 && (
          <div>
            <SectionTabs
              sections={availableSections}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              isPlayground={isPlayground}
            />

            {currentSection?.links && (
              <LinkList
                links={currentSection.links}
                port={
                  "port" in currentSection ? currentSection.port : undefined
                }
                isPlayground={isPlayground}
                isFirstSection={activeSection === availableSections[0]}
              />
            )}
          </div>
        )}
      </article>
    </div>
  );
}
