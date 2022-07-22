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

  const mySkills = [
    "Design Database",
    "Implement APIs (RESTful, GraphQL)",
    "Implement a unit test with Jest",
    "Implement APIs Document (OpenAPI)",
    "Implement a Components page (React, NextJs)",
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
        description={`I'm a fullstack javascript developer in Larngear Technology, Remote work. I'm familar with a write an APIs and design a database by SQL and NoSQL but I also write a components of a landing
      webpage. I used to design a database about CRM project. I have a passionate to be a clean code and highly quality code.
      `}
        languages={languages}
        quickLinks={quickLinks}
        skills={mySkills}
      />
    </Layout>
  );
};

export default Homepage;
