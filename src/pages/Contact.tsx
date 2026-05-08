import { Contact as ContactComponent } from "../components/Contact";
import { PageLayout } from "../components/PageLayout";
import { Send } from "lucide-react";

export const Contact = () => (
  <PageLayout 
    title="Contact" 
    subtitle="Engageons la conversation pour construire ensemble le futur de la santé."
    icon={Send}
    gradient="from-emerald-500/20 to-indigo-500/20"
  >
    <ContactComponent showTitle={false} />
  </PageLayout>
);


