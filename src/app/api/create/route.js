// app/api/create/route.js
import { OpenAI } from "openai";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { prompt } = req.body;
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      return res.status(500).json({ error: "OpenAI API key is not set" });
    }

    // Create an instance of the OpenAI client
    const openai = new OpenAI({
      apiKey: openaiApiKey, // API key from environment
    });

    try {
      // Call the image generation API
      const response = await openai.images.generate({
        prompt: prompt,
        n: 1,
        size: "512x512", // You can change the size to match your needs
      });

      // Extract the image URL from the response
      const imageUrl = response.data[0].url;
      res.status(200).json({ imageUrl });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
