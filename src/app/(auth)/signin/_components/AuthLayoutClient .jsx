"use client";
import Lottie from "lottie-react";
import authAnimation from "@/lotties/auth_tree_animation.json";
import StepperProvider, { useStepper } from "../_context/StepperProvider";
import { stepperData } from "@/constants/stepperData";

function AuthLayoutClientUi({ children }) {
  const { step, setStep } = useStepper();

  return (
    <main className="w-full h-screen overflow-hidden flex justify-between items-center">
      <section className="w-2/6 relative flex items-center">
        <div className="absolute -left-2/5 w-96 h-96 rounded-2xl bg-secondary-0">
          <div className="w-11/12 flex flex-col">
            <h3 className="w-full text-center mt-10 text-2xl font-black text-secondary-800">
              برگستان
            </h3>
            <p className="text-[18px] mt-4 text-secondary-700 font-bold">
              ورود | ثبت نام
            </p>
            <div className="w-full">{children}</div>
          </div>
        </div>
      </section>
      <section className="w-2/3 h-full flex justify-center items-center bg-primary-700 rounded-tr-2xl rounded-br-2xl">
        <div className="w-full h-5/6 flex flex-col items-center">
          <div className="flex h-3/12">
            {stepperData.map((item) => (
              <div className="flex justify-center items-center" key={item.id}>
                <div className="flex flex-col items-center justify-center">
                  <div
                    className={`size-6 rounded-full ${
                      item.id === step ? "bg-secondary-0" : "bg-primary-400"
                    } justify-center flex flex-col items-center`}
                  >
                    <p className="text-secondary-700">{item.id}</p>
                  </div>
                  <span
                    className={`${
                      item.id === step ? "text-secondary-0" : "text-primary-500"
                    } mt-2`}
                  >
                    {item.title}
                  </span>
                </div>
                {item.id !== 3 && (
                  <div
                    className={`mobile:w-16 w-10 h-px -mt-4 ${
                      item.id === step ? "bg-primary-200" : "bg-secondary-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="w-3/12">
            <Lottie autoPlay loop animationData={authAnimation} />
          </div>
          <div className="h-3/12 mt-7">
            <h2 className="font-bold text-2xl text-secondary-50">
              فروش نهال انار
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}

// wrap context
function AuthLayoutClient({ children }) {
  return (
    <StepperProvider>
      <AuthLayoutClientUi>{children}</AuthLayoutClientUi>
    </StepperProvider>
  );
}

export default AuthLayoutClient;
