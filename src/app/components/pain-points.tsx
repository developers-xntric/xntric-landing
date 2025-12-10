import Image from "next/image";
import PainPointsSlider from "./pain-points-slider";

interface Issue {
  id: string;
  title: string;
}

export function PainPoints({ issues, id }: { issues?: Issue[]; id?: string }) {
  const Awwards = [
    { year: "2020", icon: "/awward-1.svg" },
    { year: "2021", icon: "/awward-2.svg" },
    { year: "2022", icon: "/awward-1.svg" },
    { year: "2023", icon: "/awward-4.svg" },
    { year: "2024", icon: "/awward-5.svg" },
  ];

  const defaultIssues: Issue[] = [
    { id: "1", title: "Slow load times and poor performance" },
    { id: "2", title: "Outdated UX/UI hurting credibility" },
    { id: "3", title: "Not optimized for mobile or SEO" },
    { id: "4", title: "Low conversion rates" },
    { id: "5", title: "Security issues" },
    { id: "6", title: "Difficult to manage or scale" },
    { id: "7", title: "No multilingual or multi-location support" },
  ];

  const list = issues || defaultIssues;

  return (
    <div id={id} className="relative w-full py-24 overflow-hidden">
      {/* Background Images */}
      <div className="absolute top-[-80px] left-[-550px] -z-10">
        <Image
          alt="Left Background"
          src="/left-hero-bg.svg"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-[25px] right-[-400px] -z-10">
        <Image
          src="/right-hero-bg.svg"
          alt="Right Background"
          width={400}
          height={400}
          className="w-[85%] h-full object-cover"
        />
      </div>


      <div className="flex flex-col md:flex-row items-end justify-end 
     2xl:max-w-[1740px] mx-auto relative pr-5 md:pr-10 lg:pr-[4.9rem]">


        {/* LEFT SIDE → SLIDER (absolute) */}
        <div className="absolute left-0 bottom-0 w-[250px] md:w-[35%] lg:w-[55%]">
          <PainPointsSlider awwards={Awwards} />
        </div>

        {/* RIGHT SIDE → PAIN POINTS */}
        <div className="flex flex-col items-end space-y-4 
       w-full md:w-[60%] lg:w-[50%] ml-auto">

          {list.map((issue) => (
            <div
              key={issue.id}
              className="
          px-5 pb-5 pt-4 rounded-xl text-white text-[20px] 2xl:text-[25px]
          tracking-[2px] border-t border-b border-e border-[#FFFDFD42]
          bg-white/10 backdrop-blur-xl font-light
          w-full sm:w-[80%] md:w-[100%] lg:w-[90%]
        "
            >
              {issue.title}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
