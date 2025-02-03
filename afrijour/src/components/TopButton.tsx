import React from 'react';
import { ArrowUpFromDot } from "lucide-react";

function TopButton() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <button
        id="chatbot"
        onClick={handleClick}
        className={`fixed right-4 bottom-48  
                    z-[5] is-lunar-green inline-flex items-center justify-center 
                    text-sm font-medium border rounded-full 
                    w-11.2 h-11.2 m-0 cursor-pointer border-gray-200 bg-none`}
        type="button"
        aria-haspopup="dialog"
      >
        <ArrowUpFromDot className="w-4.5 h-4.5 text-yellow-500 hover:text-green-800" />
      </button>
    </div>
  );
}

export default TopButton;
