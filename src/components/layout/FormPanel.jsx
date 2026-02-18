import { useResumeStore } from "../../store/resumeStore";
import PersonalForm from "../forms/PersonalForm";
import AboutForm from "../forms/AboutForm";
import EducationForm from "../forms/EducationForm";
import WorkForm from "../forms/WorkForm";
import ExpertiseForm from "../forms/ExpertiseForm";
import LanguageForm from "../forms/LanguageForm";
import ReferencesForm from "../forms/ReferencesForm";

const STEP_LABELS = {
  personal: "Personal info",
  about: "About me",
  education: "Education",
  language: "Language",
  work: "Work experience",
  expertise: "Areas of expertise",
  references: "References"
};

const FormPanel = () => {
  const activeStep = useResumeStore((s) => s.activeStep);

  const renderForm = () => {
    switch (activeStep) {
      case "personal":
        return <PersonalForm />;
      case "about":
        return <AboutForm />;
      case "education":
        return <EducationForm />;
      case "work":
        return <WorkForm />;
      case "expertise":
        return <ExpertiseForm />;
      case "language":
        return <LanguageForm />;
      case "references":
        return <ReferencesForm />;
      default:
        return <PersonalForm />;
    }
  };

  return (
    <div className="w-full max-w-3xl font-app">
      <div className="mb-6">
        <h2 className="text-gray-800 font-semibold text-lg">
          {STEP_LABELS[activeStep] || "Personal info"}
        </h2>
        <p className="text-gray-500 text-sm mt-0.5">Fill details here.</p>
      </div>
      {renderForm()}
    </div>
  );
};

export default FormPanel;
