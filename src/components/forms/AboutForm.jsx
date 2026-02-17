import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState } from "react";

const AboutForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [about, setAbout] = useState(resumeData.about || "");

  const handleNext = () => {
    updateSection("about", about);
    const nextStep = STEPS.findIndex((s) => s.id === "about");
    setActiveStep(STEPS[nextStep + 1].id);
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "about");
    setActiveStep(STEPS[currentIndex - 1].id);
  };

  return (
    <div className="space-y-4">
      <label className="block font-medium">About Me</label>
      <textarea
        className="input"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        rows={6}
      />

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

export default AboutForm;