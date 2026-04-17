"use client";

import Button from "@/src/shared/ui/Button";
import Input from "@/src/shared/ui/Input";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Name: ${name}\nPhone: ${phone}`);
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        required
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-4xl! p-4!"
      />
      <Input
        required
        placeholder="Phone number"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-4xl! p-4!"
      />
      <Button
        color="bg-yellow-300"
        type="submit"
        className="text-black rounded-4xl! p-4! hover:bg-yellow-200"
      >
        Submit request
      </Button>
    </form>
  );
}

export default ContactForm;
