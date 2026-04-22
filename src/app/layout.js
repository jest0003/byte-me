import { Exo_2, Gidole } from "next/font/google";
import "./globals.css";
import NavTop from "./components/navTop";
import Footer from "./components/Footer";
// 1. Importer din CartProvider (sørg for at stien passer til hvor du har filen)
import { CartProvider } from "./components/context/CartContext";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
});

const gidole = Gidole({
  variable: "--font-gidole",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "ByteMe Store",
  description: "Smart tech. Smarter choice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${gidole.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* 2. Pak NavTop og children ind i CartProvider */}
        <CartProvider>
          <NavTop />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
