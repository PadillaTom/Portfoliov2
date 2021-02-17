/*
:::::::::::::::::::
  --> DATA <-- 
:::::::::::::::::::
*/
import kb from '../Assets/Images/KampaiBoutique.jpg';
import fm from '../Assets/Images/FincasManolo.jpg';
export const workDetails = [
  {
    id: 1,
    right: true,
    slug: 'kampai-boutique',
    title: 'Kampai Boutique',
    workImg: kb,
    client: 'Kampai Boutique',
    location: 'Geneva, Switzerland',
    launch: '2021',
    live: 'https://kampaiboutique.ch/',
    code: null,
    desc: `Website and Instagram Campaign for a well-kown Interior Design
            Architect. Located in Geneva the goal was to showcase previous
            works and to dynamically change the Collections as needed.`,
    stack: `Wordpress | Avada Builder | Photoshop | Illustrator | InDesign`,
    nextWork: 'Fincas Manolo',
    nextWorkUrl: ``,
  },
  {
    id: 2,
    right: false,
    slug: 'fincas-manolo',
    title: 'Fincas Manolo',
    workImg: fm,
    client: 'Fincas Manolo',
    location: 'Buenos Aires, Argentina',
    launch: '2021',
    live: 'https://fincas-manolo-test.netlify.app/',
    code: 'https://github.com/PadillaTom/Fincas-Manolo',
    desc: `Small Responsive website for a Natural Organic Products
Entrepreneur. The main goal was to "get him out there", share his
website with friends and family; spread the word. The project will
finally evolve into an Online Store.`,
    stack: `React | Context API | SASS | GSAP | Photoshop`,
    nextWork: 'Kampai Boutique',
    nextWorkUrl: ``,
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
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'About',
    url: '/about',
  },
  {
    id: 3,
    title: 'Works',
    url: '/works',
  },
  {
    id: 4,
    title: 'Contact',
    url: '/contact',
  },
];
