import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ChatMessage } from "@/components/ChatMessage";
import { OnboardingStep } from "@/components/OnboardingStep";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface UserContext {
  region: string;
  children: string;
}

const Chat = () => {
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [userContext, setUserContext] = useState<UserContext | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleOnboardingComplete = (region: string, children: string) => {
    setUserContext({ region, children });
    setShowOnboarding(false);
    
    const welcomeMessage: Message = {
      id: "1",
      role: "assistant",
      content: `안녕하세요! 신혼부부 지원 정책 상담 챗봇입니다.\n\n📍 거주 지역: ${region}\n👶 자녀 현황: ${getChildrenLabel(children)}\n\n위 정보를 바탕으로 맞춤형 정책을 안내해드리겠습니다. 궁금하신 내용을 편하게 물어보세요.\n\n예시:\n• 청약 가점 계산은 어떻게 하나요?\n• 정책 대출 금리와 한도가 궁금해요\n• 육아휴직 제도에 대해 알려주세요\n• 신혼여행 항공사 특별 혜택이 있나요?`,
      timestamp: new Date(),
    };
    
    setMessages([welcomeMessage]);
  };

  const getChildrenLabel = (value: string) => {
    const labels: Record<string, string> = {
      "none": "자녀 없음",
      "planning": "계획 중",
      "one": "1명",
      "two": "2명",
      "three_plus": "3명 이상",
      "미응답": "미응답"
    };
    return labels[value] || value;
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `${userContext?.region} 지역, ${getChildrenLabel(userContext?.children || "")} 가구 기준으로 답변드립니다.\n\n실제 서비스에서는 AI가 관련 정책을 분석하여 맞춤형 답변을 제공합니다. RAG 기반으로 최신 정책 정보와 출처를 함께 안내해드립니다.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (showOnboarding) {
    return <OnboardingStep onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 md:py-4 flex items-center gap-3 shadow-card">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className="rounded-full hover:bg-secondary flex-shrink-0"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
            <Heart className="h-4 w-4 md:h-5 md:w-5 text-primary-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <h1 className="font-semibold text-foreground text-sm md:text-base truncate">
              신혼부부 상담 챗봇
            </h1>
            <p className="text-xs text-muted-foreground truncate">
              {userContext?.region} · {getChildrenLabel(userContext?.children || "")}
            </p>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 md:py-6 space-y-3 md:space-y-4 max-w-4xl mx-auto w-full">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-card rounded-2xl px-4 py-3 shadow-card border border-border">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-card border-t border-border px-4 py-3 md:py-4 shadow-card">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="궁금한 내용을 입력하세요..."
            className="flex-1 rounded-full border-border focus:ring-primary text-sm md:text-base"
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            size="icon"
            className="rounded-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft flex-shrink-0 text-primary-foreground"
          >
            <Send className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
