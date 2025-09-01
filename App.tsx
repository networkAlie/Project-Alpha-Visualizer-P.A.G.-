import React, { useState, useCallback } from 'react';
import { ApiKeyInput } from './components/ApiKeyInput';
import { ProjectInput } from './components/ProjectInput';
import { OutputSelector } from './components/OutputSelector';
import { ContentOutput } from './components/ContentOutput';
import { generateMediumArticle, generatePitchDeck, generateVideoKit } from './services/geminiService';
import type { OutputType, GeneratedContent } from './types';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [rawInput, setRawInput] = useState<string | object | null>(null);
  const [selectedOutput, setSelectedOutput] = useState<OutputType | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleProcessInput = (text: string) => {
    if (text.trim().length === 0) {
        setError("Please provide some text or a S.A.G.A. JSON report to analyze.");
        setRawInput(null);
        return;
    }
    
    // Try to parse the input as JSON
    try {
        const parsedJson = JSON.parse(text);
        // If successful, save it as an object
        setRawInput(parsedJson);
    } catch (e) {
        // If it fails, save it as plain text
        setRawInput(text);
    }
    
    setError(null);
    setGeneratedContent(null);
    setSelectedOutput(null);
  };

  const handleSelectOutput = useCallback(async (outputType: OutputType) => {
    if (!rawInput) return;
    if (!apiKey) {
      setError("Please enter and save your Gemini API key before generating content.");
      return;
    }

    setIsLoading(true);
    setGeneratedContent(null);
    setSelectedOutput(outputType);
    setError(null);

    try {
      let content: GeneratedContent = null;
      if (outputType === 'medium') {
        content = await generateMediumArticle(rawInput, apiKey);
      } else if (outputType === 'deck') {
        content = await generatePitchDeck(rawInput, apiKey);
      } else if (outputType === 'video') {
        content = await generateVideoKit(rawInput, apiKey);
      }
      setGeneratedContent(content);
    } catch (e) {
      const err = e as Error;
      setError(`Generation Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }, [rawInput, apiKey]);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary text-transparent bg-clip-text">
            Project Alpha Visualizer
          </h1>
          <p className="text-brand-text-secondary mt-2">
            Transform S.A.G.A. reports or raw text into compelling marketing content.
          </p>
        </header>

        <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />

        <main className="space-y-8">
          <ProjectInput onProcess={handleProcessInput} error={error} />

          {rawInput && (
            <OutputSelector onSelect={handleSelectOutput} isLoading={isLoading || !apiKey} />
          )}
          
          <ContentOutput
            content={generatedContent}
            outputType={selectedOutput}
            isLoading={isLoading}
          />
        </main>
        
        <footer className="text-center mt-12 text-brand-text-secondary text-sm">
            <p>&copy; {new Date().getFullYear()} P.A.G. - Built for Alie Network</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
