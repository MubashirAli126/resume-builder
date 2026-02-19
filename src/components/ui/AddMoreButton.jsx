import { Plus } from "lucide-react";

const BRAND_COLOR = "#00318B";

const AddMoreButton = ({ onClick, label = "Add more", className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 text-sm font-medium font-app underline decoration-[#00318B] underline-offset-2 hover:opacity-80 transition-opacity ${className}`}
    style={{ color: BRAND_COLOR }}
  >
    <Plus size={18} strokeWidth={2.5} className="shrink-0" />
    <span>{label}</span>
  </button>
);

export default AddMoreButton;
