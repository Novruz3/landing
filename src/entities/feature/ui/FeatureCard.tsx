import { Feature } from "@/src/shared/types/feature";
import Image from "next/image";

function FeatureCard({ title, text, image, id }: Feature) {
  return (
    <div className="bg-blue-50 p-5 rounded-2xl grid grid-cols-5 justify-between gap-4">
      <div className="flex flex-col gap-2 col-span-3">
        <div className="flex gap-4 items-center">
          <span className="bg-blue-100 py-2 px-5 w-12 h-12 rounded-full text-xl font-semibold">
            {id}
          </span>
          <h3 className="font-semibold mb-2 uppercase text-lg">{title}</h3>
        </div>
        <p className="text-sm text-gray-600 mx-2">{text}</p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <Image src={image} alt={title} width={200} height={200} />
      </div>
    </div>
  );
}

export default FeatureCard;
