import { Certifications as CertificationsComponent } from "../components/Certifications";
import { PageLayout } from "../components/PageLayout";
import { Award } from "lucide-react";
import { SEO } from "../components/SEO";

export const Certifications = () => (
  <PageLayout 
    title="Certifications" 
    subtitle="Validation de mes expertises par des institutions de référence."
    icon={Award}
    gradient="from-amber-500/20 to-emerald-500/20"
  >
    <SEO title="Certifications" description="Certifications et formations suivies par Baraka Michael KLG dans le domaine de la technologie et de la santé." />
    <CertificationsComponent showTitle={false} />
  </PageLayout>
);


