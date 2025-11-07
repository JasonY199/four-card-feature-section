import { featuresData } from "@/data/features-data";
import Image from "next/image";

export default function FeatureCard({ type }: { type: string }) {
  return (
    <div>
      <div>
        <h2>{featuresData[type].title}</h2>
        <p>{featuresData[type].description}</p>
      </div>
      <Image src={featuresData[type].icon} alt="" width={64} height={64} />
    </div>
  );
}
