import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import ConditionalLayout from "@/components/conditional-layout";
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Atharv Karnekar | Freelancer",
  description: "Showcasing modern web development projects with expertise in React, Next.js, and MongoDB. Let’s build innovative, responsive, and user-friendly digital experiences together.",
  verification: {
    google: `${process.env.GOOGLE_SITE_VERIFICATION}`
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body
          className={`${roboto.className}`}
          data-new-gr-c-s-check-loaded="14.1216.0"
          data-gr-ext-installed=""
        >
          <ConditionalLayout>
            {children}
            <Toaster />
          </ConditionalLayout>
        </body>
      </AuthProvider>
    </html>
  );
}
