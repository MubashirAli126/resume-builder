import { useState } from "react";
import {
  Info,
  FileText,
  GraduationCap,
  Languages,
  Briefcase,
  UserCheck,
  Users
} from "lucide-react";

const categories = [
  { id: "personal", label: "Personal Info", icon: Info },
  { id: "about", label: "About me", icon: FileText },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "language", label: "Language", icon: Languages },
  { id: "work", label: "Work experience", icon: Briefcase },
  { id: "expertise", label: "Areas of expertise", icon: UserCheck },
  { id: "references", label: "References", icon: Users }
];

const CategorySelector = () => {
  const [activeId, setActiveId] = useState("personal");

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-gray-800 font-semibold text-lg">
          Select to fill details
        </h2>
        <p className="text-gray-400 text-sm">
          Select and fill details Individually.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeId === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveId(category.id)}
              className={`
                relative
                aspect-square
                rounded-lg
                border
                flex
                flex-col
                items-center
                justify-center
                transition-all
                duration-200
                
                ${
                  isActive
                    ? `
                      border-transparent
                      border-b-[3px]
                      border-b-blue-600
                      bg-gradient-to-b
                      from-blue-50
                      to-white
                    `
                    : "border-gray-200 bg-white hover:shadow-sm"
                }
              `}
            >
              {/* Icon */}
              <Icon
                size={28}
                className={
                  isActive ? "text-blue-700" : "text-gray-400"
                }
              />

              {/* Label */}
              <p
                className={`
                  mt-2 text-sm font-medium text-center
                  ${isActive ? "text-blue-700" : "text-gray-400"}
                `}
              >
                {category.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
