import {
  FiGrid,
  FiPlusCircle,
  FiClock,
  FiBell,
  FiUser,
  FiSettings,
  FiClipboard,
  FiPieChart,
  FiMessageSquare,
} from "react-icons/fi";

export const studentLinks = [
  { to: "/student/dashboard", label: "Dashboard", icon: FiGrid, end: true },
  { to: "/student/complaint", label: "Raise Complaint", icon: FiPlusCircle },
  { to: "/student/history", label: "Complaint History", icon: FiClock },
  { to: "/student/notifications", label: "Notifications", icon: FiBell },
  { to: "/feedback", label: "Feedback", icon: FiMessageSquare },
  { to: "/student/profile", label: "Profile", icon: FiUser },
  { to: "/student/settings", label: "Settings", icon: FiSettings },
];

export const staffLinks = [
  { to: "/staff/dashboard", label: "Dashboard", icon: FiGrid, end: true },
  { to: "/student/notifications", label: "Notifications", icon: FiBell },
  { to: "/student/profile", label: "Profile", icon: FiUser },
  { to: "/student/settings", label: "Settings", icon: FiSettings },
];

export const ownerLinks = [
  { to: "/owner/dashboard", label: "Dashboard", icon: FiGrid, end: true },
  { to: "/student/notifications", label: "Notifications", icon: FiBell },
  { to: "/student/profile", label: "Profile", icon: FiUser },
  { to: "/student/settings", label: "Settings", icon: FiSettings },
];
