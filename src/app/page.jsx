import MainLayout from "@/components/MainLayout";
import ProductList from "@/components/ProductList";
import Button from "@/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <main className="w-3/5 space-y-10">
        <section className="inverted mt-10 mx-auto"></section>
        <section className="w-full text-center mt-4 font-black text-3xl text-secondary-600">
          <h1>هر نهالی بخوای ما داریم از هر درختی با تضمین کیفیت (:</h1>
          <Button variant="primary" className="text-2xl mt-4">
            <Link href="/products">رفتن به فروشگاه✌️</Link>
          </Button>
        </section>
        <section className="mt-20">
          <h3 className="font-bold text-2xl text-secondary-600 border-b border-primary-500 text-center">
            آخرین محصولات
          </h3>
          <div className="w-full h-auto flex flex-wrap gap-1 mt-10">
            <ProductList />
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
