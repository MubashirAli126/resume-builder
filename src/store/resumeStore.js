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

export const useResumeStore = create((set, get) => ({
  activeStep: "personal",
  resumeData: initialData,

  setActiveStep: (step) => set({ activeStep: step }),

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
