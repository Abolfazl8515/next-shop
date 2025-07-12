import { createContext, use, useState } from "react";

const StepperContext = createContext();

export default function StepperProvider({ children }) {
  const [step, setStep] = useState(1);

  return (
    <StepperContext.Provider value={{ step, setStep }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = use(StepperContext);
  if (context === undefined) throw new Error("not found Auth context");

  return context;
}
