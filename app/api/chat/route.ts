import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  // Extract messages array from request body
  const { messages } = await req.json();

  // Use Vercel AI SDK to stream GPT-4 responses
  // - Handles token streaming
  // - Manages response formatting
  // - Automatically sets proper headers
  const result = streamText({
    model: openai("gpt-4o"),
    messages,
  });

  // Convert the stream to a Response object with appropriate headers
  return result.toDataStreamResponse();
}
