import { FiMenu, FiBell } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { notifications } from "../../utils/mockData";

export default function DashboardTopbar({ onMenuClick, title, notifPath = "/student/notifications" }) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3.5 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80 sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden">
          <FiMenu size={20} />
        </button>
        <h1 className="text-lg font-bold sm:text-xl">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Link to={notifPath} className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
          <FiBell size={18} />
          {unread > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 text-[10px] font-bold text-white">
              {unread}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
