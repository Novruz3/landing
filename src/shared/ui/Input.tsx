interface InputProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  required
  
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className="p-3 rounded-lg w-full text-black border bg-white"
    />
  );
}
