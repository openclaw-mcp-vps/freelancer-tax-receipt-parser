import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReceiptAI — Parse Receipts into Tax-Ready Categories",
  description: "AI-powered receipt scanner that categorizes expenses for freelancer tax filing with IRS-compliant categories. Upload receipts, get instant tax categories, export to CSV/PDF."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2178e6d9-eb15-484a-9800-9e9ee094edc8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
