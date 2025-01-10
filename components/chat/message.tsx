import { Message } from "ai";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`p-4 rounded-lg shadow-sm ${
        message.role === "user"
          ? "bg-primary/5 text-foreground ml-4 border border-primary/10"
          : "bg-secondary/50 text-foreground mr-4"
      }`}
    >
      {/* Role label with primary color for emphasis */}
      <div className="font-medium mb-1 text-primary">
        {message.role === "user" ? "You" : "Assistant"}
      </div>
      {/* Message content with preserved whitespace */}
      <div className="text-sm whitespace-pre-wrap">{message.content}</div>
    </div>
  );
}
