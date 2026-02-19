import RepeatableForm from "./RepeatableForm";
import { useResumeStore } from "../../store/resumeStore";
import NextButton from "../ui/NextButton";

const ReferencesForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();

  const handleChange = (data) => updateSection("references", data);

  const handleNext = () => setActiveStep("finalPreview");

  const fields = [
    { name: "name", label: "Name" },
    { name: "relation", label: "Relation" },
    { name: "contact", label: "Contact" }
  ];

  const isReferenceEntryFilled = (e) =>
    e.name?.trim() || e.relation?.trim() || e.contact?.trim();

  return (
    <div className="space-y-4 font-app">
      <RepeatableForm
        sectionName="References"
        data={resumeData.references}
        onChange={handleChange}
        fields={fields}
        isEntryFilled={isReferenceEntryFilled}
      />

      <div className="flex justify-end pt-2">
        <NextButton isActive onClick={handleNext}>
          Finish
        </NextButton>
      </div>
    </div>
  );
};

export default ReferencesForm;
