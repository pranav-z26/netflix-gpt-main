// Add this new file for Gemini API usage

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const GEMINI_API_KEY = "AIzaSyDLajvP1krGmdXtCuD7oaQ_oc8mUZxipEQ"

export const fetchGeminiMovies = async (prompt) => {
  const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch from Gemini API");
  }

  const data = await response.json();
  // Extract the text response
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
};