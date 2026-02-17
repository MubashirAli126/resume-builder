import FormPanel from "./components/layout/FormPanel";
import PreviewPanel from "./components/layout/PreviewPanel";
import { useResumeStore } from "./store/resumeStore";
import FinalPreviewPage from "./pages/FinalPreviewPage";

function App() {
  const activeStep = useResumeStore((s) => s.activeStep);

  // Show Final Preview Page
  if (activeStep === "finalPreview") return <FinalPreviewPage />;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
        {/* Form Panel */}
        <div className="md:w-1/2">
          <FormPanel />
        </div>

        {/* Preview Panel */}
        <div className="md:w-1/2">
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
