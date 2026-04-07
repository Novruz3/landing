import FeatureCard from "@/src/entities/feature/ui/FeatureCard";

const features = [
  {
    title: "Программирование",
    text: "Учимся писать код",
    image: "/images/course/course.jpg",
    id: 1,
  },
  {
    title: "Логика",
    text: "Развиваем мышление",
    image: "/images/course/course.jpg",
    id: 2,
  },
  {
    title: "Английский",
    text: "Учим IT язык",
    image: "/images/course/course.jpg",
    id: 3,
  },
  {
    title: "Успеваемость",
    text: "Лучше учатся",
    image: "/images/course/course.jpg",
    id: 4,
  },
];

function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <h1 className="max-w-6xl mx-auto text-center text-3xl font-semibold mb-6">
        Bu yerde birnace kurslarymyzy gorip bilersiniz
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
