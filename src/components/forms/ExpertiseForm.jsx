import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";
import NextButton from "../ui/NextButton";
import AddMoreButton from "../ui/AddMoreButton";
import DeleteButton from "../ui/DeleteButton";

const ExpertiseForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [expertise, setExpertise] = useState(resumeData.expertise || []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      const updated = [...expertise, input.trim()];
      setExpertise(updated);
      updateSection("expertise", updated);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    const updated = expertise.filter((_, i) => i !== index);
    setExpertise(updated);
    updateSection("expertise", updated);
  };

  const handleNext = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "expertise");
    setActiveStep(STEPS[currentIndex + 1].id);
  };

  return (
    <div className="space-y-4 font-app">
      <label className="block text-sm font-medium" style={{ color: "#14151A" }}>
        Areas of Expertise
      </label>

      <div className="flex gap-2 mb-2">
        <input
          className="input flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add expertise"
        />
        <AddMoreButton onClick={handleAdd} />
      </div>

      <div className="flex flex-wrap gap-2">
        {expertise.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="bg-gray-100 border border-gray-200 px-3 py-1.5 rounded text-sm">
              {item}
            </span>
            <DeleteButton onClick={() => handleRemove(idx)} />
          </div>
        ))}
      </div>

      <div className="flex justify-end pt-2">
        <NextButton
          isActive={expertise?.length > 0}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ExpertiseForm;
