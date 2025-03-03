import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Footer />
        <main>{children}</main>
      </body>
    </html>
  );
}
