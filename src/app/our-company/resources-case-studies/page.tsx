import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["our-company/resources-case-studies"];

export default function Page() {
  return <PageShell content={content} />;
}
