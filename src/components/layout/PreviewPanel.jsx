import { useResumeStore } from "../../store/resumeStore";
import { TemplateRenderer } from "../../templates";
import { TEMPLATE_OPTIONS } from "../../constants/templateOptions";

const PreviewPanel = () => {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResumeStore();

  return (
    <div className="h-full flex flex-col">
      <div
        className="pb-4 mb-6"
        style={{ borderBottom: "1px solid #DEE0E3" }}
      >
        <h2 className="font-semibold text-base" style={{ color: "#14151A" }}>
          Select your resumes
        </h2>
        <p className="text-sm mt-0.5" style={{ color: "#0F132499" }}>
          Select and fill details Individually.
        </p>
      </div>

      {/* Resume Preview */}
      <div className="resume-preview-container flex-1 min-h-0 mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 min-h-0">
          <div className="transform origin-top">
            <TemplateRenderer templateId={selectedTemplate} resumeData={resumeData} />
          </div>
        </div>
      </div>

      {/* Select Template */}
      <div>
        <h3 className="font-semibold text-base mb-3" style={{ color: "#14151A" }}>
          Select template
        </h3>
        <div className="flex gap-3">
          {TEMPLATE_OPTIONS.map((option) => (
            <button
              key={option.id}
              className={`flex-1 aspect-[3/4] rounded-lg border-2 overflow-hidden transition-all bg-white ${
                selectedTemplate === option.id
                  ? "border-blue-600 shadow-md ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedTemplate(option.id)}
            >
              <div className="w-full h-full min-h-0 flex items-stretch">
                {option.thumbnail}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
