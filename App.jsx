import { FiMapPin, FiClock, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";

export default function ComplaintCard({ complaint, basePath = "/student/details" }) {
  return (
    <Link
      to={`${basePath}/${complaint.id}`}
      className="card flex flex-col gap-3 p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-primary-600">{complaint.id}</p>
          <h4 className="font-semibold text-slate-800 dark:text-slate-100">{complaint.title}</h4>
        </div>
        <StatusBadge value={complaint.priority} />
      </div>
      <p className="line-clamp-2 text-sm text-slate-500">{complaint.description}</p>
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-1"><FiMapPin size={13} /> {complaint.location}</span>
        <span className="flex items-center gap-1"><FiClock size={13} /> {complaint.date}</span>
        <span className="flex items-center gap-1"><FiUser size={13} /> {complaint.technician}</span>
      </div>
      <div className="flex items-center justify-between pt-1">
        <StatusBadge value={complaint.status} />
        <span className="text-xs font-semibold text-slate-400">{complaint.category}</span>
      </div>
    </Link>
  );
}
