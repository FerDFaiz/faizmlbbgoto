
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getHeroStrategy(heroName: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a 3-sentence expert pro-player strategy tip for the hero ${heroName} in Mobile Legends: Bang Bang. Focus on high-level macro play and specific item synergies.`,
      config: {
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "Could not generate strategy. Try again later!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The spirits are silent. Please check your connection.";
  }
}
