import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";
import NextButton from "../ui/NextButton";
import AddMoreButton from "../ui/AddMoreButton";
import DeleteButton from "../ui/DeleteButton";
import { ChevronDown } from "lucide-react";

/**
 * Image 5 – Language section. Dropdowns: Languages spoken, Proficiency level.
 * Add more link. Delete below each entry (Image 9).
 */
const LANGUAGE_OPTIONS = [
  "English",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Hindi",
  "Arabic",
  "Portuguese",
  "Other"
];

const PROFICIENCY_OPTIONS = [
  "Beginner",
  "Elementary",
  "Intermediate",
  "Upper Intermediate",
  "Advanced",
  "Native"
];

const emptyEntry = () => ({ language: "", proficiency: "" });

const isLanguageEntryComplete = (e) =>
  e.language?.trim() && e.proficiency?.trim();

const isLanguageEntryFilled = (e) => e.language?.trim() || e.proficiency?.trim();

const LanguageForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [entries, setEntries] = useState(() => {
    const data = resumeData.language || [];
    if (data.length === 0) return [emptyEntry()];
    return data.map((item) =>
      typeof item === "string"
        ? { language: item, proficiency: "" }
        : { language: item.language ?? "", proficiency: item.proficiency ?? "" }
    );
  });

  const syncToStore = (next) => {
    updateSection("language", next);
  };

  const handleChange = (index, field, value) => {
    const next = [...entries];
    next[index] = { ...next[index], [field]: value };
    setEntries(next);
    syncToStore(next);
  };

  const handleAdd = () => {
    const next = [...entries, emptyEntry()];
    setEntries(next);
    syncToStore(next);
  };

  const handleRemove = (index) => {
    const next = entries.filter((_, i) => i !== index);
    if (next.length === 0) next.push(emptyEntry());
    setEntries(next);
    syncToStore(next);
  };

  const handleNext = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "language");
    setActiveStep(STEPS[currentIndex + 1].id);
  };

  const isComplete = entries.some(isLanguageEntryComplete);

  return (
    <div className="space-y-6 font-app">
      {entries.map((entry, idx) => (
        <div key={idx} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Languages spoken <span className="text-red-500">*</span>
              </label>
              <select
                className="input appearance-none bg-white pr-9"
                value={entry.language}
                onChange={(e) =>
                  handleChange(idx, "language", e.target.value)
                }
              >
                <option value="">Please select</option>
                {LANGUAGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-9 text-gray-400 pointer-events-none"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Proficiency level <span className="text-red-500">*</span>
              </label>
              <select
                className="input appearance-none bg-white pr-9"
                value={entry.proficiency}
                onChange={(e) =>
                  handleChange(idx, "proficiency", e.target.value)
                }
              >
                <option value="">Please select</option>
                {PROFICIENCY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-9 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          {isLanguageEntryFilled(entry) && (
            <DeleteButton onClick={() => handleRemove(idx)} />
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <AddMoreButton onClick={handleAdd} />
      </div>

      <div className="flex justify-end pt-2">
        <NextButton isActive={isComplete} onClick={handleNext} />
      </div>
    </div>
  );
};

export default LanguageForm;
