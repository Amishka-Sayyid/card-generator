"use client";

import { useState } from "react";
import axios from "axios"; // Importing axios for making HTTP requests

export default function CardCreator() {
  const [prompt, setPrompt] = useState(""); // State to hold the image prompt
  const [imageUrl, setImageUrl] = useState(""); // State to store the generated image URL
  const [loading, setLoading] = useState(false); // Loading state to show a spinner or button text

  // Function to handle card creation
  const handleCreateCard = async () => {
    setLoading(true); // Set loading to true while processing the request

    try {
      // Send a POST request to your Next.js API using axios
      const response = await axios.post("/api/create", {
        prompt, // Sending the prompt from the input field
      });

      if (response.data.imageUrl) {
        setImageUrl(response.data.imageUrl); // Set the image URL if the request was successful
      } else {
        alert("Error: " + response.data.error); // Handle error if no imageUrl is returned
      }
    } catch (err) {
      alert("Error: " + err.message); // Catch any other errors during the request
    }

    setLoading(false); // Set loading to false after processing
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
