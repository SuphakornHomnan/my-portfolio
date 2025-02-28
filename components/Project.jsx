import Image from "next/image";
import { DescriptionExpand } from "../util/text-expand";
import { projectsInfo } from "../util/constant/detail.constant";

export const Projects = () => (
  <div className="mt-5 flex flex-col rounded-lg bg-zinc-700">
    <h3 className="m-4 text-lg font-semibold uppercase tracking-wide text-zinc-50 transition duration-300 hover:translate-x-3 hover:underline">
      Project
    </h3>
    <div className="h-auto list-none space-y-1 overflow-y-auto">
      {projectsInfo.map(
        ({
          title,
          logo,
          company,
          startDate,
          endDate,
          description,
          skills,
          link,
        }) => (
          <div key={company}>
            <ProjectSection
              title={title}
              logo={logo}
              company={company}
              startDate={startDate}
              endDate={endDate}
              description={description}
              skills={skills}
              link={link}
            />
          </div>
        )
      )}
    </div>
  </div>
);

const ProjectSection = ({
  title,
  logo,
  company,
  startDate,
  endDate,
  description,
  skills,
  link,
}) => {
  return (
    <div className="ml-5 flex flex-row p-1 lg:p-2">
      <div className="relative h-14 w-1/5 transition duration-200 ease-in hover:scale-110 md:h-16 md:w-16 lg:h-20 lg:w-20">
        <Image
          src={logo}
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
            {title}
          </a>
        </div>
        <p className="text-xs text-zinc-50 lg:text-sm">{company}</p>
        {description && (
          <div className="text-xs text-zinc-50 lg:text-sm">
            <DescriptionExpand description={description} />
          </div>
        )}

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
