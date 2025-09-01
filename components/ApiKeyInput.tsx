import React, { useState, useEffect } from 'react';

interface ApiKeyInputProps {
  apiKey: string;
  setApiKey: (key: string) => void;
}

export const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ apiKey, setApiKey }) => {
  const [localApiKey, setLocalApiKey] = useState('');

  useEffect(() => {
    const savedKey = sessionStorage.getItem('gemini-api-key');
    if (savedKey) {
      setApiKey(savedKey);
      setLocalApiKey(savedKey);
    }
  }, [setApiKey]);

  const handleSaveKey = () => {
    sessionStorage.setItem('gemini-api-key', localApiKey);
    setApiKey(localApiKey);
  };

  return (
    <div className="bg-brand-surface p-4 rounded-lg shadow-lg border border-brand-border mb-8">
      <label htmlFor="api-key-input" className="block text-sm font-medium text-brand-text-secondary mb-2">
        Enter your Google Gemini API Key
      </label>
      <div className="flex items-center space-x-2">
        <input
          id="api-key-input"
          type="password"
          value={localApiKey}
          onChange={(e) => setLocalApiKey(e.target.value)}
          placeholder="Your API Key"
          className="flex-grow p-2 bg-brand-bg text-brand-text border border-brand-border rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition duration-200"
        />
        <button
          onClick={handleSaveKey}
          className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-surface focus:ring-brand-primary transition duration-200"
        >
          Save Key
        </button>
      </div>
       {apiKey && (
        <p className="text-green-400 text-xs mt-2">API Key is set for this session.</p>
      )}
    </div>
  );
};
