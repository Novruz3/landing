import Button from "@/src/shared/ui/Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto bg-linear-to-r from-purple-600 to-indigo-500 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white max-w-md">
          <h1 className="text-3xl font-bold mb-4">
            Programming school for kids from 9 to 15 years old
          </h1>
          <p className="mb-6">We teach children programming through practice</p>
          <Button
            color="bg-yellow-400"
            className="text-black px-6 py-3 rounded-xl font-semibold"
          >
            Try for free
          </Button>
        </div>
        <Image
          src="/images/hero/hero.png"
          alt="Child learning"
          width={400}
          height={400}
          priority
          className="mt-6 md:mt-0"
        />
      </div>
    </section>
  );
}

export default Hero;
