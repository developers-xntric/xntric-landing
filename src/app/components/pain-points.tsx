import Image from "next/image";

interface Issue {
  id: string;
  title: string;
}

interface IssuesListProps {
  issues?: Issue[];
}

export function PainPoints({
  issues,
  id,
}: IssuesListProps & { id?: string }) {
  const defaultIssues: Issue[] = [
    { id: "1", title: "Slow load times and poor performance" },
    { id: "2", title: "Outdated UX/UI hurting credibility" },
    { id: "3", title: "Not optimized for mobile or SEO" },
    { id: "4", title: "Low conversion rates" },
    { id: "5", title: "Security issues" },
    { id: "6", title: "Difficult to manage or scale" },
    { id: "7", title: "No multilingual or multi-location support" },
  ];

  const itemsToDisplay = issues || defaultIssues;

  return (
    <div id={id} className="relative w-full py-16  overflow-hidden">

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

      {/* Card List */}
      <div className="flex flex-col items-end space-y-4 overflow-hidden 2xl:max-w-[1740px] mx-auto md:w-[89%] 2xl:w-[85%]">
        {itemsToDisplay.map((issue) => (
          <div
            key={issue.id}
            className="
              px-5 pb-5 pt-4
              rounded-xl
              text-white
              text-[20px] 2xl:text-[25px]
              tracking-[2px]
              border-t border-b border-e border-[#FFFDFD42]
              bg-white/10 backdrop-blur-xl
              transition font-light
              w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[45%]
            "
          >
            {issue.title}
          </div>
        ))}
      </div>
    </div>
  );
}
