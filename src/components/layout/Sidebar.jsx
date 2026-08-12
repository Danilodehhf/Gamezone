import {
  HeartPulse,
  LayoutDashboard,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import elmarLogoBranca from "../../assets/brand/ElmarLogoBranca.png";
import iconeElmarBranco from "../../assets/brand/IconeElmarBranco.png";

export default function Sidebar({
  open,
  collapsed,
  onClose,
}) {
  return (
    <>
      {/* Fundo escurecido no mobile */}
      <button
        type="button"
        aria-label="Fechar menu lateral"
        onClick={onClose}
        className={`fixed inset-0 z-40 cursor-pointer bg-slate-950/45 backdrop-blur-[1px] transition-opacity lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col overflow-hidden bg-[#123970] text-white shadow-2xl transition-[width,transform,background-color] duration-300 dark:bg-[#0b2447] lg:translate-x-0 lg:shadow-none ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "lg:w-20" : "lg:w-64"}`}
      >
        <header className="relative flex h-24 shrink-0 items-center justify-center border-b border-white/10 px-6 py-4">
          {/* As duas versões da logo levam para a página inicial */}
          <Link
            to="/dashboard"
            onClick={onClose}
            aria-label="Ir para a visão geral"
            title="Ir para a visão geral"
            className="flex cursor-pointer items-center justify-center rounded-xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <img
              src={elmarLogoBranca}
              alt="Elmar Tecnologia"
              className={`h-auto w-40 object-contain transition-all duration-300 ${
                collapsed ? "lg:hidden" : ""
              }`}
            />

            <img
              src={iconeElmarBranco}
              alt="Elmar"
              className={`hidden h-11 w-11 object-contain transition-all duration-300 ${
                collapsed ? "lg:block" : ""
              }`}
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu"
            className="absolute right-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-blue-100 transition hover:bg-white/10 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
        </header>

        <div
          className={`border-b border-white/10 py-5 transition-all duration-300 ${
            collapsed ? "px-5 lg:px-3" : "px-5"
          }`}
        >
          <div
            className={`flex items-center gap-3 ${
              collapsed ? "lg:justify-center" : ""
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-blue-100 ring-1 ring-white/10">
              <HeartPulse size={22} />
            </span>

            <div
              className={`min-w-0 ${
                collapsed ? "lg:hidden" : ""
              }`}
            >
              <p className="truncate text-sm font-bold">
                E-Farmácia
              </p>

              <p className="mt-0.5 truncate text-[11px] font-medium text-blue-200/75">
                Assistência farmacêutica
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p
            className={`mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200/55 ${
              collapsed ? "lg:hidden" : ""
            }`}
          >
            Geral
          </p>

          <NavLink
            to="/dashboard"
            onClick={onClose}
            title={collapsed ? "Visão geral" : undefined}
            className={({ isActive }) =>
              `flex h-11 cursor-pointer items-center rounded-xl text-sm font-medium outline-none transition focus-visible:ring-2 focus-visible:ring-white/70 ${
                collapsed
                  ? "gap-3 px-3 lg:justify-center lg:px-0"
                  : "gap-3 px-3"
              } ${
                isActive
                  ? "bg-white text-[#0b4696] shadow-sm"
                  : "text-blue-100/85 hover:bg-white/10 hover:text-white"
              }`
            }
          >
            <LayoutDashboard
              size={19}
              className="shrink-0"
            />

            <span className={collapsed ? "lg:hidden" : ""}>
              Visão geral
            </span>
          </NavLink>

          <div
            className={`mt-7 px-3 ${
              collapsed ? "lg:hidden" : ""
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-200/55">
              Módulos
            </p>

            <p className="mt-3 text-xs leading-5 text-blue-100/50">
              Atendimentos, estoque e cadastros serão
              adicionados nas próximas etapas.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}
