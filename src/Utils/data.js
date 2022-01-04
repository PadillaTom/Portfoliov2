/*
:::::::::::::::::::
  --> DATA <-- 
:::::::::::::::::::
*/
import { AiOutlineGithub } from "react-icons/ai";

import kb from "../Assets/Images/Projects/KampaiBoutique.jpg";
import tp from "../Assets/Images/Projects/TPFinal.png";
import artStore from "../Assets/Images/Projects/ArtStoreProject.png";
import fundacionArg from "../Assets/Images/Projects/FundacionArg.png";

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
		nextWork: "Art And Store",
		nextWorkUrl: `/works/art-store`,
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
	{
		id: 3,
		right: true,
		slug: "art-store",
		title: "Art And Store",
		workImg: artStore,
		client: "Practice Project",
		location: "Geneva, Switzerland",
		launch: "2021",
		live: "https://artandstore.netlify.app/",
		code: "https://github.com/PadillaTom/Art-Store-ReactJS",
		desc: `Practice project for a Fictional Boutique. 100% Responsive using Styled Components and Media Queries. Users may browse and view Products through a variety of Filters, Add products to Cart and complete checkout with Stripe Gateway. Managing the Data with Context API, I am able to reduce the number of API Requests and avoid "Prop Drilling". `,
		stack:
			"React | John Smilga's Products API | AXIOS | Context API | Styled Components | Framer-Motion | React-Intersection-Observer | Auth0 | Stripe",
		nextWork: "Fundacion Arg",
		nextWorkUrl: `/works/fundacion-arg`,
		shortStack: "ReactJS",
		moreLinks: [],
	},
	{
		id: 4,
		right: false,
		slug: "fundacion-arg",
		title: "Fundacion Argentina",
		workImg: fundacionArg,
		client: "Fundacion Somos Mas",
		location: "Salta, Argentina",
		launch: "2022",
		live: "https://alkemy-ot111.herokuapp.com/api/docs/swagger-ui/index.html?configUrl=/api/docs/swagger-config",
		code: "https://github.com/PadillaTom/SpringBoot-FundacionArg",
		desc: `Applying Agile Practices (SCRUM): Developed a REST API - Secured Endpoints and handled Authorization with Spring Security - Integrated AWS S3 / SendGrid - Testing with JUnit and Mockito - Documentation with Swagger`,
		stack:
			"Spring Boot | PostgreSQL | Gradle | Spring Security | Swagger | JUnit | AWS S3 | SendGrid",
		nextWork: "Kampai Boutique",
		nextWorkUrl: `/works/kampai-boutique`,
		shortStack: "Spring Boot",
		moreLinks: [],
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
