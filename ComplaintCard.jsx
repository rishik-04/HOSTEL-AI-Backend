import { FiHome, FiTwitter, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <FiHome size={18} />
              </div>
              <span className="text-lg font-extrabold">Hostel<span className="text-primary-600">AI</span></span>
            </div>
            <p className="text-sm text-slate-500">
              AI-powered smart maintenance and grievance management for modern hostels and PGs.
            </p>
            <div className="mt-4 flex gap-3">
              {[FiTwitter, FiLinkedin, FiGithub, FiMail].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-primary-500 hover:text-primary-600 dark:border-slate-700">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-primary-600">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-primary-600">How It Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary-600">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-primary-600">About</a></li>
              <li><a href="#" className="hover:text-primary-600">Careers</a></li>
              <li><a href="#" className="hover:text-primary-600">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-bold">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>support@hostelai.io</li>
              <li>+91 98765 43210</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 dark:border-slate-800 sm:flex-row">
          <p>© {new Date().getFullYear()} HostelAI. All rights reserved.</p>
          <p>Built for a hackathon, designed like production.</p>
        </div>
      </div>
    </footer>
  );
}
