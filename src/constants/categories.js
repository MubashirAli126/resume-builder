import {
  Info,
  FileText,
  GraduationCap,
  Languages,
  Briefcase,
  UserCheck,
  Users
} from "lucide-react";

export const CATEGORIES = [
  { id: "personal", label: "Personal Info", icon: Info },
  { id: "about", label: "About me", icon: FileText },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "language", label: "Language", icon: Languages },
  { id: "work", label: "Work experience", icon: Briefcase },
  { id: "expertise", label: "Areas of expertise", icon: UserCheck },
  { id: "references", label: "References", icon: Users }
];
