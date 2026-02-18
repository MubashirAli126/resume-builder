import { create } from "zustand";

const savedResume = localStorage.getItem("resumeData");
const initialData = savedResume
  ? JSON.parse(savedResume)
  : {
      personal: {},
      about: "",
      education: [],
      work: [],
      expertise: [],
      language: [],
      references: []
    };

const getSavedTemplate = () => {
  const saved = localStorage.getItem("selectedTemplate");
  if (saved === "template2") return "blue";
  if (saved === "template3") return "teal";
  return saved || "orangeBlack";
};
const savedTemplate = getSavedTemplate();

export const useResumeStore = create((set, get) => ({
  activeStep: "personal",
  resumeData: initialData,
  selectedTemplate: savedTemplate,

  setActiveStep: (step) => set({ activeStep: step }),

  setSelectedTemplate: (template) => {
    localStorage.setItem("selectedTemplate", template);
    set({ selectedTemplate: template });
  },

  updateSection: (section, data) => {
    set((state) => {
      const updated = {
        ...state.resumeData,
        [section]: data
      };
      // Persist to LocalStorage
      localStorage.setItem("resumeData", JSON.stringify(updated));
      return { resumeData: updated };
    });
  },

  resetResume: () => {
    const empty = {
      personal: {},
      about: "",
      education: [],
      work: [],
      expertise: [],
      language: [],
      references: []
    };
    localStorage.setItem("resumeData", JSON.stringify(empty));
    set({ resumeData: empty, activeStep: "personal" });
  }
}));
