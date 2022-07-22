import Image from "next/image";
export const CertificateSection = ({ title, logo, company, date, links }) => {
  return (
    <div className="ml-5 flex flex-row p-1 lg:p-2">
      <div className="relative h-16 w-16 transition duration-200 ease-in hover:scale-110">
        <Image
          src={logo}
          alt={company}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="ml-2">
        <div className="trasition font-medium text-zinc-50 duration-200 hover:-translate-y-0.5 hover:text-[#3EC2EC]">
          <a href={links} target="_blank">
            {title}
          </a>
        </div>
        <p className="text-sm font-normal text-zinc-50">
          {date} | No Expiration Date
        </p>
        <div className="mt-3 w-36 rounded border border-zinc-600 bg-transparent px-4 py-2.5 text-zinc-300 transition duration-200 ease-in hover:scale-105 hover:border-transparent hover:bg-zinc-400">
          <a href={links} target="_blank" rel="noopener noreferrer">
            Show Credential
          </a>
        </div>
      </div>
    </div>
  );
};
