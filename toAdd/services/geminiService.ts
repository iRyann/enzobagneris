
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function adaptDescriptionForAudience(
  baseActivity: string,
  target: string,
  context: string
): Promise<string> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `En tant que médiateur scientifique expert (Enzo Bagneris), réédite la description de l'activité "${baseActivity}" pour un public "${target}". 
    Le contexte est : ${context}. 
    Utilise un ton professionnel, pédagogique et inspirant. Max 150 mots.`,
    config: {
      temperature: 0.7,
    },
  });

  return response.text || "Erreur de génération du contenu.";
}
