import { Projects as ProjectsComponent } from "../components/Projects";
import { PageLayout } from "../components/PageLayout";
import { Code } from "lucide-react";
import { SEO } from "../components/SEO";

export const Projects = () => (
  <PageLayout 
    title="Projets" 
    subtitle="Réalisations concrètes mêlant innovation technique et impact réel."
    icon={Code}
    gradient="from-blue-500/20 to-emerald-500/20"
  >
    <SEO title="Projets" description="Découvrez les projets de développement web de Baraka Michael KLG, incluant PharmaStock Manager et DrugInfo API." />
    <ProjectsComponent showTitle={false} />
  </PageLayout>
);


