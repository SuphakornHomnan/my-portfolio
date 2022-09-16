import Image from "next/image";
import { Certificates } from "./CertificateSection";
import { Experiences } from "./Experience";
import { Educations } from "./EducationSection";
import {
  languages,
  quickLinks,
  headerDetail,
  description,
  certificateItemsOne,
} from "../util/constant/detail.constant";

const AboutHeader = () => {
  return (
    <header className="flex w-full flex-wrap">
      <div className="mr 8 relative mb-8 h-52 w-full transition duration-200 ease-in hover:scale-110 sm:h-32 sm:w-32">
        <Image
          src={headerDetail.profile}
          alt={headerDetail.profileAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400 md:ml-3 lg:ml-3">
          Hello, I&apos;m a <br className="block md:hidden" />
          <span className="relative">
            <span className="text-brand-accent h-20 overflow-x-hidden whitespace-nowrap pt-2">
              {headerDetail.subtitle}
            </span>
            <span className="{`${styles.cursor} will-change-transform`} absolute -bottom-0 left-0 -top-1 inline-block w-full animate-type bg-zinc-800"></span>
          </span>
        </p>
        <h1 className="ml-0 mb-2 flex font-serif text-3xl text-zinc-50 md:ml-3 lg:ml-3 lg:text-6xl">
          {headerDetail.title} <span className="animate-waving-hand">👋🏻</span>
        </h1>
      </div>
    </header>
  );
};

const SecondParagraph = () => {
  return (
    <div className="grid grid-cols-7 gap-8">
      <div className="col-span-7 flex max-w-xl flex-col lg:col-span-3">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 transition duration-200 hover:-translate-y-1">
          About
        </h3>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
      <div className="col-span-7 flex max-w-xl flex-col lg:col-span-2">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 transition duration-200 hover:-translate-y-1">
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
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-50 transition duration-200 hover:-translate-y-1">
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
  );
};

export const About = () => {
  return (
    <section className="bg-zinc-800 p-10 lg:p-20">
      <AboutHeader />
      <SecondParagraph />
      <Educations />
      <Experiences />
      <Certificates />
      <footer className="m-5 text-center">
        <h1 className="text-sm text-zinc-400 transition duration-150 hover:scale-105 hover:text-white lg:text-base">
          Copyright © 2022 Suphakorn Homnan
        </h1>
      </footer>
    </section>
  );
};
