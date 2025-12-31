import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["sustainability-consulting/industries/transportation-logistics"];

export default function Page() {
  return <PageShell content={content} />;
}
