import Image from "next/image";
import { convertDateTime } from "../util/handle-date";
import { experiencesInfo } from "../util/constant/detail.constant";
export const Experiences = () => {
  return (
    <div className="mt-5 flex flex-col rounded-lg bg-zinc-700">
      <h3 className="m-4 text-lg font-semibold uppercase tracking-wide text-zinc-50 transition duration-300 hover:translate-x-3 hover:underline">
        Experience
      </h3>
      <div className="h-80 list-none space-y-1 overflow-y-auto">
        {experiencesInfo.map(
          ({
            img,
            position,
            company,
            startDate,
            endDate,
            location,
            jobDescription,
            skills,
            link,
          }) => (
            <div key={company}>
              <ExperienceSection
                img={img}
                position={position}
                company={company}
                startDate={startDate}
                endDate={endDate}
                location={location}
                jobDescription={jobDescription}
                skills={skills}
                link={link}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

const ExperienceSection = ({
  img,
  position,
  company,
  startDate,
  endDate,
  location,
  jobDescription,
  skills,
  link,
}) => {
  return (
    <div className="ml-5 flex flex-row p-1 lg:p-2">
      <div className="relative h-14 w-1/5 transition duration-200 ease-in hover:scale-110 md:h-16 md:w-16 lg:h-20 lg:w-20">
        <Image
          src={img}
          alt={company}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="ml-2 w-4/5">
        <div className="trasition font-medium text-zinc-50 duration-200 hover:-translate-y-0.5 hover:text-[#3EC2EC]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-base"
          >
            {position}
          </a>
        </div>
        <p className="text-xs text-zinc-50 lg:text-sm">{company}</p>
        <p className="text-xs text-[#D2DADE] lg:text-sm">
          {convertDateTime(startDate, endDate)}
        </p>
        <p className="text-xs text-[#D2DADE] lg:text-sm">{location}</p>
        <ul className="mt-2 text-sm text-[#D2DADE] lg:text-base">
          Job Description
          {jobDescription.map((each) => (
            <li key={each} className="text-xs text-zinc-50 lg:text-sm">
              - {each}
            </li>
          ))}
        </ul>
        <p className="mt-1.5 text-sm font-bold text-zinc-50 lg:mt-2 lg:text-base">
          Skills:{" "}
          <span className="text-xs font-thin lg:text-sm lg:font-normal">
            {skills}
          </span>
        </p>
      </div>
    </div>
  );
};
