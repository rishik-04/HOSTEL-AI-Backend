export default function Loader({ full = false, label = "Loading..." }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${full ? "min-h-[60vh]" : "py-10"}`}>
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary-100 border-t-primary-600" />
      </div>
      <p className="text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}
