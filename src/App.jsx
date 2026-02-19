import { useResumeStore } from "./store/resumeStore";
import FinalPreviewPage from "./pages/FinalPreviewPage";
import MainLayout from "./components/layout/MainLayout";

function App() {
  const activeStep = useResumeStore((s) => s.activeStep);

  if (activeStep === "finalPreview") return <FinalPreviewPage />;

  return <MainLayout />;
}

export default App;
