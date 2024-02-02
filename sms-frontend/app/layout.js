import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XanForm - ERP Solution",
  description: "XanForm software is a complete ERP solution specially developed for techno-savvy Schools, colleges and universities. This advanced software has all the features incorporated which are needed to handle all the required activities. School & College can manage activities like student attendance, fee, exam, library records and much more.",
  openGraph: {
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/documents/a83f6ebe-4aba-433b-9f9c-96f90f8b1d06.png?token=yyC-wXk6kcKGqPbDeVxX2is-jVP9eOnu9cBwsqZ0JFY&height=1080&width=1080&expires=33242888420',
        alt: 'XanForm opengraph Image',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
