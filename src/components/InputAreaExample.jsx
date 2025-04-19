"use client";
import React, { useState } from "react";
import InputTextBox from "./InputTextBox"; // adjust the path if needed

export default function InputAreaExample() {
  const [textboxContent, setTextboxContent] = useState("");

  const handleInputChange = (newText) => {
    setTextboxContent(newText);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Try typing something below:</h2>
      <InputTextBox
        onInputChange={handleInputChange}
        textboxContent={textboxContent}
      />
      <p style={{ marginTop: "20px" }}>
        <strong>Preview:</strong> {textboxContent}
      </p>
    </div>
  );
}
