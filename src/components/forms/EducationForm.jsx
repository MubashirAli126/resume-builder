import RepeatableForm from "./RepeatableForm";
import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";

const EducationForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();

  const handleChange = (data) => {
    updateSection("education", data);
  };

  const handleNext = () => {
    const nextStep = STEPS.findIndex((s) => s.id === "education");
    setActiveStep(STEPS[nextStep + 1].id);
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "education");
    setActiveStep(STEPS[currentIndex - 1].id);
  };

  const fields = [
    { name: "degree", label: "Degree" },
    { name: "institution", label: "Institution" },
    { name: "year", label: "Year" }
  ];

  return (
    <div className="space-y-4">
      <RepeatableForm
        sectionName="Education"
        data={resumeData.education}
        onChange={handleChange}
        fields={fields}
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

export default EducationForm;
