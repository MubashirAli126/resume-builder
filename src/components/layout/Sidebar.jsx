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

const Sidebar = () => {
  const activeStep = useResumeStore((s) => s.activeStep);
  const setActiveStep = useResumeStore((s) => s.setActiveStep);

  return (
    <div className="p-6">
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
                p-4 rounded-lg transition-all duration-200
                border
                ${
                  isActive
                    ? "bg-blue-50 border-l-4 border-l-blue-600 border-t border-r border-b border-gray-200"
                    : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-sm"
                }
              `}
            >
              <Icon
                size={28}
                className={isActive ? "text-blue-600" : "text-gray-400"}
              />
              <p
                className={`mt-2 text-sm font-medium text-center leading-tight ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
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

export default Sidebar;
