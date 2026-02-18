// This service will:
// 1. Connect to Gemini
// 2. Convert text to embedding vector
//      Embedding = mathematical representation of meaning
// 3. Return numeric array

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function createEmbedding(text) {
    const model = genAI.getGenerativeModel({
        model: "embedding-001"
    });
    const result = await model.embedContent(text);
    return result.embedding.values;
}
