import RepeatableForm from "./RepeatableForm";
import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";

const ReferencesForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();

  const handleChange = (data) => updateSection("references", data);

  const handleNext = () => {
    const nextStep = STEPS.findIndex((s) => s.id === "references");
    setActiveStep("finalPreview"); // move to final preview
  };

  const handleBack = () => {
    const currentIndex = STEPS.findIndex((s) => s.id === "references");
    setActiveStep(STEPS[currentIndex - 1].id);
  };

  const fields = [
    { name: "name", label: "Name" },
    { name: "relation", label: "Relation" },
    { name: "contact", label: "Contact" }
  ];

  return (
    <div className="space-y-4">
      <RepeatableForm
        sectionName="References"
        data={resumeData.references}
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
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleNext}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default ReferencesForm;
