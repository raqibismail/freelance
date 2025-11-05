"use client";

import { AppSidebar } from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import { SidebarProvider } from "../components/ui/sidebar";
// import { useAuth } from "../app/auth/AuthContext";
import { redirect } from "next/navigation";
import { useAuth } from "../auth/AuthContext";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background text-text">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex min-h-screen text-text bg-background transition-colors duration-300">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-col flex-1 min-h-screen">
          <Topbar />
          <main className="flex-1 p-6">{children}</main>
          <Footer />
        </div>
      </SidebarProvider>
    </div>
  );
}
