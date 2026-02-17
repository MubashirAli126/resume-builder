import { STEPS } from "../../constants/steps";
import { useResumeStore } from "../../store/resumeStore";
import clsx from "clsx";

const Sidebar = () => {
  const activeStep = useResumeStore((s) => s.activeStep);
  const setActiveStep = useResumeStore((s) => s.setActiveStep);

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4">Select to fill details</h2>

      {STEPS.map((step) => (
        <button
          key={step.id}
          onClick={() => setActiveStep(step.id)}
          className={clsx(
            "block w-full text-left p-2 rounded mb-2",
            activeStep === step.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          )}
        >
          {step.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
