"use client";

import { useState } from "react";
import React from "react";

import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";
import { DynamicBreacrump } from "@/components/reusable/DynamicBreadcrumb";

export default function Steps({ userId }: { userId: string | undefined }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceStep1: {},
    serviceStep2: {},
    serviceStep3: {},
  });

  const updateFormData = (step: number, data: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [`serviceStep${step}`]: data,
    }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < steps.length ? prevStep + 1 : prevStep
    );
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const steps = [
    () => (
      <StepOne
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
        currentStep={currentStep}
      />
    ),
    () => (
      <StepTwo
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
        currentStep={currentStep}
      />
    ),
    () => (
      <StepThree
        updateFormData={updateFormData}
        nextStep={nextStep}
        prevStep={prevStep}
        currentStep={currentStep}
      />
    ),
    () => (
      <StepFour
        formData={formData}
        prevStep={prevStep}
        currentStep={currentStep}
        userId={userId ?? ""}
      />
    ),
  ];
  const StepComponent = steps[currentStep - 1];
  const labels = ["Serviço", "Categorias", "Preço", "Review"];

  return (
    <>
      <DynamicBreacrump
        paths={[
          { label: "Explorar", href: "/explorer" },
          { label: "Novo Serviço", href: "/new-service" },
        ]}
      />
      <div className="px-2 lg:px-32 center">
        <div className="mx-2 lg:w-2/4 py-10 center flex-col space-y-16">
          <div className="grid place-items-center grid-cols-4">
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

          <div className="w-full">
            <StepComponent />
          </div>
        </div>
      </div>
    </>
  );
}
