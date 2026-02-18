// It will receive text
// Create embedding
// Store it
// Return success

import { createEmbedding } from "./embeddingService.js";
import { storeDocument, getAllDocuments } from "./vectorStore.js";
import { cosineSimilarity } from "../utils/similarity.js";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function  uploadDocument(req, res) {
    try {
        const {text} = req.body;
        // 1. Embedding
        const embedding = await createEmbedding(text);
        // 2. Store Document
        storeDocument(text, embedding);
        res.json({message: "Document stored successfully..."});
    } catch (error) {
        res.status(500).json({errro: error.message});
    }
}


export async function  askQuestion(req, res) {
    try {
        const {question} = req.body;
        const questionEmbedding = await createEmbedding(question);
        const documents = getAllDocuments();
        let bestMatch = null;
        let highestScore = -1;
        for(let doc of documents) {
            const score = cosineSimilarity(questionEmbedding, doc.embedding);
            if(score > highestScore) {
                highestScore = score;
                bestMatch = doc.text;
            }
        }
        const model = genAI.getGenerativeModel({
            model : "gemini-2.5-flash-lite"
        });
        const prompt = `
        Use the following context to answer the question.
        If the answer is not in the context, say I don't know...
        Context: ${bestMatch}
        Question: ${question}
        `;
        const result = await model.generateContent(prompt);
        const answer = result.response.text();
        res.json({
            answer,
            similarityScore: highestScore
        });
    } catch (error) {
        res.status(500).json({errro: error.message});
    }
}