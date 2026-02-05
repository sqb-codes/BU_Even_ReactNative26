import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config()

const app = express()
app.use(express.json())

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.post("/chat", async (req, res) => {
    try {
        const {prompt} = req.body;
        const model = genAI.getGenerativeModel({model : "gemini-2.5-flash-lite"});
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        res.json({
            success: true,
            reply: response
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(3000, () => {
    console.log("Server running on PORT :",3000);
})