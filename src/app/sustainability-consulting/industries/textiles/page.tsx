import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["sustainability-consulting/industries/textiles"];

export default function Page() {
  return <PageShell content={content} />;
}
