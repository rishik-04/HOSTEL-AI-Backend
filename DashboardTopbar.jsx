const variants = {
  primary: "btn-primary",
  accent: "btn-accent",
  outline: "btn-outline",
};

export default function Button({ children, variant = "primary", className = "", loading = false, ...props }) {
  return (
    <button className={`${variants[variant]} ${className}`} disabled={loading || props.disabled} {...props}>
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {children}
    </button>
  );
}
