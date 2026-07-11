import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

export default function Logo({ to = "/" }) {
  return (
    <Link to={to} className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-sm">
        <FiHome size={18} />
      </div>
      <span className="text-lg font-extrabold tracking-tight">
        Hostel<span className="text-primary-600">AI</span>
      </span>
    </Link>
  );
}
