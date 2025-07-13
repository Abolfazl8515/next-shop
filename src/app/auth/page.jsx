"use client";

import CheckOTPForm from "./_components/CheckOTPForm";
import CompleteProfile from "./_components/CompleteProfile";
import SendOTPForm from "./_components/SendOTPForm";
import { useStepper } from "./_context/StepperProvider";

function SignIn() {
  const { step } = useStepper();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOTPForm />;
      case 2:
        return <CheckOTPForm />;
      case 3:
        return <CompleteProfile />;
      default:
        break;
    }
  };

  return renderStep();
}

export default SignIn;
