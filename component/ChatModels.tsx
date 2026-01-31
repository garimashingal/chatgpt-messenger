import React from "react";

export default function ChatModels() {
  return (
    <div className="bg-white rounded-lg text-black w-full">
      <select
        aria-label="Select chat model"
        className="w-full bg-white text-black p-2 rounded-md cursor-pointer"
      >
        <option>GPT-3.5</option>
        <option>GPT-4</option>
        <option>GPT-4 Turbo</option>
      </select>
    </div>
  );
}
