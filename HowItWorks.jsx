import { motion } from "framer-motion";
import { FiZap, FiBarChart2, FiBell, FiShield, FiCamera, FiClock } from "react-icons/fi";

const features = [
  { icon: FiZap, title: "AI Priority Detection", desc: "Complaints are automatically triaged by urgency so critical issues never wait in line." },
  { icon: FiCamera, title: "Photo Evidence", desc: "Students attach photos, staff upload proof of completion — full visual trail." },
  { icon: FiBell, title: "Real-Time Alerts", desc: "Status changes, escalations and resolutions land instantly via notifications." },
  { icon: FiBarChart2, title: "Owner Analytics", desc: "Category breakdowns and monthly trends give owners a bird's-eye view of hostel health." },
  { icon: FiClock, title: "SLA Tracking", desc: "Every complaint carries a resolution ETA so accountability is built in, not bolted on." },
  { icon: FiShield, title: "Role-Based Access", desc: "Students, staff and owners each get a purpose-built workspace with the right permissions." },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-500">Features</p>
        <h2 className="text-3xl font-extrabold sm:text-4xl">Everything a hostel needs, in one dashboard</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="card group p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-500/10 dark:text-primary-400">
              <f.icon size={22} />
            </div>
            <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
            <p className="text-sm text-slate-500">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
