import { Skills as SkillsComponent } from "../components/Skills";
import { PageLayout } from "../components/PageLayout";
import { Cpu } from "lucide-react";

export const Skills = () => (
  <PageLayout 
    title="Compétences" 
    subtitle="Ma boîte à outils technologique pour relever les défis de demain."
    icon={Cpu}
  >
    <SkillsComponent showTitle={false} />
  </PageLayout>
);


