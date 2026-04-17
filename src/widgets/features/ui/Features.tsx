import { features } from "@/src/entities/feature/model/features.data";
import FeatureCard from "@/src/entities/feature/ui/FeatureCard";
import Image from "next/image";

function Features() {
  return (
    <section className="py-16 mx-2">
      <h1 className="max-w-xl mx-auto text-center text-3xl font-semibold mb-8 uppercase">
        With us, children develop in several areas
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-6">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
      <div className="max-w-6xl bg-blue-50 grid grid-cols-2 mx-auto p-3 rounded-2xl gap-6">
        <div className="md:col-span-1 col-span-2 flex gap-8 items-center">
          <Image
            src="/images/course/gold.webp"
            alt="Price"
            width={120}
            height={120}
          />
          <h1 className="uppercase font-semibold">
            Additionally, children learn a перспективный (promising) profession
          </h1>
        </div>
        <div className="flex items-center md:col-span-1 col-span-2">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum alias
            illoamet omnis eligendi quam, inventore Rerum alias illoamet omnis
            eligendi quam, inventore Rerum alias illoamet omnis eligendi quam,
            inventore
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
