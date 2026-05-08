import { Hero } from "../components/Hero";
import { Vision } from "../components/Vision";
import { AppCreation } from "../components/AppCreation";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";
import { Certifications } from "../components/Certifications";
import { Contact } from "../components/Contact";

export const Home = () => (
  <main>
    <Hero />
    <Vision />
    <AppCreation />
    <Skills />
    <Education />
    <Projects />
    <Certifications />
    <Contact />
  </main>
);
