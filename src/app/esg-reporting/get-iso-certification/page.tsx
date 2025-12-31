import PageShell from "@/components/page/PageShell";
import { pageContent } from "@/lib/pageContent";

const content = pageContent["esg-reporting/get-iso-certification"];

export default function Page() {
  return <PageShell content={content} />;
}
