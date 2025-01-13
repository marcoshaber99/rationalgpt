import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { ratelimit } from "@/lib/rate-limit";
import { headers } from "next/headers";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const ip = (await headers()).get("x-forwarded-for") ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return new Response(
        JSON.stringify({
          error: "Too many requests. Please wait a moment before trying again.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
    }

    const { messages } = await req.json();

    const result = streamText({
      system:
        "You are a helpful assistant. Format your responses using Markdown to improve readability. Use headers, lists, bold, italics, and code blocks where appropriate.",
      model: openai("gpt-4o"),
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred. Please try again later.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
