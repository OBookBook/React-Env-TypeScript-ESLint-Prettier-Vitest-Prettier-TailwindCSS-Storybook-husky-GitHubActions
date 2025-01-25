import { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
        aria-label="Text Input"
      />
      <p>Entered Text: {text}</p>
    </div>
  );
};
export default TextInput;
