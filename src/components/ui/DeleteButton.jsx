import { Trash2 } from "lucide-react";

/**
 * Delete option under tables – Image 9.
 * Only show when entry has data; display in red when visible.
 */
const DeleteButton = ({ onClick, label = "Delete", className = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center gap-1.5 text-sm font-medium text-red-600 hover:text-red-700 font-app transition-colors mt-2 ${className}`}
  >
    <Trash2 size={16} className="shrink-0" />
    <span>{label}</span>
  </button>
);

export default DeleteButton;
