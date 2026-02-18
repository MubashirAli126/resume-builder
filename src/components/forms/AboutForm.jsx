import { useResumeStore } from "../../store/resumeStore";
import { STEPS } from "../../constants/steps";
import { useState, useRef, useEffect } from "react";
import NextButton from "../ui/NextButton";
import DeleteButton from "../ui/DeleteButton";
import { Bold, Italic, Underline, List, ListOrdered } from "lucide-react";

/**
 * Image 3 – About Me section. Layout: card with Write Description,
 * toolbar (Bold, Italic, Underline, Bullet, Numbered), textarea, Delete left, Next right.
 */
const AboutForm = () => {
  const { resumeData, updateSection, setActiveStep } = useResumeStore();
  const [about, setAbout] = useState(resumeData.about || "");
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== about) {
      editorRef.current.innerHTML = about || "";
    }
  }, []);

  const handleEditorInput = () => {
    const html = editorRef.current?.innerHTML ?? "";
    setAbout(html);
    updateSection("about", html);
  };

  const handleFormat = (cmd, value = null) => {
    document.execCommand(cmd, false, value);
    editorRef.current?.focus();
    const html = editorRef.current?.innerHTML ?? "";
    setAbout(html);
    updateSection("about", html);
  };

  const handleClear = () => {
    setAbout("");
    updateSection("about", "");
    if (editorRef.current) editorRef.current.innerHTML = "";
  };

  const handleNext = () => {
    updateSection("about", about);
    const nextStep = STEPS.findIndex((s) => s.id === "about");
    setActiveStep(STEPS[nextStep + 1].id);
  };

  const hasContent = about?.replace(/<[^>]*>/g, "").trim().length > 0;

  return (
    <div className="space-y-4 font-app">
      {/* Main content card – white bg, grey border (Image 3) */}
      <div className="border border-[#D3D3D3] rounded-lg bg-white overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <label className="block text-sm font-medium text-gray-800 mb-2">
            Write Description
          </label>
          {/* Toolbar */}
          <div className="flex items-center gap-1 p-2 bg-gray-50 rounded-lg mb-2">
            <button
              type="button"
              onClick={() => handleFormat("bold")}
              className="p-2 rounded hover:bg-gray-200 text-gray-700"
              title="Bold"
            >
              <Bold size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleFormat("italic")}
              className="p-2 rounded hover:bg-gray-200 text-gray-700"
              title="Italic"
            >
              <Italic size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleFormat("underline")}
              className="p-2 rounded hover:bg-gray-200 text-gray-700"
              title="Underline"
            >
              <Underline size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleFormat("insertUnorderedList")}
              className="p-2 rounded hover:bg-gray-200 text-gray-700"
              title="Bullet list"
            >
              <List size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleFormat("insertOrderedList")}
              className="p-2 rounded hover:bg-gray-200 text-gray-700"
              title="Numbered list"
            >
              <ListOrdered size={18} />
            </button>
          </div>
          <div
            ref={editorRef}
            contentEditable
            onInput={handleEditorInput}
            className="min-h-[160px] w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00318B] focus:border-transparent resize-none"
            data-placeholder="Write your message..."
            suppressContentEditableWarning
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-t border-gray-100">
          <DeleteButton onClick={handleClear} />
          <span className="flex-1" />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <NextButton isActive={hasContent} onClick={handleNext} />
      </div>
    </div>
  );
};

export default AboutForm;
