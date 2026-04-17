import Button from "@/src/shared/ui/Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="pt-2 pb-8">
      <div
        className="max-w-7xl py-12 mx-auto bg-linear-to-r
      from-purple-600 to-indigo-500 rounded-xl
      lg:rounded-t-[64px] lg:rounded-bl-[86px] lg:rounded-br-[130px]
      overflow-hidden flex flex-col md:flex-row items-center justify-between 
      relative lg:[clip-path:polygon(0_0,100%_0,98%_90%,2%_99%)]"
      >
        <div className="text-white max-w-xl px-10 md:px-16 py-8 z-10">
          <Button className="border border-white mb-6 flex">Online</Button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight uppercase">
            Programming school for children{" "}
            <span className="relative inline-block">
              aged 9 to 15
              <span className="absolute left-0 -bottom-2 w-full h-2 bg-white -z-10 -rotate-2 rounded"></span>
            </span>
          </h1>
          <div className="flex gap-4 mb-8 text-sm opacity-90 font-semibold">
            <span className="flex items-start gap-2 ">
              <span className="text-4xl font-bold text-amber-200">+</span>
              We teach your child programming through hands-on lessons
            </span>
            <span className="flex items-start gap-2">
              <span className="text-4xl font-bold text-amber-200">+</span>
              Each lesson takes place in groups of 2 to 6 students
            </span>
          </div>
          <Button
            color="bg-yellow-400"
            className="text-black px-8 py-4 rounded-full! font-bold hover:bg-yellow-300 transition-colors uppercase text-sm tracking-wide"
          >
            Try for free
          </Button>
        </div>
        <div className="relative lg:absolute lg:right-10 lg:bottom-0">
          <div className="hidden lg:flex absolute top-10 left-20 w-24 h-24 bg-white rounded-full items-center justify-center">
            <p className="font-semibold">Hello 😊</p>
          </div>
          <div className="hidden lg:block absolute top-32 left-38 w-3 h-3 bg-white rounded-full"></div>
          <Image
            src="/images/hero/heroo.webp"
            alt="Child learning"
            width={500}
            height={500}
            priority
            className="object-contain relative z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
