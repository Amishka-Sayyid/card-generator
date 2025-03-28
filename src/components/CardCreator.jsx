"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react"; // Clerk hook to get user information

export default function CardCreator() {
  const { user } = useUser(); // Clerk user object (contains userId, email, etc.)
  const [prompt, setPrompt] = useState(""); // State to hold the image prompt
  const [imageUrl, setImageUrl] = useState(""); // State to store the generated image URL
  const [loading, setLoading] = useState(false); // Loading state to show a spinner or button text

  // Function to handle card creation
  const handleCreateCard = async () => {
    if (!user) {
      alert("User not authenticated.");
      return;
    }

    setLoading(true);

    console.log("Prompt:", prompt);
    console.log("User ID:", user.id); // Log the user ID for debugging

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          userId: user.id, // Include the userId in the request body
        }),
      });

      const data = await response.json();
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error creating card:", error);
      alert("Error creating card.");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Input field to enter the card prompt */}
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)} // Update the prompt state
        placeholder="Enter your card prompt"
        className="p-2 m-2 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Button to trigger card creation */}
      <button
        className="bg-[#134b70] text-white px-6 py-3 text-lg rounded-lg hover:bg-[#508c9b] hover:scale-105 transition duration-300"
        onClick={handleCreateCard}
        disabled={loading} // Disable the button when loading
      >
        {loading ? "Creating..." : "Create Card"}
      </button>

      {/* Display the generated card image if available */}
      {imageUrl && (
        <div className="mt-4">
          <img
            src={imageUrl}
            alt="Generated Card"
            className="max-w-md rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
