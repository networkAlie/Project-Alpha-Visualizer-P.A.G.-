import React from 'react';
import type { OutputType } from '../types';

interface OutputSelectorProps {
  onSelect: (outputType: OutputType) => void;
  isLoading: boolean;
}

const outputOptions: { id: OutputType; label: string; icon: React.ReactNode }[] = [
  { id: 'medium', label: 'Medium Article & Visuals', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg> },
  { id: 'deck', label: 'Pitch Deck Slides', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v8.695a3 3 0 00-1.134.002V7.418zM11.567 7.151c.22.07.412.164.567.267v8.695a3 3 0 00-1.134-.002V7.151z" /><path fillRule="evenodd" d="M9.504 1.032a6.5 6.5 0 013.992 0l.004.002a6.5 6.5 0 013.484 2.036l.003.004a6.5 6.5 0 012.036 3.484l.002.004a6.5 6.5 0 010 3.992l-.002.004a6.5 6.5 0 01-2.036 3.484l-.003.004a6.5 6.5 0 01-3.484 2.036l-.004.002a6.5 6.5 0 01-3.992 0l-.004-.002a6.5 6.5 0 01-3.484-2.036l-.003-.004a6.5 6.5 0 01-2.036-3.484l-.002-.004a6.5 6.5 0 010-3.992l.002-.004a6.5 6.5 0 012.036-3.484l.003-.004a6.5 6.5 0 013.484-2.036l.004-.002zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg> },
  { id: 'video', label: 'CapCut Video Kit', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg> },
];

export const OutputSelector: React.FC<OutputSelectorProps> = ({ onSelect, isLoading }) => {
  return (
    <div className="bg-brand-surface p-6 rounded-lg shadow-lg border border-brand-border">
      <h2 className="text-2xl font-semibold mb-4 text-brand-text">2. Choose Output Format</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {outputOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            disabled={isLoading}
            className="flex items-center justify-center text-center p-4 bg-brand-bg border border-brand-border rounded-lg hover:bg-brand-primary hover:text-white hover:border-brand-primary transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {option.icon}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
