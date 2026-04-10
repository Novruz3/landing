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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        placeholder="Phone"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button color="bg-yellow-500" type="submit" className="text-black">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
