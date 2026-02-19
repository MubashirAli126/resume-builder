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
      <div
        className="pb-4 mb-6"
        style={{ borderBottom: "1px solid #DEE0E3" }}
      >
        <h2 className="font-semibold text-base" style={{ color: "#14151A" }}>
          {STEP_LABELS[activeStep] || "Personal info"}
        </h2>
        <p className="text-sm mt-0.5" style={{ color: "#0F132499" }}>
          Fill details here.
        </p>
      </div>
      {renderForm()}
    </div>
  );
};

export default FormPanel;
