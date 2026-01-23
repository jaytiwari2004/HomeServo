import localFont from "next/font/local";
import "./globals.css";

const monaSans = localFont({
  src: [
    {
      path: "../../node_modules/mona-sans/woff2/Mona-Sans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/mona-sans/woff2/Mona-Sans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/mona-sans/woff2/Mona-Sans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/mona-sans/woff2/Mona-Sans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/mona-sans/woff2/Mona-Sans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});

export const metadata = {
  title: "HomeServo | Expert Home Services at Your Doorstep",
  description: "Professional cleaning, plumbing, and electrical services. Book verified experts in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
