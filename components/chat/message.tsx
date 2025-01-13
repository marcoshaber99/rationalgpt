import { Message } from "ai";
import { MemoizedMarkdown } from "./memoized-markdown";

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
      <div className="font-medium mb-2 text-primary">
        {message.role === "user" ? "You" : "Assistant"}
      </div>
      {/* Message content with preserved whitespace and markdown rendering */}
      <div className="text-sm prose prose-zinc dark:prose-invert max-w-none prose-headings:mt-6 prose-headings:mb-3 prose-p:my-3 prose-ul:my-4 prose-ol:my-4 prose-li:my-3 [&>ul>li]:mb-4 [&>ol>li]:mb-2">
        <MemoizedMarkdown id={message.id} content={message.content} />
      </div>
    </div>
  );
}
