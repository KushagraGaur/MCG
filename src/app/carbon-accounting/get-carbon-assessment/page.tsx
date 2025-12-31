import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["carbon-accounting/get-carbon-assessment"];

export default function Page() {
  return <PageShell content={content} />;
}
