import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  { name: "Aditya Sharma", role: "Student, Sunrise Hostel", text: "I raised a complaint about my fan at midnight and it was fixed before my first class. Genuinely didn't expect that.", rating: 5 },
  { name: "Ramesh Kumar", role: "Maintenance Staff", text: "The priority queue tells me exactly what to fix first. No more guessing which complaint is urgent.", rating: 5 },
  { name: "Neha Kapoor", role: "Hostel Owner", text: "The analytics dashboard showed us electrical issues were spiking in one block — we fixed the root cause in a week.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent-500">Testimonials</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Loved by students, staff and owners</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="mb-3 flex gap-1 text-accent-500">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <FiStar key={idx} size={15} className={idx < t.rating ? "fill-accent-500" : "fill-transparent text-slate-300"} />
                ))}
              </div>
              <p className="mb-5 text-sm text-slate-600 dark:text-slate-300">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-sm font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
