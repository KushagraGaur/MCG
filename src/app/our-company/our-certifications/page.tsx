import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["our-company/our-certifications"];

export default function Page() {
  return <PageShell content={content} />;
}
