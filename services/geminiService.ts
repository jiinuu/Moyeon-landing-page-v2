
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// 인터페이스 정의를 프로젝트 아이디어로 변경
export interface ProjectIdea {
  title: string;
  desc: string;
  emoji: string;
}

export const generatePaymentNote = async (context: string): Promise<ProjectIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a creative Data Science Mentor. Generate 3 interesting and social-impact oriented data analysis project ideas based on the keyword: "${context}".
      
      For each idea, provide:
      1. A catchy title.
      2. A very short description (under 10 words) of what to analyze.
      3. A relevant emoji.
      
      Output strictly in JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              desc: { type: Type.STRING },
              emoji: { type: Type.STRING }
            },
            required: ["title", "desc", "emoji"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text);
    }
    return [];
  } catch (error) {
    console.error("Error generating ideas:", error);
    // 에러 발생 시 기본 더미 데이터 반환
    return [
      { title: "API 키를 확인해주세요", desc: "환경 변수 설정이 필요합니다.", emoji: "⚠️" },
      { title: "데이터 연결 오류", desc: "잠시 후 다시 시도해주세요.", emoji: "🔄" },
      { title: "네트워크 에러", desc: "인터넷 연결을 확인하세요.", emoji: "🌐" }
    ];
  }
};
