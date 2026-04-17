import { Course } from "@/src/shared/types/course";
import { cn } from "@/src/shared/lib/utils";
import Button from "@/src/shared/ui/Button";
import CalendarIcon from "@/src/shared/ui/icons/CalendarIcon";
import ArrowRightIcon from "@/src/shared/ui/icons/RightIcon";
import Image from "next/image";

function CourseCard({
  title,
  color,
  image,
  price,
  description,
  age,
  month,
}: Course) {
  return (
    <div
      className={cn("grid grid-cols-2 gap-4 rounded-2xl p-6 text-white", color)}
    >
      <div className="col-span-2 sm:col-span-1">
        <div className="flex gap-2 flex-wrap">
          <Button className="border border-white py-1! px-2! text-sm">
            {age} age
          </Button>
          <Button className="border border-white flex gap-2 items-center">
            <CalendarIcon /> {month} month
          </Button>
        </div>
        <h3 className="text-xl font-bold my-4 uppercase">{title}</h3>
        <p>{description}</p>
        <Button
          color="bg-white"
          className="mt-4 text-black px-4 py-2 rounded-lg"
        >
          {price}$ / month
        </Button>
      </div>
      <div className="flex flex-col justify-between col-span-2 sm:col-span-1 items-center">
        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="rounded-lg"
        />
        <Button className="flex items-center">
          Learn more
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
