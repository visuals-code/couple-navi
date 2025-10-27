import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Home, Baby, DollarSign, FileText, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Home,
      title: "주거 지원",
      description: "신혼부부 특별공급, 전세자금 대출 등",
    },
    {
      icon: DollarSign,
      title: "대출 정보",
      description: "저금리 신혼부부 대출 상품 비교",
    },
    {
      icon: Baby,
      title: "출산 혜택",
      description: "출산 지원금, 육아휴직 제도 안내",
    },
    {
      icon: FileText,
      title: "세금 감면",
      description: "신혼부부 세액공제 및 감면 혜택",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-soft border border-border animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI 기반 맞춤형 정책 추천</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in">
            신혼부부를 위한
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              똑똑한 정책 상담
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            주거, 대출, 출산, 세금 지원 등 흩어진 정보를 한곳에서.
            <br />
            AI가 여러분의 상황에 꼭 맞는 정책을 찾아드립니다.
          </p>

          <Button
            onClick={() => navigate("/chat")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6 text-lg shadow-soft animate-fade-in"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            상담 시작하기
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              이런 정보를 제공합니다
            </h2>
            <p className="text-muted-foreground">
              신혼부부에게 필요한 모든 지원 정책을 한눈에
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-shadow duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-card bg-card overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="h-8 w-8 text-primary animate-float" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  이렇게 사용하세요
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-soft">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      상황을 알려주세요
                    </h3>
                    <p className="text-muted-foreground">
                      소득, 거주 지역, 자녀 계획 등 간단한 정보를 입력하세요
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-soft">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      AI가 분석합니다
                    </h3>
                    <p className="text-muted-foreground">
                      수백 개의 정책 중 여러분에게 맞는 것을 실시간으로 검색
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-soft">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      맞춤 추천을 받으세요
                    </h3>
                    <p className="text-muted-foreground">
                      신청 방법, 필요 서류, 출처까지 상세하게 안내해드립니다
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate("/chat")}
                className="w-full mt-8 bg-gradient-primary hover:opacity-90 transition-opacity text-white rounded-full py-6 shadow-soft"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                지금 바로 시작하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          신뢰할 수 있는 공공데이터 기반 · 출처 명시 · 24시간 이용 가능
        </p>
      </footer>
    </div>
  );
};

export default Index;
