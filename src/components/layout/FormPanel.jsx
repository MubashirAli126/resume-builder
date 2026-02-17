import { useResumeStore } from "../../store/resumeStore";
import PersonalForm from "../forms/PersonalForm";
import AboutForm from "../forms/AboutForm";
import EducationForm from "../forms/EducationForm";
import WorkForm from "../forms/WorkForm";
import ExpertiseForm from "../forms/ExpertiseForm";
import LanguageForm from "../forms/LanguageForm";
import ReferencesForm from "../forms/ReferencesForm";

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
        return (
          <div className="p-6 bg-white rounded shadow">
            Form coming soon...
          </div>
        );
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 capitalize">
        {activeStep.replace(/([A-Z])/g, " $1")}
      </h2>
      {renderForm()}
    </div>
  );
};

export default FormPanel;
