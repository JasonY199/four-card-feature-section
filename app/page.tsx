import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-15 py-14 px-7">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="flex flex-col text-center">
            <span className="text-preset-2">Reliable, efficient delivery</span>{" "}
            <span className="text-preset-1">Powered by Technology</span>
          </h1>
          <p className="text-preset-4 text-center">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <FeatureCard type="supervisor" />
          <FeatureCard type="team-builder" />
          <FeatureCard type="karma" />
          <FeatureCard type="calculator" />
        </div>
      </main>
    </>
  );
}
