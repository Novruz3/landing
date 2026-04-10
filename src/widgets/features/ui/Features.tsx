import { features } from "@/src/entities/feature/model/features.data";
import FeatureCard from "@/src/entities/feature/ui/FeatureCard";

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <h1 className="max-w-6xl mx-auto text-center text-3xl font-semibold mb-8">
        Check out our courses
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
