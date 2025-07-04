import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

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
      <body className={`${vazirFont.className} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
