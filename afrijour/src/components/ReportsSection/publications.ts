import {
  FileText,
  BookOpen,
  Newspaper,
  Mail,
  BookMarked,
  FileSpreadsheet,
  GraduationCap,
  FileCheck,
  PenTool,
  Globe,
  Award,
  TrendingUp,
  Users,
  BookmarkPlus,
  Presentation,
  LineChart,
  BookCopy,
  Microscope,
  Library
} from 'lucide-react';
import { Publication } from './Publication';

export const publications: Publication[] = [
  {
    id: '1', // Add the id property
    type: "Report",
    title: "2024 State of African Journals",
    description: "An in-depth analysis of the African academic journal landscape in 2024.",
    link: "#",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-600",
    hoverColor: "hover:bg-emerald-600"
  },
  {
    id: '2', // Add the id property
    type: "Policy Brief",
    title: "Policy Brief Title",
    description: "A concise summary of key policy recommendations.",
    link: "#",
    icon: Globe, // Replace with the appropriate icon
    color: "bg-blue-100 text-blue-600",
    hoverColor: "hover:bg-blue-600"
  }
  // Add more publications as needed, ensuring each has a unique id
];
