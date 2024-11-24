import "./globals.css";
import NavBar from "./Components/NavBar";
import localFont from "next/font/local";

const Tajawal = localFont({
  src: [
    {
      path: "./fonts/Tajawal-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "./fonts/Tajawal-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "./fonts/Tajawal-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={Tajawal.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
