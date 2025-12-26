
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generatePaymentNote = async (context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 funny, short, and creative Venmo payment notes (including emojis) for this context: "${context}". Keep them casual and social.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              text: { type: Type.STRING },
              emoji: { type: Type.STRING }
            },
            required: ["text", "emoji"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error generating note:", error);
    return [
      { text: "Thanks for dinner!", emoji: "🍕" },
      { text: "Rent for this month", emoji: "🏠" },
      { text: "Gas money", emoji: "⛽" }
    ];
  }
};
