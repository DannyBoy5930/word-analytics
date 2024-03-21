import { useState } from "react";

export default function Textarea() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  return (
    <textarea
      value={text}
      className="textarea"
      onChange={handleChange}
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}
