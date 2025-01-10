import Chat from "@/components/chat/chat";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Chat />
    </div>
  );
}
