import { courses } from "@/src/entities/course/model/courses.data";
import CourseCard from "@/src/entities/course/ui/CourseCard";

function Programs() {
  return (
    <section className="py-16">
      <h1 className="max-w-6xl mx-auto text-center text-3xl font-semibold mb-8">
        Our Programs
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 px-2">
        {courses.map((item, index) => (
          <CourseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Programs;
