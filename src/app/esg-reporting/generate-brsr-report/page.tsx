import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["esg-reporting/generate-brsr-report"];

export default function Page() {
  return <PageShell content={content} />;
}
