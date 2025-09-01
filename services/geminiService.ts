import { GoogleGenAI, Type } from "@google/genai";
import type { GeneratedVisualPrompt } from '../types';

// Initialize the Google Gemini AI client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// Define the expected JSON schema for the AI's response
const responseSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: {
        type: Type.INTEGER,
        description: "A unique sequential identifier for the prompt, starting from 1."
      },
      scene_or_theme: {
        type: Type.STRING,
        description: "The title or theme for this visual concept in Turkish."
      },
      description: {
        type: Type.STRING,
        description: "A brief explanation of what this visual represents in the context of the project, in Turkish."
      },
      visual_prompt: {
        type: Type.STRING,
        description: "A detailed, artistic, and descriptive prompt in ENGLISH for an image generation AI like Imagen or Midjourney."
      }
    },
    required: ["id", "scene_or_theme", "description", "visual_prompt"]
  }
};


const generateVisuals = async (rawInput: string | object, context: 'article' | 'presentation' | 'video'): Promise<GeneratedVisualPrompt[]> => {
  const contextInstruction = {
    article: "bir Medium makalesi için infografik ve konsept görselleri",
    presentation: "bir müşteri sunumu (pitch deck) için profesyonel slayt görselleri",
    video: "bir CapCut videosu için sinematik sahneler ve B-roll çekimleri"
  }[context];

  const inputTypeDescription = typeof rawInput === 'object'
    ? 'yapılandırılmış bir S.A.G.A. JSON raporu'
    : 'yapılandırılmamış ham bir metin';

  const processedInput = typeof rawInput === 'object' ? JSON.stringify(rawInput, null, 2) : rawInput;

  const prompt = `
# GÖREV: Sana verilen ve ${inputTypeDescription} olan girdiyi analiz ederek, ${contextInstruction} oluşturmak amacıyla, son derece yüksek kaliteli, profesyonel ve sanatsal 5 adet görsel prompt üret.

# ROL: Sen, hem bir Web3 stratejisti hem de deneyimli bir sinematograf ve sanat yönetmenisin. Amacın, karmaşık teknik konuları, sıradan insanların bile anlayacağı ve etkileneceği, görsel olarak çarpıcı konseptlere dönüştürmektir.

# GİRDİ VERİSİ:
\`\`\`
${processedInput}
\`\`\`

# TALİMATLAR:
1.  **Analiz Et:** Girdiyi derinlemesine analiz et. Eğer JSON ise, 'confidence_score' ve 'detailed_report' gibi alanlara odaklan. Eğer düz metin ise, ana temaları, kilit mesajları ve projenin ruhunu anla.
2.  **Konsept Geliştir:** Metnin özünü yansıtan 5 adet benzersiz görsel konsept belirle. Bunlar projenin ekibini, teknolojisini, pazar potansiyelini veya vizyonunu temsil etmeli.
3.  **Prompt Üret (EN ÖNEMLİ KURAL):**
    *   \`scene_or_theme\` ve \`description\` alanlarını Türkçe oluştur.
    *   \`visual_prompt\` alanını **KESİNLİKLE İNGİLİZCE** oluştur. Bu prompt'lar, imaj oluşturma AI'ları için maksimum kaliteyi hedeflemelidir.
    *   **Prompt Kalite Kuralları (İngilizce \`visual_prompt\` için):**
        *   **Sinematik Dil Kullan:** "cinematic lighting, dramatic shadows, wide-angle shot, 85mm portrait lens, depth of field, dutch angle" gibi terimler kullan.
        *   **Gerçekçi Detaylar Ekle:** "photorealistic, hyper-detailed, intricate details, sharp focus, 8K, Unreal Engine 5 render" gibi ifadelerle kaliteyi artır.
        *   **Sanatsal Stiller Belirt:** "minimalist infographic style of The Economist, concept art, futuristic UI/UX interface design, data visualization" gibi stillerle görsele yön ver.
        *   **Duyguyu ve Atmosferi Tanımla:** "A sense of optimism and growth, a dark and mysterious atmosphere, a clean and corporate feel" gibi ifadelerle ruh halini belirt.
4.  **JSON Formatında Çıktı Ver:** Sonucu, belirtilen JSON şemasına %100 uygun bir JSON array olarak, başka hiçbir metin eklemeden döndür.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText.startsWith('[') || !jsonText.endsWith(']')) {
        throw new Error("API did not return a valid JSON array.");
    }
    const generatedPrompts = JSON.parse(jsonText) as GeneratedVisualPrompt[];
    return generatedPrompts;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate visual prompts from Gemini API: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the Gemini API.");
  }
};

export const generateMediumArticle = (rawInput: string | object): Promise<GeneratedVisualPrompt[]> => {
  return generateVisuals(rawInput, 'article');
};

export const generatePitchDeck = (rawInput: string | object): Promise<GeneratedVisualPrompt[]> => {
  return generateVisuals(rawInput, 'presentation');
};

export const generateVideoKit = (rawInput: string | object): Promise<GeneratedVisualPrompt[]> => {
  return generateVisuals(rawInput, 'video');
};
