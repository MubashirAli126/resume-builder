import { ChevronRight } from "lucide-react";

/**
 * Next button – consistent styling across app.
 * Image 1: Disabled state – bg #E9EAEC, medium grey text, arrow icon.
 * Image 2: Active state – bg #00318B, white text and icon when required details are complete.
 */
const BRAND_COLOR = "#00318B";
const DISABLED_BG = "#E9EAEC";
const DISABLED_TEXT = "#6b7280";

const NextButton = ({
  isActive,
  onClick,
  type = "button",
  children = "Next",
  className = ""
}) => {
  const active = !!isActive;
  const handleClick = (e) => {
    if (!active && type === "button") e.preventDefault();
    if (active && onClick) onClick(e);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={!active}
      className={`inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-[9999px] text-sm font-medium transition-colors font-app ${className} ${!active ? "cursor-not-allowed" : ""}`}
      style={{
        backgroundColor: active ? BRAND_COLOR : DISABLED_BG,
        color: active ? "#fff" : DISABLED_TEXT
      }}
    >
      <span>{children}</span>
      <ChevronRight size={18} strokeWidth={2.5} className="shrink-0" />
    </button>
  );
};

export default NextButton;
