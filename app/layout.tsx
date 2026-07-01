import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ehsebha.app"),
  title: "احسبها | تطبيق حساب السعرات الحرارية للأكل العربي",
  description:
    "احسب سعرات أكلك العربي بسهولة، وتتبع السعرات والماكروز والفيتامينات مع تطبيق احسبها.",
  keywords: [
    "احسبها",
    "حساب السعرات",
    "السعرات الحرارية",
    "الأكل العربي",
    "تطبيق دايت",
    "Calorie Counter",
    "Arabic Food",
    "Nutrition",
    "Calories",
  ],
  applicationName: "احسبها",
  openGraph: {
    title: "احسبها | تطبيق حساب السعرات الحرارية",
    description:
      "احسب سعرات أكلك العربي بسهولة وتتبع السعرات والماكروز والفيتامينات.",
    url: "https://ehsebha.app",
    siteName: "احسبها",
    locale: "ar_AR",
    type: "website",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "احسبها" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "احسبها",
    description: "تطبيق عربي لحساب السعرات الحرارية وتتبع التغذية اليومية.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = "G-A4";

  return (
    <html lang="ar" dir="rtl">
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}