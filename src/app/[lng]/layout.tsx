import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../../../utils/ThemeRegistry";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
  title: "eshop-B2B",
  description: "eshop-B2B-internship-project",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
