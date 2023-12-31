import "./globals.css";
import { Roboto } from "next/font/google";

import { Navbar } from "@/components/layouts";

export const metadata = {
  title: "Oblomov Media",
  description: "Yayıncılık ve Medya Üretim Şirketi"
};
const roboto = Roboto({ subsets: ["cyrillic"], weight: "300" });

type Props = { children: React.ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html lang="tr">
      <body className={`text-white ${roboto.className}`}>
        <main className="absolute inset-0">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
