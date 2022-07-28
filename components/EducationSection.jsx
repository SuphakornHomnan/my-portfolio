import Image from "next/image";
import { convertDateTime } from "../util/handle-date";

export const EducationMain = () => {
  const infoList = [
    {
      logo: "/cmu.png",
      title: "Chiang Mai University",
      degree: "Bachelor of Engineering - BE, Computer Engineering",
      startDate: "2017-08",
      endDate: "2021-04",
      grade: 2.98,
    },
    {
      logo: "/acl.png",
      title: "Assumption College Lampang",
      degree: "High School",
      startDate: "2014-05",
      endDate: "2017-02",
      grade: 3.38,
    },
  ];
  return (
    <div className="mt-5 flex flex-col rounded-lg bg-zinc-700">
      <h3 className="m-4 text-lg font-semibold uppercase tracking-wide text-zinc-50 transition duration-300 hover:translate-x-3 hover:underline">
        Education
      </h3>
      <div className="h-80 list-none space-y-1 overflow-y-auto">
        {infoList.map(({ logo, title, degree, startDate, endDate, grade }) => (
          <div key={title}>
            <EducationSection
              logo={logo}
              title={title}
              degree={degree}
              startDate={startDate}
              endDate={endDate}
              grade={grade}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const EducationSection = ({
  logo,
  title,
  degree,
  startDate,
  endDate,
  grade,
}) => {
  return (
    <div className="ml-5 flex flex-row p-1 lg:p-2">
      <div className="relative h-14 w-1/5 transition duration-200 ease-in hover:scale-110 md:h-16 md:w-16 lg:h-20 lg:w-20">
        <Image
          src={logo}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="ml-2 w-4/5">
        <div className="trasition font-medium text-zinc-50 duration-200 hover:-translate-y-0.5 hover:text-[#3EC2EC]">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-base"
          >
            {title}
          </a>
        </div>
        <p className="text-xs text-zinc-50 lg:text-sm">{degree}</p>
        <p className="text-xs text-[#D2DADE] lg:text-sm">
          {convertDateTime(startDate, endDate)}
        </p>
        <p className="text-xs text-zinc-50 lg:text-sm">Grade: {grade}</p>
      </div>
    </div>
  );
};
