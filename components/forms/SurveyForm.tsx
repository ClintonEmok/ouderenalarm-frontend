"use client";

import React, { useState } from "react";
import SurveyFormStep1 from "./surveyform/SurveyFormStep1";
import { Progress } from "../ui/progress";
import SurveyFormStep2 from "./surveyform/SurveyFormStep2";
import SurveyFormStep3 from "./surveyform/SurveyFormStep3";
import SurveyFormStep4 from "./surveyform/SurveyFormStep4";
import { SurveyFormSchema } from "@/lib/validation";

const SurveyForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    email: "",
    livingSituation: "",
    medicalCondition: "",
    forWhom: "",
    name: "",
    phone: "",
  });

  const handleNextStep = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const progressValue = (currentStep / 4) * 100;

  const stepText = () => {
    switch (currentStep) {
      case 1:
        return "Vraag 1/4";
      case 2:
        return "Vraag 2/4";
      case 3:
        return "Vraag 3/4";
      case 4:
        return "Claim je gratis test";
      default:
        return "";
    }
  };

  const finalSubmit = (values: z.infer<typeof SurveyFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full p-8 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">{stepText()}</h1>
        {/* Progress bar */}
        <Progress value={progressValue} className="h-2" />
      </div>

      <div className="flex-grow flex flex-col justify-center max-w-xl mx-auto w-full">
        {currentStep === 1 && <SurveyFormStep1 onNext={handleNextStep} />}
        {currentStep === 2 && (
          <SurveyFormStep2
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <SurveyFormStep3
            onNext={handleNextStep}
            onBack={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <SurveyFormStep4
            formData={formData}
            handleSubmit={finalSubmit}
            onBack={handlePreviousStep}
          />
        )}
      </div>
    </div>
  );
};

export default SurveyForm;
