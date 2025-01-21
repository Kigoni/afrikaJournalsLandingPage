// import React from 'react';

export function GradientOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 z-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300 z-20" />
    </>
  );
}