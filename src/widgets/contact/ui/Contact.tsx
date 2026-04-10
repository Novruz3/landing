import ContactForm from "@/src/features/contact-form/ui/ContactForm";

function Contact() {
  return (
    <section className="py-16 bg-purple-600 text-white max-w-6xl mx-auto rounded-3xl px-2">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <h4 className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ea quae
            fuga sequi atque repellat architecto, minima placeat voluptatum
            numquam.
          </h4>
          <p className="font-bold">Get in touch with us</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
