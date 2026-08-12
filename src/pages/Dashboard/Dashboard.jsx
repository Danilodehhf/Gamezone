import {
  AlertTriangle,
  ClipboardCheck,
  PackageMinus,
  Pill,
} from "lucide-react";

const indicators = [
  {
    title: "Estoque baixo",
    value: "—",
    description: "Produtos abaixo do mínimo",
    icon: PackageMinus,
  },
  {
    title: "Próximos do vencimento",
    value: "—",
    description: "Validade nos próximos 90 dias",
    icon: AlertTriangle,
  },
  {
    title: "Produtos vencidos",
    value: "—",
    description: "Lotes que exigem atenção",
    icon: Pill,
  },
  {
    title: "Atendimentos hoje",
    value: "—",
    description: "Atendimentos realizados",
    icon: ClipboardCheck,
  },
];

export default function Dashboard() {
  return (
    <section>
      <header>
        <p className="text-sm font-semibold text-blue-700 dark:text-blue-400">
          Painel operacional
        </p>

        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          Visão geral
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
          Acompanhe o estoque, os vencimentos e as
          principais atividades da farmácia.
        </p>
      </header>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {indicators.map((indicator) => {
          const Icon = indicator.icon;

          return (
            <article
              key={indicator.title}
              title={`Abrir detalhes de ${indicator.title.toLowerCase()}`}
              className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-[#121a26] dark:hover:border-blue-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {indicator.title}
                  </p>

                  <p className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                    {indicator.value}
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                  <Icon size={21} />
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {indicator.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center transition-colors dark:border-slate-700 dark:bg-[#121a26]">
        <h2 className="text-base font-semibold text-slate-800 dark:text-slate-100">
          Estrutura principal criada
        </h2>

        <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
          Os alertas, ações rápidas, gráficos e tabelas
          serão adicionados nas próximas etapas.
        </p>
      </div>
    </section>
  );
}
