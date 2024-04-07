import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* needtofix write proper css */}
      <body style={{ margin: "0px" }}>{children}</body>
    </html>
  );
}
