import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 sm:pt-48">
      {/* Animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 animate-float rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 animate-float rounded-full bg-accent-400/20 blur-3xl [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.15)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:border-primary-500/30 dark:bg-primary-500/10 dark:text-primary-400"
        >
          ⚡ AI-Powered Maintenance, Zero Guesswork
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
        >
          Smart hostel maintenance,
          <br />
          <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            resolved before it escalates.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-500 sm:text-lg"
        >
          HostelAI lets students raise grievances in seconds, auto-prioritizes them with AI,
          and gives staff and owners a real-time command center — so nothing falls through the cracks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/register" className="btn-primary group px-7 py-3 text-base">
            Get Started Free
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a href="#how-it-works" className="btn-outline px-7 py-3 text-base">
            <FiPlay /> See How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
