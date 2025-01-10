"use client";

import { useChat } from "ai/react";
import { MessageList } from "./message-list";
import { InputForm } from "./input-form";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <MessageList messages={messages} />
      <InputForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
