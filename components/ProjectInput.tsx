import React, { useState } from 'react';

interface ProjectInputProps {
  onProcess: (text: string) => void;
  error: string | null;
}

const placeholderText = `Paste any project-related text here. For example:

Project Name: Star Atlas
Core Idea: A grand strategy game of space exploration, territorial conquest, and political domination set in the year 2620. It leverages the Solana blockchain for a serverless, player-owned economy.
Key Features: NFTs for ships and assets, a dual-token economy (ATLAS & POLIS), and stunning visuals built on Unreal Engine 5.
`;


export const ProjectInput: React.FC<ProjectInputProps> = ({ onProcess, error }) => {
  const [inputText, setInputText] = useState('');

  const handleProcessClick = () => {
    onProcess(inputText);
  };
  
  const handlePasteExample = () => {
    setInputText(placeholderText);
  };

  return (
    <div className="bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-border">
      <h2 className="text-2xl font-semibold mb-4 text-brand-text">1. Input Project Text</h2>
      <div className="mb-4">
        <label htmlFor="text-input" className="block text-sm font-medium text-brand-text-secondary mb-2">
          Paste your project description, report, or any related text below.
        </label>
        <textarea
          id="text-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={placeholderText}
          className="w-full h-64 p-3 bg-brand-bg text-brand-text border border-brand-border rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200 font-mono text-sm"
        />
      </div>
      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
      <div className="flex items-center justify-between">
         <button
            onClick={handlePasteExample}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-gray-500 transition duration-200"
        >
            Paste Example
        </button>
        <button
            onClick={handleProcessClick}
            disabled={!inputText}
            className="px-6 py-2 bg-brand-primary text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary transition duration-200 disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
            Process Text
        </button>
      </div>
    </div>
  );
};
