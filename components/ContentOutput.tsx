import React, { useState } from 'react';
import type { GeneratedContent, OutputType, GeneratedVisualPrompt } from '../types';

interface ContentOutputProps {
  content: GeneratedContent;
  outputType: OutputType | null;
  isLoading: boolean;
}

const VisualPromptDisplay: React.FC<{ promptData: GeneratedVisualPrompt }> = ({ promptData }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptData.visual_prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-brand-bg p-4 rounded-lg border border-brand-border">
      <h4 className="text-lg font-bold text-brand-primary">{promptData.scene_or_theme}</h4>
      <p className="text-sm text-brand-text-secondary mt-1 mb-3">{promptData.description}</p>
      
      <div className="p-3 bg-black bg-opacity-20 border-l-4 border-brand-secondary rounded-r-md">
        <p className="text-sm font-semibold text-brand-secondary mb-2">VISUAL PROMPT</p>
        <p className="text-brand-text-secondary italic text-sm font-mono">{promptData.visual_prompt}</p>
        <button
          onClick={handleCopy}
          className="mt-3 px-3 py-1 text-xs bg-brand-primary text-white rounded-md hover:bg-indigo-500 transition duration-200"
        >
          {copied ? 'Copied!' : 'Copy Prompt'}
        </button>
      </div>
    </div>
  );
};


const renderVisualPrompts = (prompts: GeneratedVisualPrompt[]) => {
  return (
    <div className="space-y-6">
      {prompts.map((prompt) => (
        <VisualPromptDisplay key={prompt.id} promptData={prompt} />
      ))}
    </div>
  );
};

const getTitleForOutputType = (outputType: OutputType | null): string => {
    switch (outputType) {
        case 'medium': return 'Visuals for Medium Article';
        case 'deck': return 'Visuals for Pitch Deck';
        case 'video': return 'Visuals for CapCut Video Kit';
        default: return 'Generated Output';
    }
}

export const ContentOutput: React.FC<ContentOutputProps> = ({ content, outputType, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-border text-center">
        <div className="flex justify-center items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-semibold">Generating content, please wait...</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return null;
  }

  return (
    <div className="bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-border">
      <h2 className="text-2xl font-semibold mb-4 text-brand-text">3. {getTitleForOutputType(outputType)}</h2>
      {Array.isArray(content) && renderVisualPrompts(content)}
    </div>
  );
};
