interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  color? : string
}

export default function Button({
  children,
  className = "",
  type = "button",
  color,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-xl font-semibold cursor-pointer ${color} ${className}`}
    >
      {children}
    </button>
  );
}
