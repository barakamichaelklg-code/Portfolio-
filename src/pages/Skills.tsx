import { Skills as SkillsComponent } from "../components/Skills";
import { PageLayout } from "../components/PageLayout";
import { Cpu } from "lucide-react";
import { SEO } from "../components/SEO";

export const Skills = () => (
  <PageLayout 
    title="Compétences" 
    subtitle="Ma boîte à outils technologique pour relever les défis de demain."
    icon={Cpu}
  >
    <SEO title="Compétences" description="Explorez les compétences techniques de Baraka Michael KLG : JavaScript, Python, React, Node.js, et plus encore." />
    <SkillsComponent showTitle={false} />
  </PageLayout>
);


