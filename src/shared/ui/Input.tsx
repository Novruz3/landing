interface InputProps {
  type?: string;
  placeholder?: string;
}

export default function Input({
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-3 rounded-lg w-full text-black border bg-white"
    />
  );
}
