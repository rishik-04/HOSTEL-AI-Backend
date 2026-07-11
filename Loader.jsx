import Swal from "sweetalert2";

// Thin wrapper around SweetAlert2 so the rest of the app calls one consistent API.
const baseToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (el) => {
    el.addEventListener("mouseenter", Swal.stopTimer);
    el.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const toast = {
  success: (title) => baseToast.fire({ icon: "success", title }),
  error: (title) => baseToast.fire({ icon: "error", title }),
  info: (title) => baseToast.fire({ icon: "info", title }),
  warning: (title) => baseToast.fire({ icon: "warning", title }),
};

export default toast;
