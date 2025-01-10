import { Message } from "ai";
import { ChatMessage } from "./message";

interface MessageListProps {
  messages: Message[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground mt-8">
            Start a conversation by typing a message below.
          </div>
        ) : (
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
      </div>
    </div>
  );
}
