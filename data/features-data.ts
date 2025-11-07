export type Feature = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

type FeaturesList = {
  [key: string]: Feature;
};

export const featuresData: FeaturesList = {
  supervisor: {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: "icon-supervisor.svg",
    color: "primary-cyan",
  },
  "team-builder": {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    icon: "icon-team-builder.svg",
    color: "primary-red",
  },
  karma: {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    icon: "icon-karma.svg",
    color: "primary-orange",
  },
  calculator: {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: "icon-calculator.svg",
    color: "primary-blue",
  },
};
