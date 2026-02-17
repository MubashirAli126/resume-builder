import { useResumeStore } from "../../store/resumeStore";
import { useState } from "react";

const PreviewPanel = () => {
  const { resumeData } = useResumeStore();
  const [template, setTemplate] = useState("template1");

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button
          className={`px-3 py-1 rounded ${
            template === "template1" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTemplate("template1")}
        >
          Template 1
        </button>
        <button
          className={`px-3 py-1 rounded ${
            template === "template2" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setTemplate("template2")}
        >
          Template 2
        </button>
      </div>

      <div className={`bg-white p-6 rounded shadow space-y-4 ${template}`}>
        {/* Personal */}
        {resumeData.personal && (
          <div>
            {resumeData.personal.photo && (
              <img
                src={resumeData.personal.photo}
                className="w-24 h-24 rounded-full object-cover"
              />
            )}
            <h3 className="text-xl font-bold">{resumeData.personal.fullName}</h3>
            <p>{resumeData.personal.title}</p>
            <p>{resumeData.personal.email}</p>
            <p>{resumeData.personal.phone}</p>
            <p>{resumeData.personal.address}</p>
          </div>
        )}

        {/* About Me */}
        {resumeData.about && (
          <div>
            <h3 className="font-bold">About Me</h3>
            <p>{resumeData.about}</p>
          </div>
        )}

        {/* Repeat for Education, Work, Expertise, Language, References */}
      </div>
    </div>
  );
};

export default PreviewPanel;
