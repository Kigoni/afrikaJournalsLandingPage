// import React from 'react';
import { LucideIcon } from 'lucide-react';
import { BackgroundImage } from './BackgroundImage';
import { GradientOverlay } from './GradientOverlay';
import { IconContainer } from './IconContainer';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  imageUrl: string;
}

export default function FeatureCard({ title, description, icon: Icon, link, imageUrl }: FeatureCardProps) {
  return (
    <div className="relative group h-[400px]">
      <BackgroundImage imageUrl={imageUrl} />
      <GradientOverlay />
      
      <div className="relative h-full bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-xs rounded-xl p-8 transform transition-all duration-300 hover:scale-[1.02] border border-gray-700/50 group-hover:border-cyan-500/50 z-30">
        <div className="flex flex-col h-full relative z-30">
          <div className="mb-6">
            <IconContainer Icon={Icon} />
            <h3 className="text-2xl font-bold text-white mb-3">
              {title}
            </h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="mt-auto">
            <a
              href={link}
              className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden rounded-lg group/button"
            >
              <span className="absolute w-full h-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-70 group-hover/button:opacity-100 transition-opacity duration-300" />
              <span className="relative text-white font-medium">
                Explore More
              </span>
            </a>
          </div>
        </div>

        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-xl" />
      </div>
    </div>
  );
}