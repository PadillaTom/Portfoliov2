/*
:::::::::::::::::::
  --> DATA <-- 
:::::::::::::::::::
*/
import { AiOutlineGithub } from "react-icons/ai";

import kb from "../Assets/Images/Projects/KampaiBoutique.jpg";
import tp from "../Assets/Images/Projects/TPFinal.png";

export const workDetails = [
  {
    id: 1,
    right: true,
    slug: "kampai-boutique",
    title: "Kampai Boutique",
    workImg: kb,
    client: "Kampai Boutique",
    location: "Geneva, Switzerland",
    launch: "2021",
    live: "https://kampaiboutique.ch/",
    liveInsta: "https://www.instagram.com/kampaiboutique/",
    code: null,
    desc: `Website and Instagram Campaign for a well-kown Interior Designer and
            Architect. Located in Geneva the goal is to showcase previous
            works and to dynamically change the Collections as needed.`,
    stack: `Wordpress | Avada Builder | Photoshop | Illustrator | InDesign | Facebook Business Manager`,
    nextWork: "TP Final Fullstack Java",
    nextWorkUrl: `/works/tpfinal-polotic`,
    shortStack: "Wordpress",
    moreLinks: [],
  },
  {
    id: 2,
    right: false,
    slug: "tpfinal-polotic",
    title: "TP Final",
    workImg: tp,
    client: "Polotic's Final Project",
    location: "Buenos Aires, Argentina",
    launch: "2021",
    live: "https://tpfinal-polotic.netlify.app/",
    code: null,
    desc: `Final Project for Polotic's "Desarrollo Web Fullstack Con Java". Originally made with JSP-Servlet, then migrated to Spring Boot - React to be deployed. 
    It is a CRUD Application to manage Employees, Reservations and Hosts. Calculate Monthly and Daily earnings, Reservations made by Employees, List of Hosts, Display Room Information, and much more.`,
    stack: `React | Context API | SASS | RESTful Services | Spring Boot | Data JPA | MySQL`,
    nextWork: "Kampai Boutique",
    nextWorkUrl: `/works/kampai-boutique`,
    shortStack: "Fullstack Java",
    moreLinks: [
      {
        id: 1,
        name: "JSP-Servlet",
        url: "https://github.com/PadillaTom/TPFinalTomasPadilla",
        icon: <AiOutlineGithub></AiOutlineGithub>,
      },
      {
        id: 2,
        name: "React",
        url: "https://github.com/PadillaTom/SpringBoot-Polotic-TPFinal-Frontend",
        icon: <AiOutlineGithub></AiOutlineGithub>,
      },
      {
        id: 3,
        name: "Spring Boot",
        url: "https://github.com/PadillaTom/SpringBoot-Polotic-TPFinal",
        icon: <AiOutlineGithub></AiOutlineGithub>,
      },
    ],
  },
];

/*
:::::::::::::::::::
  --> NAVIGATION <-- 
:::::::::::::::::::
*/

export const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Works",
    url: "/works",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];
