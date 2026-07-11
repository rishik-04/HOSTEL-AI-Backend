import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 px-8 py-16 text-center text-white shadow-xl"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.15)_1px,transparent_0)] [background-size:24px_24px]" />
        <h2 className="relative text-3xl font-extrabold sm:text-4xl">Ready to modernize your hostel?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-100">
          Join hundreds of hostels already using HostelAI to resolve grievances faster and keep residents happy.
        </p>
        <div className="relative mt-8">
          <Link to="/register" className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-base font-semibold text-primary-700 shadow-lg transition-transform hover:scale-105">
            Create Free Account <FiArrowRight />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
