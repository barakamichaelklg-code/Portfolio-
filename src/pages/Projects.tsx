import { Projects as ProjectsComponent } from "../components/Projects";
import { PageLayout } from "../components/PageLayout";
import { Code } from "lucide-react";

export const Projects = () => (
  <PageLayout 
    title="Projets" 
    subtitle="Réalisations concrètes mêlant innovation technique et impact réel."
    icon={Code}
    gradient="from-blue-500/20 to-emerald-500/20"
  >
    <ProjectsComponent showTitle={false} />
  </PageLayout>
);


