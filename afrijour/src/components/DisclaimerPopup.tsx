import React, { useState, useEffect } from 'react';

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isOpen ? (
    <div
      className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative animate-fade-in overflow-y-auto max-h-[80vh]">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="text-2xl">⭐</span>
          <h2 className="text-xl font-bold text-center">Important Notice</h2>
          <span className="text-2xl">⭐</span>
        </div>

        <div className="space-y-4 text-gray-700">
          <h3 className="font-bold text-lg tracking-normal text-center">
            Welcome to Afrika Journals Platform!
          </h3>

          <p>
            Thank you for visiting our site. We are dedicated to improving the visibility of African researchers and their outputs. The data on this platform has been collected using advanced technologies and AI to create profiles of researchers and institutions. While we strive for accuracy, the platform is in its growth phase, and some information may currently be incomplete or require updates.
          </p>

          <p>
            Our team is continuously refining the data, addressing inconsistencies, and improving accuracy through the integration of additional verified sources. We are also resolving variations in naming and aliases across publications to ensure cohesive and reliable profiles.
          </p>

          <p>
            We value your input in this process. Researchers and institutions are encouraged to review and update their profiles on the platform, helping us enhance the quality and accuracy of the information. Your contributions will play a vital role in making Afrika Journals Platform a trusted resource for showcasing African scholarship.
          </p>

          <p>
            Please note that the platform is constantly evolving, and as more data is added, the quality and accuracy of the information will continue to improve. We appreciate your patience and support as we work to create a more comprehensive and reliable resource.
          </p>

          <p>
            Thank you for being part of this journey to highlight and celebrate African research excellence.
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default DisclaimerPopup;
