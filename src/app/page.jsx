"use client";
import MainLayout from "@/components/MainLayout";
import Button from "@/ui/Button";
import Lottie from "lottie-react";
import landingAnimation from "@/lotties/auth_tree_animation.json";
import Link from "next/link";
import LatestProductsHome from "@/components/LatestProductsHome";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-3/5 space-y-20">
        <section className="w-full text-center">
          <div className="inverted mt-10 mx-auto"></div>
          <h1 className="mt-4 font-black text-3xl text-secondary-600">
            فروش تخصصی نهال انار با تضمین کیفیت و قیمت به صرفه (:
          </h1>
          <Button variant="primary" className="text-2xl mt-4">
            <Link href="/products">رفتن به فروشگاه✌️</Link>
          </Button>
        </section>
        <section>
          <h3 className="font-bold text-2xl text-secondary-600 border-b border-primary-500 text-center">
            آخرین محصولات
          </h3>
          <div className="w-full h-auto flex flex-wrap gap-1 mt-10">
            <LatestProductsHome />
          </div>
        </section>
        <section className="w-full flex justify-between items-center rounded-3xl px-4 bg-primary-200">
          <div className="space-y-3 w-1/2">
            <h3 className="font-black text-3xl text-secondary-600 flex items-center space-x-2">
              <span className="w-20 h-20 rounded-4xl bg-primary-500 flex justify-center items-center text-secondary-0">
                <HandThumbUpIcon className="w-10 h-10" />
              </span>
              <span>نهال رو مستقیم از باغدار بخر</span>
            </h3>
            <p className="text-[18px] text-secondary-600">
              خرید مستقیم از باغدار بدون واسطه هم قیمتش ارزون تره هم حمایت بزرگی
              میشه از صنعت کشاورزی کشور
            </p>
          </div>
          <div className="w-1/3">
            <Lottie autoPlay loop animationData={landingAnimation} />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
