import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["sustainability-consulting/industries/hospitality"];

export default function Page() {
  return <PageShell content={content} />;
}
