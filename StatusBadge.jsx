import { FiAlertTriangle } from "react-icons/fi";
import Button from "./Button";

export default function ErrorState({ message = "Something went wrong. Please try again.", onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-rose-300 dark:border-rose-800 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 dark:bg-rose-500/10">
        <FiAlertTriangle size={26} />
      </div>
      <h3 className="text-base font-semibold text-slate-700 dark:text-slate-200">We hit a snag</h3>
      <p className="mt-1 max-w-sm text-sm text-slate-500">{message}</p>
      {onRetry && (
        <div className="mt-4">
          <Button variant="outline" onClick={onRetry}>Try again</Button>
        </div>
      )}
    </div>
  );
}
