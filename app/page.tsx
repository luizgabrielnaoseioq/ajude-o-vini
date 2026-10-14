"use client";

import { useState } from "react";

const campaign = {
  name: "Vini",
  age: 5,
  pixKey: "078.086.069-10",
  receiver: "Andréia Bocinha da Silva",
  bank: "Nubank",
};

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(campaign.pixKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt("Copie a chave Pix:", campaign.pixKey);
    }
  }

  async function shareCampaign() {
    const text =
      "💙 Ajude o Vini a realizar exames importantes!\n\n" +
      "O Vini tem 5 anos e precisa realizar exames importantes " +
      "para acompanhar sua saúde. Qualquer contribuição ou " +
      "compartilhamento ajuda muito.";

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Ajude o Vini",
          text,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(
          `${text}\n\n${window.location.href}`,
        );
        alert("Texto e link copiados para compartilhar!");
      }
    } catch {
      // O usuário pode cancelar o compartilhamento.
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d18] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-0 top-[40%] h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-xl">
              💙
            </div>

            <div className="min-w-0">
              <p className="truncate font-bold tracking-tight">
                Juntos pelo Vini
              </p>
              <p className="text-xs text-slate-400">
                Uma campanha de amor e cuidado
              </p>
            </div>
          </a>

          <button
            onClick={shareCampaign}
            className="shrink-0 rounded-xl border border-white/10 px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-400/40 hover:bg-white/5 sm:px-4"
          >
            Compartilhar ↗
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-14 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3.5 py-2 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Vaquinha solidária
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Vamos ajudar o{" "}
            <span className="text-blue-400">Vini</span> a realizar
            seus exames?
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            O Vini tem apenas 5 aninhos e precisa realizar
            exames importantes para acompanhar melhor sua
            saúde. Com a sua ajuda, podemos tornar isso possível.
          </p>

          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="#doar"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
            >
              Contribuir via Pix <span>♥</span>
            </a>

            <button
              onClick={shareCampaign}
              className="min-h-12 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/5"
            >
              Compartilhar campanha
            </button>
          </div>

          <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
            <span className="text-lg text-blue-300">♡</span>
            Qualquer contribuição ou compartilhamento ajuda.
          </div>
        </div>

        {/* Pix card */}
        <div
          id="doar"
          className="scroll-mt-6 rounded-3xl border border-white/10 bg-[#101827]/95 p-5 shadow-2xl shadow-black/20 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-2xl">
              💙
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Ajude o Vini
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Sua contribuição faz a diferença.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] p-4 sm:p-5">
            <p className="text-sm font-semibold text-blue-200">
              Como contribuir
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Faça um Pix com o valor que puder. Cada ajuda
              contribui para que o Vini realize os exames
              de que precisa.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-[#080d18]/70 p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Chave Pix · CPF
            </p>

            <p className="mt-3 break-all font-mono text-lg font-semibold tracking-wide text-white sm:text-xl">
              {campaign.pixKey}
            </p>

            <button
              onClick={copyPix}
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-bold text-white transition hover:bg-blue-400"
            >
              {copied ? (
                <>
                  <span>✓</span> Chave Pix copiada!
                </>
              ) : (
                <>
                  <span>▣</span> Copiar chave Pix
                </>
              )}
            </button>

            <div className="mt-5 border-t border-white/[0.08] pt-4">
              <p className="text-xs text-slate-500">
                Beneficiária
              </p>

              <p className="mt-1 break-words text-sm font-semibold text-slate-200">
                {campaign.receiver}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {campaign.bank}
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Confira o nome da beneficiária no aplicativo
            do seu banco antes de confirmar a transferência.
          </p>
        </div>
      </section>

      {/* Story */}
      <section
        id="historia"
        className="relative border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-6xl gap-9 px-4 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Nossa história
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Um pequeno gesto pode fazer uma grande diferença.
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Oi, pessoal! Meu nome é Vini, tenho apenas
              5 aninhos e sou autista.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Neste momento, preciso realizar alguns exames
              importantes para acompanhar melhor a minha saúde
              e garantir que eu possa receber o acompanhamento
              e os cuidados de que preciso.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Infelizmente, o valor dos exames é de
              aproximadamente R$ 5.000, um valor muito alto
              para a nossa família conseguir pagar sozinha.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <article className="rounded-2xl border border-white/10 bg-[#101827] p-5 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
                🩺
              </div>

              <h3 className="text-lg font-bold">
                Por que precisamos de ajuda?
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Os exames são importantes para acompanhar
                a saúde do Vini e ajudar a família a buscar
                os cuidados necessários.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-[#101827] p-5 sm:p-7">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                🤝
              </div>

              <h3 className="text-lg font-bold">
                Toda ajuda conta
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Se você não puder contribuir financeiramente,
                compartilhar esta campanha também nos ajuda
                muito a alcançar mais pessoas.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 text-4xl">💙</div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos fazer isso juntos?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-400">
            Agradecemos de coração a cada pessoa que puder
            ajudar, compartilhar ou simplesmente torcer pelo
            Vini. Que Deus abençoe cada um de vocês!
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 min-[420px]:flex-row">
            <button
              onClick={copyPix}
              className="min-h-12 rounded-xl bg-blue-500 px-7 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              {copied ? "Pix copiado!" : "Copiar chave Pix"}
            </button>

            <button
              onClick={shareCampaign}
              className="min-h-12 rounded-xl border border-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/5"
            >
              Compartilhar ↗
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/[0.08] px-4 py-7 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>Feito com carinho para ajudar o Vini 💙</p>
          <a
            href="#doar"
            className="transition hover:text-blue-300"
          >
            Como contribuir
          </a>
        </div>
      </footer>
    </main>
  );
}
