import express from "express";
import axios from "axios";

const router = express.Router();

// OpenAI API Key & Endpoint
const API_KEY = "YOUR_OPENAI_API_KEY"; // 🔑 Replace with your actual OpenAI API key
const BASE_URL = "https://api.sree.shop/v1"; // 🔗 Replace with the correct API base URL

// 🎯 Route for AI Chat
router.post("/chat", async (req, res) => {
  const { message, model } = req.body;

  try {
    const response = await axios.post(
      `${BASE_URL}/chat/completions`, // ✅ Ensure API URL is correct
      {
        model: model || "gpt-4o", // Default model
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error(
      "🚨 OpenAI Chat API Error:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to fetch response from AI" });
  }
});

export default router;
