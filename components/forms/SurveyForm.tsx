"use client";

import React, { useState } from "react";
import SurveyFormStep1 from "./surveyform/SurveyFormStep1";
import { Progress } from "../ui/progress";
import SurveyFormStep2 from "./surveyform/SurveyFormStep2";
import SurveyFormStep3 from "./surveyform/SurveyFormStep3";
import SurveyFormStep4 from "./surveyform/SurveyFormStep4";

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
        return "Step 1 of 4";
      case 2:
        return "Step 2 of 4";
      case 3:
        return "Step 3 of 4";
      case 4:
        return "Step 4 of 4";
      default:
        return "";
    }
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
        {currentStep === 2 && <SurveyFormStep2 onNext={handleNextStep} />}
        {currentStep === 3 && <SurveyFormStep3 onNext={handleNextStep} />}
        {currentStep === 4 && <SurveyFormStep4 onNext={handleNextStep} />}
        {/* {currentStep === 2 && (
          <SurveyFormStep2
            formData={formData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 3 && (
          <SurveyFormStep3
            formData={formData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )}
        {currentStep === 4 && (
          <SurveyFormStep4
            formData={formData}
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        )} */}
      </div>
    </div>
  );
};

export default SurveyForm;
