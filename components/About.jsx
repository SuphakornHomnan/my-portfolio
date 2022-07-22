import Image from "next/image";
import { CertificateSection } from "./CertificateSection";
export const About = ({
  profile,
  profileAlt,
  subtitle,
  title,
  description,
  languages,
  quickLinks,
  skills,
}) => {
  const certifateItemsOne = [
    {
      title: "Introduction to Front-End Development",
      logo: "/coursera.png",
      company: "Coursera",
      date: "Issued by July 2022",
      links:
        "https://www.coursera.org/account/accomplishments/certificate/2ZRAWEXRYP76",
    },
    {
      title: "Programming with Javascript",
      logo: "/coursera.png",
      company: "Coursera",
      date: "Issued by July 2022",
      links:
        "https://www.coursera.org/account/accomplishments/certificate/MLKNT3K4T6NB",
    },
    {
      title: "Version Control",
      logo: "/coursera.png",
      company: "Coursera",
      date: "Issued by July 2022",
      links:
        "https://www.coursera.org/account/accomplishments/certificate/JGVJCJPNT3XT",
    },
    {
      title:
        "จัดการฐานข้อมูลอย่างมีประสิทธิภาพ พร้อมวิเคราะห์ข้อมูลที่มีในไม่กี่อึดใจด้วย SQL Command",
      logo: "/futureskill.svg",
      company: "FutureSkill",
      date: "Issued by July 2022",
      links:
        "https://drive.google.com/file/d/1craA9WJ-0H5HfkiR-_sjldqCykGDQGLh/view?usp=sharing",
    },
    {
      title: "Purpose-built-Database",
      logo: "/skooldio.jpeg",
      company: "Skooldio",
      date: "Issued by July 2022",
      links:
        "https://www.skooldio.com/certificate/1711bdb7-6318-4bf1-ab84-48ec61eb8ff6",
    },
    {
      title: "How to become a better programmer",
      logo: "/skooldio.jpeg",
      company: "Skooldio",
      date: "Issued by July 2022",
      links:
        "https://www.skooldio.com/certificate/734363fe-54b1-440e-83b9-ee6b2ad4423d",
    },
  ];
  const educationItems = {
    header: [
      {
        className:
          "text-zinc-400 transition duration-200 hover:text-zinc-300 hover:translate-x-1",
        value: "Chaing Mai University",
      },
      {
        className:
          "text-sm text-zinc-500 transition duration-200 hover:text-zinc-400 hover:translate-x-1",
        value: "Bachelor of Engineering (Computer Engineering)",
      },
      {
        className:
          "text-zinc-400 transition duration-200 hover:text-zinc-300 hover:translate-x-1",
        value: "Assumption College Lampang",
      },
      {
        className:
          "text-sm text-zinc-500 transition duration-200 hover:text-zinc-400 hover:translate-x-1",
        value: "Math-Science room",
      },
    ],
    detail: [
      {
        className: "text-xs text-zinc-400 text-[#FFA65C]",
        value: "GPA 2.98",
      },
      {
        className: "mt-2 text-xs text-zinc-400 text-[#FFA65C]",
        value: "2017-2021",
      },
      {
        className: "mt-2 text-xs text-zinc-400 text-[#FFA65C]",
        value: "GPA 3.38",
      },
      {
        className: "mt-2 text-xs text-zinc-400 text-[#FFA65C]",
        value: "2015-2017",
      },
    ],
  };

  return (
    <section className="bg-zinc-800 p-10 lg:p-20">
      <header className="flex w-full flex-wrap">
        <div className="mr 8 relative mb-8 h-32 w-32 transition duration-200 ease-in hover:scale-110">
          <Image
            src={profile}
            alt={profileAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div>
          <p className="ml-5 mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Hello, I'm a <br className="block md:hidden" />
            <span className="relative">
              <span className="text-brand-accent h-20 overflow-x-hidden whitespace-nowrap pt-2">
                {subtitle}
              </span>
              <span className="{`${styles.cursor} will-change-transform`} absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-zinc-800"></span>
            </span>
          </p>
          <h1 className="ml-5 flex font-serif text-4xl text-zinc-50 lg:text-6xl">
            {title} <span className="animate-waving-hand">👋🏻</span>
          </h1>
        </div>
      </header>
      <div className="grid grid-cols-7 gap-8">
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-3">
          <h3 className="trasition mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 duration-200 hover:-translate-y-1">
            About
          </h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
          <h3 className="trasition mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 duration-200 hover:-translate-y-1">
            Computer Languages
          </h3>
          <ul className="list-none space-y-1">
            {languages.map((lang) => (
              <li
                key={lang}
                className="text-sm text-zinc-400 transition duration-200 hover:translate-x-1 hover:text-zinc-300"
              >
                {lang}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
          <h3 className="trasition mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 duration-200 hover:-translate-y-1">
            Quick Links
          </h3>
          <ul className="list-none space-y-1">
            {quickLinks.map((link) => (
              <li
                key={link.text}
                className="text-sm text-[#fbbf80] transition duration-300 hover:translate-x-3 hover:underline"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-8">
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-3">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 transition duration-200 hover:-translate-y-1">
            Experiences
          </h3>
          <ul className="list-none space-y-1">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-zinc-400 transition duration-200 hover:translate-x-1 hover:text-zinc-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 transition duration-200 hover:-translate-y-1">
            Education
          </h3>
          <ul className="list-none space-y-1">
            {educationItems.header.map((each) => (
              <li className={each.className}>{each.value}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
          <ul className="mt-11">
            {educationItems.detail.map((each) => (
              <li
                className={
                  each.className +
                  " transition duration-200 hover:-translate-y-0.5"
                }
              >
                {each.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-5 flex flex-col rounded-lg bg-zinc-700">
        <h3 className="m-4 text-lg font-semibold uppercase tracking-wide text-zinc-50 transition duration-300 hover:translate-x-3 hover:underline">
          Certifications
        </h3>
        <ul className="h-80 list-none space-y-1 overflow-y-auto">
          {certifateItemsOne.map(({ title, logo, company, date, links }) => (
            <li>
              <CertificateSection
                key={title}
                title={title}
                logo={logo}
                company={company}
                date={date}
                links={links}
              />
            </li>
          ))}
        </ul>
      </div>
      <footer className="m-5 text-center">
        <h1 className="text-zinc-400 transition duration-150 hover:scale-105 hover:text-white">
          Copyright © 2022 Suphakorn Homnan
        </h1>
      </footer>
    </section>
  );
};
