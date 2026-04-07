import { Feature } from "@/src/shared/types/feature";
import Image from "next/image";

function FeatureCard({ title, text, image, id }: Feature) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow flex items- justify-between gap-4">
      <div className="flex gap-4 items-center">
        <span className="bg-gray-100 py-2 px-5 w-12 h-12 rounded-full text-xl font-semibold">
          {id}
        </span>
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{text}</p>
        </div>
      </div>
      <Image src={image} alt={title} width={60} height={60} />
    </div>
  );
}

export default FeatureCard;
