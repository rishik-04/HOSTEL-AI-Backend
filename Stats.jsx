import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiTrendingUp } from "react-icons/fi";

const points = [
  { icon: FiTarget, title: "Our Mission", desc: "Make hostel life friction-free by closing the loop between students, staff and owners." },
  { icon: FiUsers, title: "Built For Everyone", desc: "Purpose-built workspaces for students, maintenance staff and hostel owners alike." },
  { icon: FiTrendingUp, title: "Data-Driven", desc: "Every resolved complaint feeds analytics that help owners prevent repeat issues." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-500">About HostelAI</p>
          <h2 className="mb-5 text-3xl font-extrabold sm:text-4xl">
            We built the maintenance system hostels actually deserve
          </h2>
          <p className="mb-6 text-slate-500">
            Most hostels still track complaints on paper registers or WhatsApp groups that disappear into
            scroll oblivion. HostelAI replaces that chaos with a single source of truth — searchable,
            trackable, and smart enough to know a burst pipe matters more than a squeaky door.
          </p>
          <div className="space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                  <p.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold">{p.title}</h4>
                  <p className="text-sm text-slate-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="card overflow-hidden p-2">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white">
                <p className="text-3xl font-extrabold">94%</p>
                <p className="text-sm text-primary-100">Complaints resolved within SLA window</p>
              </div>
              <div className="rounded-xl bg-accent-50 p-5 dark:bg-accent-500/10">
                <p className="text-2xl font-extrabold text-accent-600">3.2h</p>
                <p className="text-xs text-slate-500">Avg first response</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-5 dark:bg-slate-800">
                <p className="text-2xl font-extrabold">180+</p>
                <p className="text-xs text-slate-500">Hostels onboarded</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
