// Fonts
import { Anton, Roboto } from "next/font/google";
// Styles
import "./globals.scss";
// Public & Assets

// React/Next Functions

// Context
import { LanguageProvider } from "@/context/lang.context.jsx";
// Components
import Header from "@/containers/header/header.container.jsx";
import Footer from "@/containers/footer/footer.container.jsx";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});
const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export async function generateMetadata({ params: { locale } }) {
  return {
    title: "Template",
    description: "Generated by create next app",
  };
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body
        className={`${anton.variable} ${roboto.variable}`}
        suppressHydrationWarning={true}
      >
        <LanguageProvider lang={locale}>
          <Header variant="leftsettings-centerlogo-rightmenu" />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
