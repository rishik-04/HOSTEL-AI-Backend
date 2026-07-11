import axios from "axios";
import {
  complaints as mockComplaints,
  notifications as mockNotifications,
} from "../utils/mockData";

// Central Axios instance — point baseURL at your real backend when ready.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.hostelai.io/v1",
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("hostelai-token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

/**
 * All functions below are placeholders wired to mock data so the UI is fully
 * demoable without a backend. Swap the mock branch for the axios call once
 * real endpoints exist — the function signatures are designed to match.
 */

// ---------- AUTH ----------
export async function login({ email, password, role }) {
  await delay();
  // return apiClient.post("/auth/login", { email, password, role });
  return { success: true, user: { email, role, name: email.split("@")[0] }, token: "mock-token" };
}

export async function register(payload) {
  await delay();
  // return apiClient.post("/auth/register", payload);
  return { success: true, message: "Registration successful. Please login." };
}

// ---------- COMPLAINTS ----------
export async function getComplaints(filters = {}) {
  await delay();
  // return apiClient.get("/complaints", { params: filters });
  return { success: true, data: mockComplaints };
}

export async function getComplaintById(id) {
  await delay(300);
  // return apiClient.get(`/complaints/${id}`);
  return { success: true, data: mockComplaints.find((c) => c.id === id) || null };
}

export async function createComplaint(payload) {
  await delay();
  // return apiClient.post("/complaints", payload);
  return { success: true, message: "Complaint submitted successfully", id: `CMP-${Math.floor(1000 + Math.random() * 9000)}` };
}

export async function updateComplaint(id, payload) {
  await delay();
  // return apiClient.patch(`/complaints/${id}`, payload);
  return { success: true, message: `Complaint ${id} updated` };
}

// ---------- NOTIFICATIONS ----------
export async function getNotifications() {
  await delay(300);
  // return apiClient.get("/notifications");
  return { success: true, data: mockNotifications };
}

// ---------- FEEDBACK ----------
export async function submitFeedback(payload) {
  await delay();
  // return apiClient.post("/feedback", payload);
  return { success: true, message: "Thank you for your feedback!" };
}

export default {
  login,
  register,
  getComplaints,
  getComplaintById,
  createComplaint,
  updateComplaint,
  getNotifications,
  submitFeedback,
};
