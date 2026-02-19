import { useResumeStore } from "../../store/resumeStore";
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

const BRAND_COLOR = "#00318B";
const ACTIVE_BG = "#F5F8FC";
const INACTIVE_COLOR = "#6F6F6F";

const Sidebar = () => {
  const activeStep = useResumeStore((s) => s.activeStep);
  const setActiveStep = useResumeStore((s) => s.setActiveStep);

  return (
    <div className="p-6 font-app">
      <div className="mb-6">
        <h2 className="text-gray-800 font-semibold text-lg">
          Select to fill details
        </h2>
        <p className="text-gray-500 text-sm mt-0.5">
          Select and fill details Individually.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeStep === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveStep(category.id)}
              className={`
                relative flex flex-col items-center justify-center
                p-4 rounded-r-lg transition-all duration-200 overflow-hidden
                ${isActive ? "" : "hover:bg-gray-50/50"}
              `}
              style={
                isActive
                  ? {
                      background: ACTIVE_BG,
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)"
                    }
                  : {}
              }
            >
              <Icon
                size={28}
                style={{ color: isActive ? BRAND_COLOR : INACTIVE_COLOR }}
                className="shrink-0"
              />
              <p
                className="mt-2 text-sm font-medium text-center leading-tight max-w-full"
                style={{ color: isActive ? BRAND_COLOR : INACTIVE_COLOR }}
              >
                {category.label}
              </p>
              {isActive && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: BRAND_COLOR }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
