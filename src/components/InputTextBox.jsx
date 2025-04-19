import React from "react";
import "./InputTextBox.css"; // Optional, for styling

export default function InputTextBox({ onInputChange, textboxContent }) {
  return (
    <textarea
      className="input-textbox"
      value={textboxContent}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Type your message here..."
    />
  );
}
