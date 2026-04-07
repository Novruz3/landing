import CourseCard from "@/src/entities/course/ui/CourseCard";

const courses = [
  {
    title: "Kids Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores iusto vero rem. Odit, explicabo?",
    color: "bg-purple-500",
    image: "/images/course/course.jpg",
    price: 1500,
  },
  {
    title: "Middle Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores iusto vero rem. Odit, explicabo?",
    color: "bg-orange-400",
    image: "/images/course/course.jpg",
    price: 2000,
  },
  {
    title: "Super Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores iusto vero rem. Odit, explicabo?",
    color: "bg-green-500",
    image: "/images/course/course.jpg",
    price: 2500,
  },
  {
    title: "Expert Course",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolores iusto vero rem. Odit, explicabo?",
    color: "bg-indigo-500",
    image: "/images/course/course.jpg",
    price: 3000,
  },
];

function Programs() {
  return (
    <section className="py-16">
      <h1 className="max-w-6xl mx-auto text-center text-3xl font-semibold mb-6">
        Bu yerde birnace kurslarymyzy gorip bilersiniz
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {courses.map((item, index) => (
          <CourseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Programs;
