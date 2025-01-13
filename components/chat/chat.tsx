"use client";

import { useChat } from "ai/react";
import { MessageList } from "./message-list";
import { InputForm } from "./input-form";
import { useState, useCallback } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Chat() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    experimental_throttle: 50,
    onError: (error) => {
      console.error("Chat error:", error);
      if (error.message.includes("Too many requests")) {
        toast({
          variant: "destructive",
          title: "Rate Limit Exceeded",
          description: "Please wait a moment before sending another message.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred. Please try again later.",
        });
      }
      setIsSubmitting(false);
    },
    onFinish: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isSubmitting) return;

      setIsSubmitting(true);
      await handleSubmit(e);
    },
    [handleSubmit, isSubmitting]
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <MessageList messages={messages} />
      <InputForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={onSubmit}
        isDisabled={isSubmitting}
      />
    </div>
  );
}
