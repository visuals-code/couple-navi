import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Home } from "lucide-react";

interface OnboardingStepProps {
  onComplete: (region: string, housing: string) => void;
}

const regions = [
  "서울", "경기", "인천", "부산", "대구", "광주", "대전", "울산", "세종",
  "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"
];

const housingOptions = [
  { value: "none", label: "무주택" },
  { value: "jeonse", label: "전세" },
  { value: "wolse", label: "월세" },
  { value: "self", label: "자가" },
  { value: "etc", label: "기타" },
];

export const OnboardingStep = ({ onComplete }: OnboardingStepProps) => {
  const [step, setStep] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedHousing, setSelectedHousing] = useState<string>("");

  const handleNext = () => {
    if (step === 1 && selectedRegion) {
      setStep(2);
    } else if (step === 2 && selectedHousing) {
      onComplete(selectedRegion, selectedHousing);
    }
  };

  const handleSkip = () => {
    if (step === 1) {
      setSelectedRegion("미응답");
      setStep(2);
    } else {
      onComplete(selectedRegion || "미응답", "미응답");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-hero p-4">
      <Card className="w-full max-w-lg shadow-card border-border animate-fade-in">
        <CardContent className="p-6 md:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              {step === 1 ? (
                <MapPin className="h-6 w-6 text-primary" />
              ) : (
                <Home className="h-6 w-6 text-primary" />
              )}
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                {step === 1 ? "거주 지역을 선택해주세요" : "주거 형태를 알려주세요"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              {step === 1 
                ? "지역별 맞춤 정책을 안내해드립니다"
                : "주거 형태에 맞는 지원 정책을 찾아드립니다"
              }
            </p>
          </div>

          {step === 1 ? (
            <div className="grid grid-cols-3 gap-2 mb-6">
              {regions.map((region) => (
                <Button
                  key={region}
                  variant={selectedRegion === region ? "default" : "outline"}
                  onClick={() => setSelectedRegion(region)}
                  className={`h-12 ${
                    selectedRegion === region 
                      ? "bg-gradient-primary text-white hover:opacity-90" 
                      : "hover:bg-secondary"
                  }`}
                >
                  {region}
                </Button>
              ))}
            </div>
          ) : (
            <div className="space-y-2 mb-6">
              {housingOptions.map((option) => (
                <Button
                  key={option.value}
                  variant={selectedHousing === option.value ? "default" : "outline"}
                  onClick={() => setSelectedHousing(option.value)}
                  className={`w-full h-14 justify-start text-left ${
                    selectedHousing === option.value 
                      ? "bg-gradient-primary text-white hover:opacity-90" 
                      : "hover:bg-secondary"
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleSkip}
              className="flex-1"
            >
              건너뛰기
            </Button>
            <Button
              onClick={handleNext}
              disabled={step === 1 ? !selectedRegion : !selectedHousing}
              className="flex-1 bg-[var(--button-bg)] hover:bg-[var(--button-bg)] hover:opacity-90 text-white"
            >
              {step === 1 ? "다음" : "시작하기"}
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            <div className={`h-2 w-2 rounded-full ${step === 1 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-2 w-2 rounded-full ${step === 2 ? "bg-primary" : "bg-muted"}`} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

import { useState } from "react";
