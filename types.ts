export type OutputType = 'medium' | 'deck' | 'video';

export interface GeneratedVisualPrompt {
  id: number;
  scene_or_theme: string;
  description: string;
  visual_prompt: string;
}

export type GeneratedContent = GeneratedVisualPrompt[] | null;
