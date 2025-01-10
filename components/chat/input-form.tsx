import { Send } from "lucide-react";

interface InputFormProps {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function InputForm({
  input,
  handleInputChange,
  handleSubmit,
}: InputFormProps) {
  return (
    <div className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto w-full">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex items-center gap-2">
            <input
              className="flex-1 p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              value={input}
              placeholder="Type your message..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
