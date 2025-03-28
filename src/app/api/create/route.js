import { OpenAI } from "openai";
import { db } from "@/utils/dbConnection"; // Import the database pool connection

// POST handler for creating a card
export async function POST(req, res) {
  const { prompt, userId } = await req.json(); // Get the prompt and userId from the request body
  const openaiApiKey = process.env.OPENAI_API_KEY;

  if (!openaiApiKey) {
    return res.status(500).json({ error: "OpenAI API key is not set" });
  }

  try {
    // Create an instance of the OpenAI client
    const openai = new OpenAI({
      apiKey: openaiApiKey, // API key from environment
    });

    // Call the OpenAI image generation API
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });

    // Extract the image URL from the response
    const imageUrl = response.data[0].url;

    // Save to database (PostgreSQL)
    const query = `
      INSERT INTO cards (user_id, prompt, image_url)
      VALUES ($1, $2, $3)
      RETURNING id;  -- This will return the id of the inserted row
    `;

    const values = [userId, prompt, imageUrl];

    // Execute the query
    const result = await db.query(query, values);

    // Optionally return the ID of the inserted record
    const newCardId = result.rows[0].id;

    // Send the image URL and the new card ID back to the client
    return res.status(200).json({ imageUrl, cardId: newCardId });
  } catch (err) {
    console.error("Error generating image:", err);
    return res.status(500).json({ error: err.message });
  }
}

// Exporting named handler for unsupported methods
export function OPTIONS(req, res) {
  return res.status(200).json({ message: "OK" });
}
