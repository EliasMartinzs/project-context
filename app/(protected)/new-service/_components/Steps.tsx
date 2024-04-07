"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import React from "react";
import { TbChevronCompactLeft, TbChevronCompactRight } from "react-icons/tb";

function Step1() {
  return <div>1</div>;
}
function Step2() {
  return <div>2</div>;
}
function Step3() {
  return <div>3</div>;
}
function Step4() {
  return <div>4</div>;
}

export default function Steps() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [Step1, Step2, Step3, Step4];

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length ? prevStep + 1 : prevStep
    );
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const StepComponent = steps[currentStep - 1];
  const labels = ["Escolha", "Personalize", "Confirme", "Complete"];

  return (
    <div className="px-2 lg:px-32 center">
      <div className="mx-2 lg:w-2/4 py-10 center flex-col gap-5">
        <div className="flex justify-between items-center mb-6 lg:max-w-xl">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`${
                index + 1 === currentStep
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <div className="center flex-col text-center mx-4 lg:mx-10 gap-y-2">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    index + 1 === currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {index + 1}
                </div>
                <div className="ml-2">{labels[index]}</div>
              </div>
            </div>
          ))}
        </div>

        <StepComponent />

        <div className="flex justify-between">
          <button onClick={prevStep} disabled={currentStep === 1}>
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={nextStep} disabled={currentStep === steps.length}>
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
