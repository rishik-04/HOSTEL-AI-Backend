@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;

  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  --color-accent-50: #fff7ed;
  --color-accent-100: #ffedd5;
  --color-accent-200: #fed7aa;
  --color-accent-300: #fdba74;
  --color-accent-400: #fb923c;
  --color-accent-500: #f97316;
  --color-accent-600: #ea580c;
  --color-accent-700: #c2410c;

  --animate-fade-in: fade-in 0.5s ease-out;
  --animate-slide-up: slide-up 0.5s ease-out;
  --animate-float: float 6s ease-in-out infinite;

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slide-up {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-14px); }
  }
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(148 163 184 / 0.5);
  border-radius: 999px;
}

.glass {
  @apply bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-white/40 dark:border-slate-700/50;
}

.card {
  @apply rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm;
}

.btn-primary {
  @apply inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 font-semibold text-white shadow-sm shadow-primary-600/30 transition-all hover:bg-primary-700 hover:shadow-md active:scale-[0.98] disabled:opacity-50;
}

.btn-accent {
  @apply inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 font-semibold text-white shadow-sm shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-md active:scale-[0.98];
}

.btn-outline {
  @apply inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 px-5 py-2.5 font-semibold text-slate-700 dark:text-slate-200 transition-all hover:border-primary-500 hover:text-primary-600 active:scale-[0.98];
}

.input-field {
  @apply w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10;
}

.label {
  @apply mb-1.5 block text-sm font-medium text-slate-600 dark:text-slate-300;
}
