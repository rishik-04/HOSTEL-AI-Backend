import { motion } from "framer-motion";

const stats = [
  { value: "12,400+", label: "Complaints Resolved" },
  { value: "94%", label: "Resolved Within SLA" },
  { value: "3.2 hrs", label: "Avg. Response Time" },
  { value: "180+", label: "Hostels Onboarded" },
];

export default function Stats() {
  return (
    <section className="mx-auto -mt-6 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-4 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-xl shadow-primary-600/20 sm:grid-cols-4 sm:p-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-2xl font-extrabold sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs text-primary-100 sm:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
