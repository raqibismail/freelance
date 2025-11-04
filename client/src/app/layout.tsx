import type { Metadata } from "next";
import "./globals.css";
import { AppSidebar } from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Freelancer System",
  description: "Project Management System for Freelancers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen text-text transition-colors duration-300 bg-background ">
            <SidebarProvider>
              <AppSidebar />
              <div className="flex flex-col flex-1 min-h-screen">
                <Topbar />
                <main className="flex-1 p-6 transition-colors duration-300">
                  {children}
                </main>
                <Footer />
              </div>
            </SidebarProvider>

          </div>
        </ThemeProvider>
      </body>
    </html>

  );
}
