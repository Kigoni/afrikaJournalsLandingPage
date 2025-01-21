import React from 'react';
import Image from 'next/image';  // Import Next.js Image component

interface BackgroundImageProps {
  imageUrl: string;
}

export function BackgroundImage({ imageUrl }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl">
      {/* Dark overlay for better image visibility */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Background image using Next.js Image component */}
      <Image
        src={imageUrl}
        alt="" // Alt text for accessibility, you can replace this if necessary
        layout="fill" // Use fill layout to cover the container
        objectFit="cover" // Ensure the image covers the entire container
        className="transform scale-105 group-hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}
