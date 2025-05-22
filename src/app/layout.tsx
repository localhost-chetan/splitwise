import "@/app/globals.css";
import { type Metadata } from "next";
import { Header } from "@shared/Header";
import { Inter } from "next/font/google";
import { APP_NAME } from "@lib/appConfigs";
import { ConvexClientProvider } from "@providers/ConvexClientProvider";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: `%s | ${APP_NAME}`, default: APP_NAME },
  description: `Effortlessly manage and split bills with friends or groups using our Next.js app powered by Convex. Track expenses, settle debts, and stay organized with a user-friendly interface. Perfect for shared trips, roommates, or group events!`,

  applicationName: APP_NAME,
  creator: `Chetan Seervi`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang={`en`} className={`dark`}>
        <body className={`${inter.className} antialiased`}>
          <ConvexClientProvider>
            <Header />

            <main className={`min-h-screen`}>{children}</main>
          </ConvexClientProvider>
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
