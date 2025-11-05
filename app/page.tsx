import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <h1>
            Reliable, efficient delivery <span>Powered by Technology</span>
          </h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div>
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </main>
    </>
  );
}
