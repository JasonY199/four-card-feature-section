import { featuresData } from "@/data/features-data";
import Image from "next/image";

export default function FeatureCard({ type }: { type: string }) {
  return (
    <div
      className={`flex flex-col gap-8 p-8 bg-white rounded-lg border-t-4 ${featuresData[type].color} shadow-card`}
    >
      <div className="flex flex-col gap-1.5">
        <h2 className="text-preset-3">{featuresData[type].title}</h2>
        <p className="text-preset-5 text-grey-400">
          {featuresData[type].description}
        </p>
      </div>
      <Image
        src={featuresData[type].icon}
        alt=""
        width={64}
        height={64}
        className="self-end mb-[15px]"
      />
    </div>
  );
}
