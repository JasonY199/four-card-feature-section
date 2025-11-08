import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-15 py-14 px-7">
        <div className="flex flex-col gap-4 items-center max-w-[316px] md:max-w-[540px] mx-auto">
          <h1 className="flex flex-col text-center">
            <span className="text-preset-2">Reliable, efficient delivery</span>{" "}
            <span className="text-preset-1">Powered by Technology</span>
          </h1>
          <p className="text-preset-4 text-center">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  justify-items-center">
          <FeatureCard
            type="supervisor"
            className="md:row-start-2 md:col-start-1 md:justify-self-end"
          />
          <FeatureCard
            type="team-builder"
            className="md:row-start-1 md:col-span-2"
          />
          <FeatureCard
            type="karma"
            className="md:row-start-2 md:col-start-2 md:justify-self-start"
          />
          <FeatureCard
            type="calculator"
            className="md:row-start-3 md:col-span-2"
          />
        </div>
      </main>
    </>
  );
}
