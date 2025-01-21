// import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconContainerProps {
  Icon: LucideIcon;
}

export function IconContainer({ Icon }: IconContainerProps) {
  return (
    <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 transform group-hover:rotate-3 transition-transform duration-300 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl" />
      <Icon className="w-8 h-8 text-white relative z-10" />
    </div>
  );
}