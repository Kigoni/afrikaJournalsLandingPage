import { LucideIcon } from 'lucide-react';

export interface Publication {
  id: string; // Add the id property
  type: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}
