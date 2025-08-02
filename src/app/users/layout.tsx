import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/contexts/providers/theme-provider";
import { Navbar } from "@/components/navigation/navbar";
import { Toaster } from "sonner";
import AuthProvider from "@/components/auth/auth-provider";
import { Profile } from "@/components/users/profile-sidebar";
// import { AuthProvider } from "../_auth/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: "CareerSnap",
  description: "Where your Career Starts and Grow.",
};

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="h-screen overflow-hidden flex p-2">
              <aside className="w-1/4 hidden sm:block overflow-y-auto bg-slate-950 p-2 mt-[3rem]">
                <Profile />
              </aside>
              <main className="w-3/4 p-2 mt-[3rem]">
                {/* <UserDetails /> */}
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
