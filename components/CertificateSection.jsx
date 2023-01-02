import Image from "next/image";
import { certificateItemsOne } from "../util/constant/detail.constant";

export const Certificates = () => (
  <div className="mt-5 flex flex-col rounded-lg bg-zinc-700">
    <h3 className="m-4 text-lg font-semibold uppercase tracking-wide text-zinc-50 transition duration-300 hover:translate-x-3 hover:underline">
      Online Course Certifications
    </h3>
    <ul className="h-80 list-none space-y-1 overflow-y-auto">
      {certificateItemsOne.map(
        ({ title, logo, company, date, links, credentialId }) => (
          <li key={title}>
            <CertificateSection
              key={title}
              title={title}
              logo={logo}
              company={company}
              date={date}
              links={links}
              credentialId={credentialId}
            />
          </li>
        )
      )}
    </ul>
  </div>
);

const CertificateSection = ({
  title,
  logo,
  company,
  date,
  links,
  credentialId,
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
            href={links}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-base"
          >
            {title}
          </a>
        </div>
        <p className="text-xs font-normal text-zinc-400 lg:text-sm">
          {date} | No Expiration Date
        </p>
        <p className="text-xs font-normal text-zinc-400 lg:text-sm">
          {credentialId && `Credential ID ${credentialId}`}
        </p>
        <div className="mt-3 h-8 w-36 rounded border border-zinc-600 bg-transparent px-4 py-1 text-zinc-300 transition duration-200 ease-in hover:scale-105 hover:border-transparent hover:bg-zinc-400">
          <a href={links} target="_blank" rel="noopener noreferrer">
            Show Credential
          </a>
        </div>
      </div>
    </div>
  );
};
