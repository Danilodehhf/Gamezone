import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "../../../layouts/AuthLayout";

const WHATSAPP_NUMBER = "558389080567";
const WHATSAPP_DISPLAY = "(83) 8908-0567";

const WHATSAPP_MESSAGE =
  "Olá! Preciso de ajuda para recuperar meu acesso ao E-Farmácia.";

export default function Recovery() {
  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <AuthLayout>
      <Link
        to="/login"
        className="inline-flex cursor-pointer items-center gap-2 rounded px-1 py-1 text-sm font-medium text-slate-600 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:text-slate-400 dark:hover:text-blue-400"
      >
        <ArrowLeft size={17} />
        Voltar
      </Link>

      <header className="mt-7">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors dark:text-white sm:text-3xl">
          Esqueceu sua senha?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors dark:text-slate-400">
          Entre em contato com o suporte para confirmar
          sua identidade e recuperar o acesso.
        </p>
      </header>

      <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50/70 p-4 transition-colors dark:border-slate-700 dark:bg-slate-900/70">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-green-600 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800 dark:text-green-400">
            <MessageCircle size={21} />
          </span>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-800 transition-colors dark:text-slate-200">
              Suporte via WhatsApp
            </p>

            <p className="mt-0.5 text-base font-bold text-slate-950 transition-colors dark:text-white">
              {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-600 transition-colors dark:text-slate-400">
          Informe seu nome, usuário e entidade para
          agilizar o atendimento.
        </p>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:bg-[#2457C5] dark:hover:bg-[#1D4BAE]"
      >
        <MessageCircle size={18} />
        Falar com o suporte via WhatsApp
      </a>

      <div className="mt-6 flex items-start justify-center gap-2 text-center text-xs leading-5 text-slate-500 transition-colors dark:text-slate-400">
        <ShieldCheck
          size={15}
          className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
        />

        <span>
          O suporte confirmará sua identidade. Nunca
          informe sua senha pelo WhatsApp.
        </span>
      </div>
    </AuthLayout>
  );
}
