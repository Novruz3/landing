"use client";

import Button from "@/src/shared/ui/Button";
import Input from "@/src/shared/ui/Input";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <form className="flex flex-col gap-4">
      <Input placeholder="Adyňyz" />
      <Input placeholder="Telefon" />
      <Button type="submit" color="bg-yellow-400" className="text-black">
        Iber
      </Button>
    </form>
  );
}

export default ContactForm;
