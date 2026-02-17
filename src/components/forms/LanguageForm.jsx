import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";

const LanguageForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [languages, setLanguages] = useState(resumeData.language || []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      const updated = [...languages, input.trim()];
      setLanguages(updated);
      updateSection("language", updated);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    const updated = languages.filter((_, i) => i !== index);
    setLanguages(updated);
    updateSection("language", updated);
  };

  const handleNext = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "language");
    setActiveStep(STEPS[currentIndex + 1].id);
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "language");
    setActiveStep(STEPS[currentIndex - 1].id);
  };

  return (
    <div className="space-y-4">
      <label className="block font-medium">Languages</label>

      <div className="flex gap-2 mb-2">
        <input
          className="input flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add language"
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {languages.map((item, idx) => (
          <span
            key={idx}
            className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1"
          >
            {item}
            <button
              className="text-red-500 font-bold"
              onClick={() => handleRemove(idx)}
            >
              x
            </button>
          </span>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LanguageForm;
