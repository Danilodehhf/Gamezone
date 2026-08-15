import {
  Bell,
  Building2,
  ChevronDown,
  Menu,
  Moon,
  Search,
  Sun,
} from "lucide-react";

export default function Topbar({
  sidebarCollapsed,
  isDark,
  onOpenSidebar,
  onToggleSidebar,
  onToggleTheme,
}) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur transition-colors dark:border-slate-800 dark:bg-[#101722]/95 sm:px-6 lg:px-8">
      <div className="flex w-full items-center gap-3">
        {/* Abre a sidebar no mobile */}
        <button
          type="button"
          onClick={onOpenSidebar}
          aria-label="Abrir menu lateral"
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300 lg:hidden"
        >
          <Menu size={20} />
        </button>

        {/* Recolhe ou expande a sidebar no desktop */}
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label={
            sidebarCollapsed
              ? "Expandir menu lateral"
              : "Recolher menu lateral"
          }
          title={
            sidebarCollapsed
              ? "Expandir menu"
              : "Recolher menu"
          }
          className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300 lg:flex"
        >
          <Menu size={21} />
        </button>

        <div className="relative hidden w-full max-w-md md:block">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
          />

          <input
            type="search"
            placeholder="Buscar no E-Farmácia"
            className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-blue-500 dark:focus:bg-slate-900"
          />
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="hidden h-10 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300 sm:flex"
          >
            <Building2 size={17} />

            <span className="max-w-44 truncate">
              Farmácia Central
            </span>

            <ChevronDown size={15} />
          </button>

          <button
            type="button"
            aria-label="Notificações"
            title="Notificações"
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-950/50 dark:hover:text-blue-300"
          >
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#101722]" />
          </button>

          {/* Alternância entre tema claro e escuro */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? "Ativar tema claro"
                : "Ativar tema escuro"
            }
            title={
              isDark
                ? "Ativar tema claro"
                : "Ativar tema escuro"
            }
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-amber-300 dark:hover:border-amber-700/70 dark:hover:bg-amber-950/30 dark:hover:text-amber-200"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            aria-label="Abrir menu do usuário"
            title="Menu do usuário"
            className="flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 pr-2 transition hover:border-blue-200 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-700 dark:hover:bg-blue-950/50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0b63e5] text-[10px] font-bold text-white">
              CC
            </span>

            <ChevronDown
              size={15}
              className="hidden text-slate-500 dark:text-slate-400 sm:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
