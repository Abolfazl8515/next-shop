import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | برگستان",
    default: "برگستان",
  },
  description: "با برگستان دیگ غصه خرید نهال هاتو نداشته باش",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.className} font-sans min-h-screen w-full flex flex-col items-center`}
      >
        <Toaster />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
