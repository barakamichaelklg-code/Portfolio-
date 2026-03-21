import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function search() {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: "Find the LinkedIn profile URL for Baraka Michael, a pharmacy student at Université Officielle de Bukavu (UOB) in DRC. His email is barakamichaelklg@gmail.com.",
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  console.log(response.text);
  console.log(JSON.stringify(response.candidates?.[0]?.groundingMetadata?.groundingChunks, null, 2));
}
search();
