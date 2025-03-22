import Image from "next/image";
import Card from "@/components/Card";
import StatCard from "@/components/StatCard";

const CubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10 text-primary"
  >
    <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93Zm-10.5 14.25v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
  </svg>
);

export default function Home() {
  const cardsData = [
    {
      title: "Automated Data Collection",
      description:
        "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
      icon: <CubeIcon />,
    },
    {
      title: "Monitoring & Reporting",
      description:
        "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
      icon: <CubeIcon />,
    },
    {
      title: "Monitoring & Reporting",
      description:
        "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
      icon: <CubeIcon />,
    },
    {
      title: "Simplified Certification Process",
      description:
        "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
      icon: <CubeIcon />,
    },
    {
      title: "AI-Driven Insights",
      description:
        "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
      icon: <CubeIcon />,
    },
    {
      title: "AI-Driven Insights",
      description:
        "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
      icon: <CubeIcon />,
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-10 px-4">
      {/* Features heading section */}
      <div className="uppercase text-primary mb-2 lg:text-xl font-bold py-1.5 lg:py-2.5 px-8 lg:px-14 bg-white tracking-wider max-w-max mx-auto rounded-full">
        Features
      </div>
      <h1 className="text-4xl lg:text-6xl font-bold text-center">
        Why Carbon Crunch?
      </h1>

      {/* Regular cards grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-10 lg:mt-20">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Carbon Earth with ESG Statistics Cards */}
      <div className="relative lg:mt-14">
        <div className="relative flex flex-col lg:flex-row">
          {/* Center image */}
          <div className="lg:min-w-max">
            <Image
              src="/images/carbon-earth.webp"
              alt="Earth in glass dome with pollution"
              width={838}
              height={996}
              objectFit="contain"
            />
          </div>
          <div className="relative lg:w-[35%] lg:mt-20 max-lg:space-y-4">
            <div className="lg:absolute top-20 right-0 lg:translate-x-[0%] z-[4]">
              <StatCard
                largeTextClassName="text-2xl lg:text-[86px]"
                titleClassName="text-xl lg:text-3xl"
                largeText="3X"
                title="ESG High Performers Deliver A Higher Total Shareholder Return"
                className="w-full lg:max-w-[426px] bg-primary text-3xl"
              />
            </div>

            <div className="lg:absolute top-1/3 left-0 lg:translate-x-[-52%] z-[3]">
              <StatCard
                largeTextClassName="text-2xl lg:text-[56px]"
                titleClassName="text-xl lg:text-3xl"
                largeText="98%"
                title="Of CEOs Agree Sustainability Is Their Responsibility"
                className="w-full lg:max-w-[492px] bg-[#3a3a3a] text-white"
              />
            </div>

             <div className="lg:absolute bottom-60 right-0 lg:-translate-x-[10%] z-[2]">
              <StatCard
                largeTextClassName="text-2xl lg:text-[50px]"
                titleClassName="text-xl lg:text-2xl lg:pl-4"
                largeText="18%"
                title="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
                className="w-full lg:max-w-[380px] bg-foreground text-white lg:text-right"
              />
            </div>

            <div className="lg:absolute bottom-30 left-0 lg:translate-x-[-64%] z-[1]">
              <StatCard
                largeTextClassName="text-2xl lg:text-[44px]"
                titleClassName="text-xl lg:text-2xl lg:pr-20"
                largeText="37%"
                title="Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track"
                className="w-full lg:max-w-[486px] bg-white text-primary"
              />
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
