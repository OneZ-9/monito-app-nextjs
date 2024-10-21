import "@/app/_styles/globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export const metadata = {
  title: "Monito | Pets for Best",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
