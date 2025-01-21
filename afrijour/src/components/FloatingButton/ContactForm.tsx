import React, { useState, useCallback } from 'react';
import { Send, X } from 'lucide-react';

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setFormData({
      name: '',
      email: '',
      question: ''
    });
    onClose();
  }, [formData, onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4  z-[500]">
      <div className="relative w-full max-w-md  z-[500]">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-gray-800 text-gray-400 
                   rounded-full hover:text-white transition-colors z-10 hover:bg-gray-700 shadow-lg"
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                            transition-colors text-white outline-none
                            hover:border-gray-600"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                            transition-colors text-white outline-none
                            hover:border-gray-600"
                  spellCheck="false"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Question
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                            transition-colors text-white outline-none
                            hover:border-gray-600 resize-none"
                  spellCheck="true"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 
                         text-white font-medium rounded-lg 
                         hover:from-cyan-600 hover:to-purple-600 
                         transition-all duration-300
                         flex items-center justify-center gap-2
                         transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Submit Form</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;