import Header from "./Header";
import Footer from "./Footer";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Layout;