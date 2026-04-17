import ContactForm from "@/src/features/contact-form/ui/ContactForm";

function Contact() {
  return (
    <section className="py-16 bg-indigo-500 text-white max-w-6xl mx-auto rounded-4xl px-2">
      <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-6">
        <div className="col-span-5 md:col-span-3">
          <h1 className="text-3xl font-bold mb-4 uppercase">
            Don’t understand Python or Scratch?
          </h1>
          <h4 className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ea quae
            fuga sequi atque repellat architecto, minima placeat voluptatum
            numquam.
          </h4>
          <p className="font-bold">Get in touch with us</p>
        </div>
        <div className="col-span-5 md:col-span-2">
          <ContactForm />
          <p className="text-sm mx-6 mt-4 text-gray-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ea quae
            fuga sequi atque repellat architecto, minima.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
