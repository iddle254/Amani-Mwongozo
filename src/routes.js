import OurFight from "./views/OurFight.pages";
import OurFunding from "./views/OurFunding.pages";
import Engage from "./views/Engage.pages";
import OurImpact from "./views/OurImpact.pages";
import OurProjects from "./views/OurProjects.pages";
import OurTeam from "./views/OurTeam.pages";

const routes = [
  {
    path: "/our-fight",
    name: "Our Fight",
    component: OurFight,
    layout: "/admin",
  },
  {
    path: "/our-funding",
    name: "Our Funding",
    component: OurFunding,
    layout: "/admin",
  },
  {
    path: "/engage",
    name: "Engage us",
    component: Engage,
    layout: "/admin",
  },
  {
    path: "/our-impact",
    name: "Our Impact",
    component: OurImpact,
    layout: "/admin",
  },
  {
    path: "/our-projects",
    name: "Our Projects",
    component: OurProjects,
    layout: "/admin",
  },
  {
    path: "/our-team",
    name: "Our Team",
    component: OurTeam,
    layout: "/admin",
  },
];
export default routes;
