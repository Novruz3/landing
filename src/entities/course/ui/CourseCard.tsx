import { Course } from "@/src/shared/types/course";
import Button from "@/src/shared/ui/Button";
import Image from "next/image";

function CourseCard({ title, color, image, price, description }: Course) {
  return (
    <div className={`p-6 rounded-2xl text-white ${color} flex`}>
      <div>
        <h3 className="text-lg font-bold mb-4">{title}</h3>
        <p>{description}</p>
        <Button
          color="bg-white"
          className="mt-4 text-black px-4 py-2 rounded-lg"
        >
          {price}$
        </Button>
      </div>
      <div>
        <Image
          src={image}
          alt={title}
          width={200}
          height={150}
          className="rounded-lg"
        />
        <Button>Подробнее</Button>
      </div>
    </div>
  );
}

export default CourseCard;
