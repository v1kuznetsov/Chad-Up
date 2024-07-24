import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Chad-Up",
  description: "Messenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <div className="flex h-screen items-center justify-center bg-[#ff9999] p-6">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[0.75rem] border-2 border-black bg-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
