import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XanForm - ERP Solution",
  description: "XanForm software is a complete ERP solution specially developed for techno-savvy Schools, colleges and universities. This advanced software has all the features incorporated which are needed to handle all the required activities. School & College can manage activities like student attendance, fee, exam, library records and much more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
