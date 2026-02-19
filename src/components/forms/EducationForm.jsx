import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";
import NextButton from "../ui/NextButton";
import AddMoreButton from "../ui/AddMoreButton";
import DeleteButton from "../ui/DeleteButton";
import { ChevronDown } from "lucide-react";

const LEVEL_OPTIONS = [
  "High School",
  "Associate",
  "Bachelor",
  "Masters",
  "PhD",
  "Diploma",
  "Other"
];

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = Array.from({ length: 30 }, (_, i) => CURRENT_YEAR - i);

const emptyEntry = () => ({
  levelOfEducation: "",
  fieldOfStudy: "",
  institution: "",
  passingYear: ""
});

const isEducationEntryComplete = (e) =>
  [e.levelOfEducation, e.fieldOfStudy, e.institution, e.passingYear].every(
    (v) => v?.trim()
  );

const isEducationEntryFilled = (e) =>
  [e.levelOfEducation, e.fieldOfStudy, e.institution, e.passingYear].some(
    (v) => v?.trim()
  );

const EducationForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [entries, setEntries] = useState(() => {
    const data = resumeData.education || [];
    if (data.length === 0) return [emptyEntry()];
    return data.map((e) => ({
      levelOfEducation: e.levelOfEducation ?? e.degree ?? "",
      fieldOfStudy: e.fieldOfStudy ?? "",
      institution: e.institution ?? "",
      passingYear: e.passingYear ?? e.year ?? ""
    }));
  });

  const syncToStore = (next) => {
    updateSection(
      "education",
      next.map((e) => ({
        levelOfEducation: e.levelOfEducation,
        fieldOfStudy: e.fieldOfStudy,
        institution: e.institution,
        passingYear: e.passingYear,
        degree: e.levelOfEducation,
        year: e.passingYear
      }))
    );
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
    const nextStep = STEPS.findIndex((s) => s.id === "education");
    setActiveStep(STEPS[nextStep + 1].id);
  };

  const isComplete = entries.some(isEducationEntryComplete);

  return (
    <div className="space-y-6 font-app">
      {entries.map((entry, idx) => (
        <div key={idx} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#14151A" }}>
                Level of education <span className="text-red-500">*</span>
              </label>
              <select
                className="input"
                value={entry.levelOfEducation}
                onChange={(e) =>
                  handleChange(idx, "levelOfEducation", e.target.value)
                }
              >
                <option value="">e.g Masters</option>
                {LEVEL_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: "#14151A" }}>
                Field of study <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                placeholder="e.g Computer science"
                value={entry.fieldOfStudy}
                onChange={(e) =>
                  handleChange(idx, "fieldOfStudy", e.target.value)
                }
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1" style={{ color: "#14151A" }}>
                University / Collage / School{" "}
                <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                placeholder="e.g Oxford university"
                value={entry.institution}
                onChange={(e) =>
                  handleChange(idx, "institution", e.target.value)
                }
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-1" style={{ color: "#14151A" }}>
                Passing Year <span className="text-red-500">*</span>
              </label>
              <select
                className="input appearance-none bg-white pr-9"
                value={entry.passingYear}
                onChange={(e) =>
                  handleChange(idx, "passingYear", e.target.value)
                }
              >
                <option value="">Select year</option>
                {YEAR_OPTIONS.map((y) => (
                  <option key={y} value={String(y)}>
                    {y}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-9 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          {isEducationEntryFilled(entry) && (
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

export default EducationForm;
