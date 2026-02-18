import RepeatableForm from "./RepeatableForm";
import { useResumeStore } from "../../store/resumeStore";
import NextButton from "../ui/NextButton";

/**
 * Image 8 – Reference section. Layout with Delete below each entry, Add more link.
 */
const ReferencesForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();

  const handleChange = (data) => updateSection("references", data);

  const handleNext = () => setActiveStep("finalPreview");

  const fields = [
    { name: "name", label: "Name" },
    { name: "relation", label: "Relation" },
    { name: "contact", label: "Contact" }
  ];

  const isReferenceEntryComplete = (e) =>
    e.name?.trim() && e.relation?.trim() && e.contact?.trim();

  const isReferenceEntryFilled = (e) =>
    e.name?.trim() || e.relation?.trim() || e.contact?.trim();

  const isComplete = (resumeData.references ?? []).some(
    (r) => r.name?.trim() && r.relation?.trim() && r.contact?.trim()
  );

  return (
    <div className="space-y-4 font-app">
      <RepeatableForm
        sectionName="References"
        data={resumeData.references}
        onChange={handleChange}
        fields={fields}
        isEntryComplete={isReferenceEntryComplete}
        isEntryFilled={isReferenceEntryFilled}
      />

      <div className="flex justify-end pt-2">
        <NextButton
          isActive={isComplete}
          onClick={handleNext}
        >
          Finish
        </NextButton>
      </div>
    </div>
  );
};

export default ReferencesForm;
