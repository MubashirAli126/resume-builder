import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";
import NextButton from "../ui/NextButton";
import AddMoreButton from "../ui/AddMoreButton";
import DeleteButton from "../ui/DeleteButton";
import { Calendar } from "lucide-react";

/**
 * Image 6 – Work Experience. Job title, Designation, Company name, From, To, Onwards checkbox.
 * Add more link. Delete below each entry (Image 9).
 */
const emptyEntry = () => ({
  jobTitle: "",
  designation: "",
  companyName: "",
  from: "",
  to: "",
  onwards: false
});

const isWorkEntryComplete = (e) =>
  e.jobTitle?.trim() &&
  e.designation?.trim() &&
  e.companyName?.trim() &&
  e.from?.trim() &&
  (e.to?.trim() || e.onwards);

const isWorkEntryFilled = (e) =>
  [e.jobTitle, e.designation, e.companyName, e.from, e.to].some((v) =>
    typeof v === "string" ? v?.trim() : false
  ) || e.onwards;

const WorkForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [entries, setEntries] = useState(() => {
    const data = resumeData.work || [];
    if (data.length === 0) return [emptyEntry()];
    return data.map((w) => ({
      jobTitle: w.jobTitle ?? w.position ?? "",
      designation: w.designation ?? "",
      companyName: w.companyName ?? w.company ?? "",
      from: w.from ?? "",
      to: w.to ?? "",
      onwards: w.onwards ?? false
    }));
  });

  const syncToStore = (next) => {
    updateSection(
      "work",
      next.map((e) => ({
        ...e,
        position: e.jobTitle,
        company: e.companyName,
        duration:
          e.from || e.to
            ? [e.from, e.onwards ? "Present" : e.to].filter(Boolean).join(" – ")
            : ""
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
    const nextStep = STEPS.findIndex((s) => s.id === "work");
    setActiveStep(STEPS[nextStep + 1].id);
  };

  const isComplete = entries.some(isWorkEntryComplete);

  return (
    <div className="space-y-6 font-app">
      {entries.map((entry, idx) => (
        <div key={idx} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Job title <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                placeholder="UI/UX Designer"
                value={entry.jobTitle}
                onChange={(e) =>
                  handleChange(idx, "jobTitle", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Designation <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                placeholder="Associate product designer"
                value={entry.designation}
                onChange={(e) =>
                  handleChange(idx, "designation", e.target.value)
                }
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Company name <span className="text-red-500">*</span>
              </label>
              <input
                className="input"
                placeholder="Acme Tech"
                value={entry.companyName}
                onChange={(e) =>
                  handleChange(idx, "companyName", e.target.value)
                }
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                From <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="input pr-9"
                placeholder="MM/DD/YY"
                value={entry.from}
                onChange={(e) => handleChange(idx, "from", e.target.value)}
              />
              <Calendar
                size={18}
                className="absolute right-3 top-9 text-gray-400 pointer-events-none"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-800 mb-1">
                To <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="input pr-9"
                placeholder="MM/DD/YY"
                value={entry.to}
                onChange={(e) => handleChange(idx, "to", e.target.value)}
                disabled={entry.onwards}
              />
              <Calendar
                size={18}
                className="absolute right-3 top-9 text-gray-400 pointer-events-none"
              />
              <label className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={entry.onwards}
                  onChange={(e) =>
                    handleChange(idx, "onwards", e.target.checked)
                  }
                  className="rounded border-gray-300 text-[#00318B] focus:ring-[#00318B]"
                />
                <span className="text-sm font-medium text-gray-800">
                  Onwards
                </span>
              </label>
            </div>
          </div>
          {isWorkEntryFilled(entry) && (
            <DeleteButton onClick={() => handleRemove(idx)} />
          )}
        </div>
      ))}

      {entries.length > 0 && isWorkEntryFilled(entries[0]) && (
        <div className="flex justify-end">
          <AddMoreButton onClick={handleAdd} />
        </div>
      )}

      <div className="flex justify-end pt-2">
        <NextButton isActive={isComplete} onClick={handleNext} />
      </div>
    </div>
  );
};

export default WorkForm;
