import { cn } from "@/src/shared/lib/utils";

interface InputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  className,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full rounded-lg border bg-white p-3 text-black",
        className,
      )}
    />
  );
}
