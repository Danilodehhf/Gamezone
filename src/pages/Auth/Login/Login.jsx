import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Eye,
  EyeOff,
  LockKeyhole,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "../../../layouts/AuthLayout";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!username.trim() || !password) {
      setErrorMessage(
        "Informe seu usuário e sua senha.",
      );
      return;
    }

    setErrorMessage("");

    // A integração com o backend será adicionada aqui.
  }

  return (
    <AuthLayout>
      <header className="mb-7">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors dark:text-white sm:text-3xl">
          Acesse sua conta
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors dark:text-slate-400">
          Informe suas credenciais para continuar no
          E-Farmácia.
        </p>
      </header>

      {errorMessage && (
        <div
          role="alert"
          className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 transition-colors dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
        >
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-semibold text-slate-800 transition-colors dark:text-slate-200"
          >
            Usuário
          </label>

          <div className="group relative">
            <UserRound
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600 dark:text-slate-500 dark:group-focus-within:text-blue-400"
            />

            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setErrorMessage("");
              }}
              required
              autoComplete="username"
              autoCapitalize="none"
              spellCheck="false"
              placeholder="Digite seu usuário"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/15"
            />
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between gap-4">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-800 transition-colors dark:text-slate-200"
            >
              Senha
            </label>

            <Link
              to="/recovery"
              className="cursor-pointer rounded px-1 py-1 text-[13px] font-medium text-blue-700 transition hover:text-blue-900 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Esqueci minha senha
            </Link>
          </div>

          <div className="group relative">
            <LockKeyhole
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600 dark:text-slate-500 dark:group-focus-within:text-blue-400"
            />

            <input
              id="password"
              name="password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorMessage("");
              }}
              required
              autoComplete="current-password"
              placeholder="Digite sua senha"
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-blue-500 dark:focus:ring-blue-500/15"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  (currentValue) =>
                    !currentValue,
                )
              }
              aria-label={
                showPassword
                  ? "Ocultar senha"
                  : "Mostrar senha"
              }
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-4 focus:ring-blue-500/20 dark:bg-[#2457C5] dark:hover:bg-[#1D4BAE]"
        >
          Entrar
          <ArrowRight size={18} />
        </button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500 transition-colors dark:text-slate-400">
        <Building2
          size={15}
          className="shrink-0 text-blue-600 dark:text-blue-400"
        />

        Sua entidade padrão será carregada após o
        acesso.
      </div>
    </AuthLayout>
  );
}
