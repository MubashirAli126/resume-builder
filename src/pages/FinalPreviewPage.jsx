import { useResumeStore } from "../store/resumeStore";
import { useNavigate } from "react-router-dom";
import { TemplateRenderer } from "../templates";
import {
  Info,
  Settings,
  ChevronDown,
  User,
  FileEdit,
  Pencil,
  FileDown,
  Download,
  Image,
  Link2,
  Copy,
  Mail,
  Share2,
  Cloud
} from "lucide-react";

const FinalPreviewPage = () => {
  const resume = useResumeStore((s) => s.resumeData);
  const selectedTemplate = useResumeStore((s) => s.selectedTemplate);
  const setActiveStep = useResumeStore((s) => s.setActiveStep);
  const navigate = useNavigate();

  const handleEdit = () => {
    setActiveStep("personal");
    navigate("/");
  };

  const LinkedInIcon = ({ size = 20, className = "" }) => (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const ActionCard = ({ icon: Icon, iconColor, label, buttonText, buttonIcon: ButtonIcon, onClick }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${iconColor}`}>
        <Icon size={20} className="text-white" />
      </div>
      <span className="flex-1 font-medium text-sm" style={{ color: "#14151A" }}>{label}</span>
      <button
        onClick={onClick}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
      >
        <ButtonIcon size={16} />
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shrink-0">
        <h1 className="text-xl font-semibold" style={{ color: "#14151A" }}>Resume preview</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Info size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Settings size={20} />
          </button>
          <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={18} className="text-gray-500" />
            </div>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Resume Preview - Left & Center */}
        <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
          <div className="resume-preview-container bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-4xl w-full">
            <TemplateRenderer templateId={selectedTemplate} resumeData={resume} />
          </div>
        </div>

        {/* Right Sidebar - Actions */}
        <div className="w-80 bg-gray-100 border-l border-gray-200 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Edit option */}
          <div>
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#14151A" }}>Edit option</h3>
            <ActionCard
              icon={FileEdit}
              iconColor="bg-orange-500"
              label="Edit Resumes"
              buttonText="Edit"
              buttonIcon={Pencil}
              onClick={handleEdit}
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#14151A" }}>Download options</h3>
            <div className="space-y-3">
              <ActionCard
                icon={FileDown}
                iconColor="bg-red-500"
                label="Download as PDF"
                buttonText="Download"
                buttonIcon={Download}
                onClick={() => {}}
              />
              <ActionCard
                icon={Image}
                iconColor="bg-green-500"
                label="Download as PNG"
                buttonText="Download"
                buttonIcon={Download}
                onClick={() => {}}
              />
              <ActionCard
                icon={Link2}
                iconColor="bg-purple-500"
                label="Copy Shareable Link"
                buttonText="Copy link"
                buttonIcon={Copy}
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-sm mb-3" style={{ color: "#14151A" }}>Share & Export</h3>
            <div className="space-y-3">
              <ActionCard
                icon={Mail}
                iconColor="bg-red-500"
                label="Share via Email"
                buttonText="Share"
                buttonIcon={Share2}
                onClick={() => {}}
              />
              <ActionCard
                icon={LinkedInIcon}
                iconColor="bg-blue-600"
                label="Share on LinkedIn"
                buttonText="Share"
                buttonIcon={Share2}
                onClick={() => {}}
              />
              <ActionCard
                icon={Cloud}
                iconColor="bg-blue-500"
                label="Save to Cloud (Google Drive)"
                buttonText="Save"
                buttonIcon={Cloud}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPreviewPage;
