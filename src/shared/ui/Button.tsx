import { cn } from "@/src/shared/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  color?: string;
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
      className={cn(
        "cursor-pointer rounded-xl px-6 py-2 font-semibold",
        color,
        className,
      )}
    >
      {children}
    </button>
  );
}
