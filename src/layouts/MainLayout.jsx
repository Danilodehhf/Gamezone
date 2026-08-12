import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import { useTheme } from "../hooks/useTheme";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const { isDark, toggleTheme } = useTheme();

  function toggleSidebar() {
    setSidebarCollapsed((currentState) => !currentState);
  }

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900 transition-colors dark:bg-[#0b111b] dark:text-slate-100">
      <Sidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
      />

      <div
        className={`min-h-dvh transition-[padding] duration-300 ${
          sidebarCollapsed ? "lg:pl-20" : "lg:pl-64"
        }`}
      >
        <Topbar
          sidebarCollapsed={sidebarCollapsed}
          isDark={isDark}
          onOpenSidebar={() => setSidebarOpen(true)}
          onToggleSidebar={toggleSidebar}
          onToggleTheme={toggleTheme}
        />

        <main className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8 lg:py-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
