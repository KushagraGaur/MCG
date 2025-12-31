import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["carbon-accounting/what-is-carbon-accounting"];

export default function Page() {
  return <PageShell content={content} />;
}
