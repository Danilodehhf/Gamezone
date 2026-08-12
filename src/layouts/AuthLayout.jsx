import {
  HeartPulse,
  Moon,
  Sun,
} from "lucide-react";

import elmarLogoBranca from "../assets/brand/ElmarLogoBranca.png";
import elmarLogoPadrao from "../assets/brand/ElmarLogoPadrao.png";
import { useTheme } from "../hooks/useTheme";

export default function AuthLayout({ children }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-slate-50 px-4 py-5 text-slate-800 transition-colors duration-300 dark:bg-[#080d15] dark:text-slate-100 sm:px-6">
      {/* Alternância de tema */}
      <button
        type="button"
        onClick={toggleTheme}
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
        className="absolute right-4 top-4 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-600 shadow-sm backdrop-blur transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/15 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-800 dark:hover:text-blue-400 sm:right-6 sm:top-6"
      >
        {isDark ? (
          <Sun size={19} />
        ) : (
          <Moon size={19} />
        )}
      </button>

      {/* Fundo externo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-500/[0.07] blur-3xl dark:bg-blue-500/[0.10]" />

        <div className="absolute -bottom-48 -right-40 h-[480px] w-[480px] rounded-full bg-blue-300/10 blur-3xl dark:bg-blue-700/[0.08]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,79,168,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,79,168,0.025)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100dvh-2.5rem)] w-full items-center justify-center">
        <section className="grid w-full max-w-[1150px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_22px_65px_rgba(15,23,42,0.11)] transition-colors duration-300 dark:border-slate-700/80 dark:bg-[#101722] dark:shadow-[0_22px_65px_rgba(0,0,0,0.42)] lg:grid-cols-[46%_54%]">
          {/* Painel institucional fixo */}
          <aside className="relative hidden min-w-0 overflow-hidden bg-gradient-to-br from-[#2563C7] to-[#174E9D] p-8 text-white transition-colors duration-300 dark:from-[#123B7A] dark:to-[#0D2F63] lg:flex lg:min-h-[560px] lg:flex-col xl:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(147,197,253,0.30),transparent_38%),linear-gradient(145deg,rgba(255,255,255,0.05),transparent_55%)] dark:bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.18),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.025),transparent_58%)]" />
            </div>

            <div className="relative">
              <img
                src={elmarLogoBranca}
                alt="Elmar Tecnologia"
                className="h-11 w-auto object-contain"
              />

              <div className="mt-11 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <HeartPulse size={24} />
                </span>

                <div>
                  <p className="text-xl font-bold tracking-tight">
                    E-Farmácia
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-blue-100/80">
                    Gestão da assistência farmacêutica
                    pública
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-14 max-w-md">
              <h1 className="max-w-sm text-3xl font-bold leading-tight tracking-tight xl:text-[36px] xl:leading-[1.18]">
                Gestão farmacêutica pública em um só
                lugar.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-blue-50/80 xl:text-[15px]">
                Gestão integrada, segura e eficiente para
                toda a operação farmacêutica.
              </p>
            </div>

            <p className="relative mt-auto pt-10 text-xs text-blue-100/70">
              Tecnologia desenvolvida pela Elmar
              Tecnologia
            </p>
          </aside>

          {/* Conteúdo variável */}
          <section className="flex min-w-0 items-center justify-center bg-white p-6 transition-colors duration-300 dark:bg-[#101722] sm:p-10 lg:min-h-[560px] lg:p-12 xl:p-14">
            <div className="w-full max-w-md">
              {/* Cabeçalho compacto para mobile */}
              <div className="mb-9 text-center lg:hidden">
                <img
                  src={elmarLogoPadrao}
                  alt="Elmar Tecnologia"
                  className="mx-auto h-10 w-auto object-contain dark:hidden"
                />

                <img
                  src={elmarLogoBranca}
                  alt="Elmar Tecnologia"
                  className="mx-auto hidden h-10 w-auto object-contain dark:block"
                />

                <div className="mt-5 flex items-center justify-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0b63e5] text-white shadow-sm">
                    <HeartPulse size={22} />
                  </span>

                  <div className="text-left">
                    <p className="text-lg font-bold text-slate-900 transition-colors dark:text-white">
                      E-Farmácia
                    </p>

                    <p className="text-xs font-medium text-slate-500 transition-colors dark:text-slate-400">
                      Assistência farmacêutica pública
                    </p>
                  </div>
                </div>
              </div>

              {children}
            </div>
          </section>
        </section>

        <p className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 whitespace-nowrap text-[11px] text-slate-500 transition-colors dark:text-slate-500 2xl:block">
          © {new Date().getFullYear()} Elmar Tecnologia
          · E-Farmácia
        </p>
      </div>
    </main>
  );
}
