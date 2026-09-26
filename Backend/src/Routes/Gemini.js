// server.js (ya aapka routes file)
import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();
const GeminiRouter = express.Router();

// Gemini Initialize karein
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

GeminiRouter.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body; // Frontend se message aur purani chat history aayegi

        // Naya chat session create karein aur history pass karein
        const chat = ai.chats.create({
            model: 'gemini-2.5-flash',
            history: history || [], // Format: [{ role: 'user', parts: [{ text: '...' }] }]
            config: {
                systemInstruction:"You are a social media assistant. If an image is provided, create a catchy post based on it. If only text is provided, create a post based on that text. The post must be very short, maximum 20 words total."
            }
        });

        const response = await chat.sendMessage({ message });
            console.log("gemini",response);
        res.json({ text: response.text });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Something went wrong with Gemini" });
    }
});

export default GeminiRouter;