// Fonts
import { Anton, Roboto } from 'next/font/google'
// Styles
import "./globals.scss";
// Public & Assets

// React/Next Functions

// Context

// Components
import Header from '../containers/header-partwidthmenu/header.component.jsx'
import Footer from '../containers/footer/footer.component.jsx'

const anton = Anton({weight: '400', subsets: ['latin'], variable: '--font-anton'});
const roboto = Roboto({weight: ['400', '500', '700', '900'], subsets: ['latin'], variable: '--font-roboto'});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cz">
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className={`${anton.variable} ${roboto.variable}`} suppressHydrationWarning={true} >
        <Header variant="leftsettings-centerlogo-rightmenu" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
