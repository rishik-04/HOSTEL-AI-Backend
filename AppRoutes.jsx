import { useState } from "react";
import { FiCamera } from "react-icons/fi";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import { toast } from "../components/common/Toast";
import { currentUserByRole } from "../utils/mockData";
import { useAuth } from "../contexts/AuthContext";

export default function ProfilePage() {
  const { user: authUser } = useAuth();
  const role = authUser?.role || "student";
  const [form, setForm] = useState(currentUserByRole[role] || currentUserByRole.student);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    toast.success("Profile updated successfully");
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-extrabold">Your Profile</h2>
        <p className="text-sm text-slate-500">Update your personal information.</p>
      </div>

      <div className="card p-6 sm:p-8">
        <div className="mb-6 flex flex-col items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-2xl font-bold text-white">
              {form.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <button type="button" className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white shadow-md">
              <FiCamera size={14} />
            </button>
          </div>
          <p className="mt-3 text-sm font-semibold text-primary-600">{form.role}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input label="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Input label="Hostel" value={form.hostel} onChange={(e) => setForm({ ...form, hostel: e.target.value })} />
          </div>
          {form.room !== "-" && (
            <Input label="Room Number" value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })} />
          )}
          <div>
            <label className="label">Role</label>
            <input disabled value={form.role} className="input-field cursor-not-allowed bg-slate-50 dark:bg-slate-800" />
          </div>
          <Button type="submit" loading={loading} className="w-full">Save Changes</Button>
        </form>
      </div>
    </div>
  );
}
