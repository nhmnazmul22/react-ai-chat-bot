import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

// Create the express app
const app = express();

// Config the dotenv
dotenv.config();

app.use(express.json());

// create Open ai instance
const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN,
});

// controller function
const aiResponseController = async (req, res) => {
  const { type, text } = req.body;

  try {
    const completion = await client.chat.completions.create({
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        {
          role: "user",
          content:
            text || "Give me a warning message if i not give any text to you.",
        },
      ],
    });

    console.log(completion);
    res.json({
      success: true,
      data: {
        type: "ai",
        text: completion.choices[0].message.content,
        date: new Date(Date.now()).toISOString(),
      },
    });
  } catch (err) {
    res.json({
      success: false,
      data: {
        error: err.message || "Something went wrong!!",
      },
    });
  }
};

// Get route
app.post("/", aiResponseController);

// Lister the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
