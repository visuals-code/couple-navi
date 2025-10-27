import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Home, DollarSign, Heart, Building2, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Home,
      title: "부동산 및 청약",
      description: "청약 조건/가점, 매매/임대 계약, HUG 보증",
    },
    {
      icon: DollarSign,
      title: "금융 지원 및 세금",
      description: "정책 대출, 출산/결혼 지원금, 세금 혜택",
    },
    {
      icon: Heart,
      title: "가족 및 복지 제도",
      description: "육아휴직, 의료비 지원, 심리 상담",
    },
    {
      icon: Building2,
      title: "사적 기업 혜택",
      description: "웨딩 마일리지, 신혼여행, 제휴 할인",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-card px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-soft border border-border animate-fade-in">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
            <span className="text-xs md:text-sm font-medium text-foreground">AI 기반 맞춤형 정책 추천</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in px-4">
            신혼부부를 위한
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              똑똑한 정책 상담
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4">
            부동산, 금융, 복지, 기업 혜택까지 흩어진 정보를 한곳에서.
            <br className="hidden md:block" />
            AI가 여러분의 상황에 꼭 맞는 정책을 찾아드립니다.
          </p>

          <Button
            onClick={() => navigate("/chat")}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground rounded-full px-6 py-5 md:px-8 md:py-6 text-base md:text-lg shadow-soft animate-fade-in"
          >
            <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            상담 시작하기
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              이런 정보를 제공합니다
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              신혼부부에게 필요한 모든 지원 정책을 한눈에
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border shadow-card hover:shadow-soft transition-shadow duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-soft">
                    <feature.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-card bg-card overflow-hidden">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary animate-float" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  이렇게 사용하세요
                </h2>
              </div>
              
              <div className="space-y-5 md:space-y-6">
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft text-sm md:text-base">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      상황을 알려주세요
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      소득, 거주 지역, 자녀 계획 등 간단한 정보를 입력하세요
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft text-sm md:text-base">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      AI가 분석합니다
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      수백 개의 정책 중 여러분에게 맞는 것을 실시간으로 검색
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-soft text-sm md:text-base">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">
                      맞춤 추천을 받으세요
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      신청 방법, 필요 서류, 출처까지 상세하게 안내해드립니다
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate("/chat")}
                className="w-full mt-6 md:mt-8 bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground rounded-full py-5 md:py-6 shadow-soft text-sm md:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                지금 바로 시작하기
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-6 md:py-8 text-center">
        <p className="text-xs md:text-sm text-muted-foreground">
          신뢰할 수 있는 공공데이터 기반 · 출처 명시 · 24시간 이용 가능
        </p>
      </footer>
    </div>
  );
};

export default Index;
