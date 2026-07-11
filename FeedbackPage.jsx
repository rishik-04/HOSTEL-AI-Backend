// Centralized mock/dummy data used across the app until the real backend is wired up.

export const CATEGORIES = [
  "Electrical",
  "Plumbing",
  "Carpentry",
  "Wi-Fi / Internet",
  "Housekeeping",
  "Furniture",
  "Water Supply",
  "Mess / Food",
  "Security",
  "Other",
];

export const STATUS = ["Pending", "In Progress", "Resolved", "Rejected"];
export const PRIORITY = ["Low", "Medium", "High", "Critical"];

export const complaints = [
  {
    id: "CMP-1042",
    title: "Ceiling fan not working",
    description:
      "The ceiling fan in room B-204 has stopped working completely since yesterday night. It makes a clicking noise when switched on but the blades don't rotate.",
    category: "Electrical",
    location: "Block B, Room 204",
    priority: "High",
    status: "In Progress",
    technician: "Ramesh Kumar",
    date: "2026-07-08",
    image: null,
    student: "Aditya Sharma",
    eta: "2026-07-12",
    comments: [
      { author: "Ramesh Kumar", role: "Staff", text: "Inspected the fan, capacitor needs replacement. Ordering part.", date: "2026-07-09" },
      { author: "Aditya Sharma", role: "Student", text: "Thank you, please let me know once it's fixed.", date: "2026-07-09" },
    ],
    timeline: [
      { label: "Complaint Raised", date: "2026-07-08 09:14 AM", done: true },
      { label: "Assigned to Technician", date: "2026-07-08 11:30 AM", done: true },
      { label: "In Progress", date: "2026-07-09 10:00 AM", done: true },
      { label: "Resolved", date: "Pending", done: false },
    ],
  },
  {
    id: "CMP-1041",
    title: "Leaking tap in washroom",
    description: "Common washroom tap on 2nd floor Block A is leaking continuously, wasting a lot of water.",
    category: "Plumbing",
    location: "Block A, 2nd Floor Washroom",
    priority: "Medium",
    status: "Pending",
    technician: "Unassigned",
    date: "2026-07-09",
    image: null,
    student: "Priya Verma",
    eta: "-",
    comments: [],
    timeline: [
      { label: "Complaint Raised", date: "2026-07-09 08:02 AM", done: true },
      { label: "Assigned to Technician", date: "Pending", done: false },
      { label: "In Progress", date: "Pending", done: false },
      { label: "Resolved", date: "Pending", done: false },
    ],
  },
  {
    id: "CMP-1040",
    title: "Wi-Fi extremely slow",
    description: "Internet speed in Block C has been under 1mbps for the past 3 days, affecting online classes.",
    category: "Wi-Fi / Internet",
    location: "Block C, All Floors",
    priority: "Critical",
    status: "In Progress",
    technician: "Suresh IT",
    date: "2026-07-07",
    image: null,
    student: "Rahul Nair",
    eta: "2026-07-11",
    comments: [
      { author: "Suresh IT", role: "Staff", text: "Router firmware update in progress across the block.", date: "2026-07-08" },
    ],
    timeline: [
      { label: "Complaint Raised", date: "2026-07-07 06:45 PM", done: true },
      { label: "Assigned to Technician", date: "2026-07-07 07:10 PM", done: true },
      { label: "In Progress", date: "2026-07-08 09:00 AM", done: true },
      { label: "Resolved", date: "Pending", done: false },
    ],
  },
  {
    id: "CMP-1039",
    title: "Broken study table",
    description: "The study table leg is broken and the table is unstable.",
    category: "Furniture",
    location: "Block B, Room 118",
    priority: "Low",
    status: "Resolved",
    technician: "Mahesh Carpenter",
    date: "2026-07-02",
    image: null,
    student: "Aditya Sharma",
    eta: "2026-07-04",
    comments: [
      { author: "Mahesh Carpenter", role: "Staff", text: "Replaced the leg and reinforced the joints.", date: "2026-07-04" },
    ],
    timeline: [
      { label: "Complaint Raised", date: "2026-07-02 10:00 AM", done: true },
      { label: "Assigned to Technician", date: "2026-07-02 01:00 PM", done: true },
      { label: "In Progress", date: "2026-07-03 09:00 AM", done: true },
      { label: "Resolved", date: "2026-07-04 04:20 PM", done: true },
    ],
  },
  {
    id: "CMP-1038",
    title: "Room not cleaned for a week",
    description: "Housekeeping has missed our room for over a week now.",
    category: "Housekeeping",
    location: "Block A, Room 305",
    priority: "Medium",
    status: "Rejected",
    technician: "-",
    date: "2026-06-29",
    image: null,
    student: "Priya Verma",
    eta: "-",
    comments: [{ author: "Admin", role: "Owner", text: "Duplicate of CMP-1030, already resolved.", date: "2026-06-30" }],
    timeline: [
      { label: "Complaint Raised", date: "2026-06-29 09:00 AM", done: true },
      { label: "Reviewed", date: "2026-06-30 09:00 AM", done: true },
      { label: "Rejected", date: "2026-06-30 09:15 AM", done: true },
    ],
  },
  {
    id: "CMP-1037",
    title: "Mess food quality complaint",
    description: "Food served in dinner was undercooked and cold.",
    category: "Mess / Food",
    location: "Central Mess Hall",
    priority: "High",
    status: "Resolved",
    technician: "Mess Committee",
    date: "2026-06-27",
    image: null,
    student: "Rahul Nair",
    eta: "2026-06-28",
    comments: [],
    timeline: [
      { label: "Complaint Raised", date: "2026-06-27 08:30 PM", done: true },
      { label: "Reviewed", date: "2026-06-28 09:00 AM", done: true },
      { label: "Resolved", date: "2026-06-28 12:00 PM", done: true },
    ],
  },
];

export const notifications = [
  { id: 1, type: "update", title: "Complaint CMP-1042 status updated", message: "Your complaint is now In Progress.", date: "2026-07-09 10:01 AM", read: false },
  { id: 2, type: "escalation", title: "Escalation Alert", message: "CMP-1040 has been escalated due to Critical priority.", date: "2026-07-08 07:15 PM", read: false },
  { id: 3, type: "update", title: "Complaint CMP-1039 resolved", message: "Your broken study table has been fixed.", date: "2026-07-04 04:22 PM", read: true },
  { id: 4, type: "info", title: "Scheduled Maintenance", message: "Water supply will be interrupted on Block A, 10-11 AM tomorrow.", date: "2026-07-03 05:00 PM", read: true },
  { id: 5, type: "update", title: "New comment on CMP-1042", message: "Technician left a comment on your complaint.", date: "2026-07-09 10:05 AM", read: false },
];

export const monthlyComplaintsData = [
  { month: "Jan", complaints: 42, resolved: 38 },
  { month: "Feb", complaints: 38, resolved: 35 },
  { month: "Mar", complaints: 51, resolved: 44 },
  { month: "Apr", complaints: 46, resolved: 41 },
  { month: "May", complaints: 58, resolved: 50 },
  { month: "Jun", complaints: 64, resolved: 55 },
  { month: "Jul", complaints: 35, resolved: 22 },
];

export const categoryPieData = [
  { name: "Electrical", value: 28 },
  { name: "Plumbing", value: 22 },
  { name: "Wi-Fi", value: 18 },
  { name: "Furniture", value: 12 },
  { name: "Housekeeping", value: 10 },
  { name: "Other", value: 10 },
];

export const staffList = [
  { id: 1, name: "Ramesh Kumar", role: "Electrician", assigned: 4, completed: 32 },
  { id: 2, name: "Mahesh Carpenter", role: "Carpenter", assigned: 2, completed: 27 },
  { id: 3, name: "Suresh IT", role: "IT Support", assigned: 3, completed: 19 },
];

export const currentUserByRole = {
  student: { name: "Aditya Sharma", email: "aditya.sharma@hostelai.io", role: "Student", phone: "+91 98765 43210", hostel: "Sunrise Hostel", room: "B-204", avatar: null },
  staff: { name: "Ramesh Kumar", email: "ramesh.kumar@hostelai.io", role: "Staff", phone: "+91 91234 56789", hostel: "Sunrise Hostel", room: "-", avatar: null },
  owner: { name: "Neha Kapoor", email: "neha.kapoor@hostelai.io", role: "Owner", phone: "+91 99887 66554", hostel: "Sunrise Hostel", room: "-", avatar: null },
};
