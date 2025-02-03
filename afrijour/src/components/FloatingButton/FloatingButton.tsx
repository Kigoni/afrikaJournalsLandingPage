import React, { useState, useCallback } from "react";
import { MessageSquarePlus, Send, X } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  question: string;
}

interface FloatingButtonProps {
  onClick?: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    question: "",
  });

  // Handle form input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      console.log("Form submitted:", formData);

      try {
        const response = await fetch(
          "https://aphrc.site/journal_api/api/feedback/",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: Date.now(),
              name: formData.name,
              email: formData.email,
              question: formData.question,
            }),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log("API Response:", result);

          setFormData({ name: "", email: "", question: "" });
          alert("Feedback submitted successfully!");
        } else {
          console.error("API Error:", response.statusText);
          alert("Failed to submit feedback. Please try again.");
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        alert("An error occurred while submitting feedback. Please try again.");
      }

      setIsFormOpen(false);
    },
    [formData]
  );

  return (
    <>
      <button
        onClick={() => {
          if (onClick) onClick();
          setIsFormOpen(true);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed right-0 bottom-28 flex items-center gap-2 
          bg-gradient-to-r from-violet-600 to-indigo-600 h-12 pl-3 
          rounded-l-full shadow-lg hover:shadow-xl transform hover:scale-105 
          active:scale-95 transition-all duration-300 ease-in-out 
          group z-[500] max-w-[140px] ${
            isHovered
              ? "translate-x-0 pr-4"
              : "translate-x-[calc(100%-4.5rem)] pr-2"
          }`}
        aria-label="Open feedback form"
      >
        <div className="relative z-[500]">
          <MessageSquarePlus
            className={`w-5 h-5 text-white ${
              isHovered ? "rotate-12" : "rotate-0"
            } transition-transform duration-300`}
          />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </div>
        <span
          className={`text-white font-medium text-sm ${
            isHovered ? "w-[60px] opacity-100" : "w-[18px] opacity-70"
          } overflow-hidden whitespace-nowrap transition-all duration-300`}
        >
          Feedback
        </span>
      </button>

      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[500]">
          <div className="relative w-full max-w-md">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center 
                bg-gray-800 text-gray-400 rounded-full hover:text-white transition-colors 
                hover:bg-gray-700 shadow-lg"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-full rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-[1px]">
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Ask a Question
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white outline-none hover:border-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white outline-none hover:border-gray-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="question"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Question
                    </label>
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white outline-none hover:border-gray-600 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
                  >
                    <span>Submit Form</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButton;
