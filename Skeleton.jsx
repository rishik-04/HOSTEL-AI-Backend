import { motion } from "framer-motion";
import { FiEdit3, FiCpu, FiTool, FiCheckCircle } from "react-icons/fi";

const steps = [
  { icon: FiEdit3, title: "Raise a Complaint", desc: "Student logs an issue with category, location and a photo in under a minute." },
  { icon: FiCpu, title: "AI Prioritizes It", desc: "The system analyzes severity and category to assign the right priority automatically." },
  { icon: FiTool, title: "Staff Takes Action", desc: "The nearest available technician is notified, accepts, and starts work." },
  { icon: FiCheckCircle, title: "Resolved & Verified", desc: "Completion photo is uploaded and the student confirms with feedback." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-500">Process</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">How HostelAI works</h2>
        </div>

        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-accent-400 lg:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-md ring-4 ring-slate-50 dark:bg-slate-900 dark:ring-slate-900">
                <s.icon size={26} />
              </div>
              <span className="mb-1 text-xs font-bold text-accent-500">STEP {i + 1}</span>
              <h3 className="mb-2 text-base font-bold">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
