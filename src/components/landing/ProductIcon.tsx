import { productIcons } from "@/app/icons/products";

export function ProductIcon({
  bgColor,
  name,
}: { bgColor: string; name: string }) {
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
      <img src={iconValue} alt={name} className="w-7 h-7 object-contain" />
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
