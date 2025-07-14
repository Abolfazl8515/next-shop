"use client";
import Lottie from "lottie-react";
import authAnimation from "@/lotties/auth_tree_animation.json";
import StepperProvider, { useStepper } from "../_context/StepperProvider";
import { stepperData } from "@/constants/stepperData";

function AuthLayoutClientUi({ children }) {
  const { step } = useStepper();

  return (
    <main className="w-full h-screen overflow-hidden flex justify-between items-center">
      <section className="lg:w-2/6 md:w-1/2 mobile:w-3/4 w-2/3 lg:relative flex items-center justify-center lg:justify-start md:p-0 p-3">
        <div className="lg:absolute lg:-left-2/5 w-96 h-96 rounded-2xl bg-secondary-0">
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
      <section className="lg:w-2/3 md:w-1/2 mobeile:w-1/4 w-1/3 h-full flex justify-center items-center bg-primary-700 rounded-tr-2xl rounded-br-2xl">
        <div className="w-full h-5/6 flex flex-col items-center lg:justify-start justify-around">
          <div className="flex h-3/12 lg:flex-row flex-col gap-y-2 lg:gap-y-0">
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
                    } mt-2 md:text-base text-xs`}
                  >
                    {item.title}
                  </span>
                </div>
                {item.id !== 3 && (
                  <div
                    className={`w-10 h-px -mt-4 lg:block hidden ${
                      item.id === step ? "bg-primary-200" : "bg-secondary-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="w-3/12 hidden lg:block">
            <Lottie autoPlay loop animationData={authAnimation} />
          </div>
          <div className="h-3/12 mt-7">
            <h2 className="font-bold md:text-2xl text-base text-secondary-50">
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
