import { Layout, About } from "../components";
const Homepage = () => {
  const languages = [
    "Javascript",
    "Typescript",
    "Python",
    "C,C++",
    "GO",
    "SQL",
  ];
  const quickLinks = [
    {
      text: "Github",
      href: "https://github.com/SuphakornHomnan",
    },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/suphakorn-homnan-26053b210",
    },
    { text: "Email", href: "mailto:supakornhomnan@gmail.com" },
  ];

  return (
    <Layout>
      <About
        profile="/me.jpeg"
        profileAlt="Nice"
        subtitle="Fullstack Developer"
        title="Suphakorn Homnan"
        description={`I'm a fullstack javascript developer in Larngear Technology co. at Bangkok, I'm a remotely work. My expertise is writing an APIs, Design the database by SQL and NoSQL and write a components of a landing
      webpage as well. Recently, I used to design a database about CRM project to my old company. I've a passionate to be a clean code, highly quality code and improve myself when I'm free.
      `}
        languages={languages}
        quickLinks={quickLinks}
      />
    </Layout>
  );
};

export default Homepage;
