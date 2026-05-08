import { Certifications as CertificationsComponent } from "../components/Certifications";
import { PageLayout } from "../components/PageLayout";
import { Award } from "lucide-react";

export const Certifications = () => (
  <PageLayout 
    title="Certifications" 
    subtitle="Validation de mes expertises par des institutions de référence."
    icon={Award}
    gradient="from-amber-500/20 to-emerald-500/20"
  >
    <CertificationsComponent showTitle={false} />
  </PageLayout>
);


