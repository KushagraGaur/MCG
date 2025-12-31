export type ValueCard = {
  title: string;
  description: string;
};

export type MethodStep = {
  title: string;
  description: string;
};

export type ProofStat = {
  value: string;
  label: string;
};

export type Proof = {
  stats: ProofStat[];
  frameworks: string[];
  caseStudies: ValueCard[];
};

export type ServiceItem = {
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type IndustryItem = {
  title: string;
  points: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type RightRailItem = {
  title: string;
  description: string;
  items: string[];
};

export type ClosingCta = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export type PageContent = {
  title: string;
  subtitle: string;
  eyebrow: string;
  primaryCtaLabel: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  services?: ServiceItem[];
  servicesSectionTitle?: string;
  servicesSectionDescription?: string;
  industries?: IndustryItem[];
  industriesSectionTitle?: string;
  industriesSectionDescription?: string;
  industriesCtaLabel?: string;
  industriesCtaHref?: string;
  industriesCtaDescription?: string;
  showRightRail?: boolean;
  whatYouGet?: ValueCard[];
  methodSectionTitle?: string;
  methodSectionDescription?: string;
  proofSectionTitle?: string;
  proofSectionDescription?: string;
  faqSectionTitle?: string;
  faqSectionDescription?: string;
  methodSteps: MethodStep[];
  proof: Proof;
  faqs: FAQ[];
  rightRail: RightRailItem[];
  closingCta?: ClosingCta;
};

const defaultMethodSteps: MethodStep[] = [
  {
    title: "Discovery",
    description: "Align on scope, reporting boundaries, and stakeholder expectations.",
  },
  {
    title: "Data Collection",
    description: "Gather policies, operational data, and supporting evidence in one place.",
  },
  {
    title: "Analysis & Reporting",
    description: "Validate data, map to standards, and draft decision-ready outputs.",
  },
  {
    title: "Review + Audit Readiness",
    description: "Quality assurance, leadership review, and audit-ready documentation.",
  },
];

const defaultProofStats: ProofStat[] = [
  { value: "18+", label: "Reporting cycles supported" },
  { value: "90%", label: "Data readiness achieved before audit" },
];

const buildCaseStudies = (focus: string): ValueCard[] => [
  {
    title: `Case study placeholder: ${focus}`,
    description:
      "Outcome summary placeholder focused on scope, governance alignment, and reporting clarity.",
  },
  {
    title: "Case study placeholder: Cross-functional delivery",
    description:
      "Highlight on data consolidation, executive review, and assurance preparation.",
  },
];

const buildProof = (frameworks: string[], focus: string): Proof => ({
  stats: defaultProofStats,
  frameworks,
  caseStudies: buildCaseStudies(focus),
});

const buildWhatYouGet = (
  deliverables: string,
  timeline: string,
  inputs: string,
  artifacts: string,
): ValueCard[] => [
  { title: "Key Deliverables", description: deliverables },
  { title: "Timeline", description: timeline },
  { title: "Required Inputs", description: inputs },
  { title: "Output Artifacts", description: artifacts },
];

const buildRightRail = (
  focus: string,
  inputs: string,
  outputs: string,
): RightRailItem[] => [
  {
    title: "Engagement Snapshot",
    description: focus,
    items: [
      "Executive kickoff workshop",
      "Weekly working sessions",
      "Leadership review checkpoints",
    ],
  },
  {
    title: "Data You Provide",
    description: inputs,
    items: [
      "Policies and governance materials",
      "Operational and ESG data sources",
      "Prior disclosures or audit notes",
    ],
  },
  {
    title: "What You Keep",
    description: outputs,
    items: [
      "Reusable templates and checklists",
      "Evidence register and audit trail",
      "Executive-ready summary deck",
    ],
  },
];

export const pageContent: Record<string, PageContent> = {
  "esg-reporting/get-esg-certification": {
    title: "Get ESG certification with an audit-ready roadmap.",
    subtitle:
      "For organizations preparing for external ESG verification, we close evidence gaps, align policies to standards, and deliver a defensible submission package.",
    eyebrow: "ESG Reporting",
    primaryCtaLabel: "Request Assessment",
    whatYouGet: buildWhatYouGet(
      "Certification readiness assessment, gap register, and prioritized action plan.",
      "Typically 6-10 weeks depending on evidence maturity and auditor timelines.",
      "Current policies, ESG data sources, prior audit findings, and governance documents.",
      "Audit-ready evidence pack, control mappings, and certification submission support.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "ISO 14064", "IFRS S2"],
      "ESG certification readiness",
    ),
    faqs: [
      {
        question: "Which ESG certifications do you support?",
        answer:
          "We align with leading standards and work alongside your chosen certification body.",
      },
      {
        question: "Do you coordinate with external auditors?",
        answer:
          "Yes. We structure evidence packs and help manage auditor requests and timelines.",
      },
      {
        question: "How do we prepare internal teams?",
        answer:
          "We deliver readiness workshops, clear owners, and checklists for each requirement.",
      },
    ],
    rightRail: buildRightRail(
      "Built for certification readiness and audit defense.",
      "We focus on evidence integrity and completeness.",
      "A structured certification pack your teams can reuse.",
    ),
  },
  "esg-reporting/generate-gri-report": {
    title: "Generate a GRI-aligned sustainability report.",
    subtitle:
      "For ESG teams needing credible disclosures, we map material topics, validate data, and craft a report that stands up to stakeholder review.",
    eyebrow: "ESG Reporting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Materiality mapping, disclosure matrix, and GRI content index.",
      "Typically 4-8 weeks depending on data readiness and stakeholder input.",
      "Operational metrics, HR and governance data, and prior reporting history.",
      "Draft report narrative, data tables, and assurance-ready workpapers.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "TCFD", "ISSB", "IFRS S1", "IFRS S2"],
      "GRI reporting delivery",
    ),
    faqs: [
      {
        question: "How do you define material topics?",
        answer:
          "We run a stakeholder-informed materiality assessment aligned to GRI guidance.",
      },
      {
        question: "Can you align GRI with other frameworks?",
        answer:
          "Yes. We map disclosures to parallel frameworks for consistency.",
      },
      {
        question: "What data validation is included?",
        answer:
          "We reconcile sources, document assumptions, and flag gaps early.",
      },
    ],
    rightRail: buildRightRail(
      "Designed for board-ready, investor-grade reporting.",
      "We consolidate data across teams and systems.",
      "A polished report and a reusable disclosure framework.",
    ),
  },
  "esg-reporting/generate-brsr-report": {
    title: "Produce a SEBI-compliant BRSR report with confidence.",
    subtitle:
      "For listed companies managing Indian reporting obligations, we translate ESG data into a clear, compliant BRSR submission.",
    eyebrow: "ESG Reporting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "BRSR disclosure mapping, leadership questionnaires, and SEBI-aligned reporting.",
      "Typically 4-6 weeks depending on data availability and review cycles.",
      "Value chain metrics, governance documentation, and policy disclosures.",
      "Completed BRSR report, annexures, and audit-ready evidence trail.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["BRSR", "GRI", "SEBI", "ISO 14001", "ISO 45001"],
      "BRSR reporting delivery",
    ),
    faqs: [
      {
        question: "Do you support BRSR Core disclosures?",
        answer:
          "Yes. We cover Core requirements and align supporting evidence.",
      },
      {
        question: "How do you handle value chain data gaps?",
        answer:
          "We build a data plan with phased sourcing and documented assumptions.",
      },
      {
        question: "Can you help with internal approvals?",
        answer:
          "We prepare executive-ready summaries for quick sign-off cycles.",
      },
    ],
    rightRail: buildRightRail(
      "Aligned to Indian regulatory expectations and timelines.",
      "We focus on principal and value chain indicators.",
      "A compliance-ready BRSR package and evidence log.",
    ),
  },
  "esg-reporting/get-iso-certification": {
    title: "Achieve ISO certification with structured readiness support.",
    subtitle:
      "For teams pursuing ISO 14001, 14064, or related standards, we deliver a clear readiness plan and audit support.",
    eyebrow: "ESG Reporting",
    primaryCtaLabel: "Request Assessment",
    whatYouGet: buildWhatYouGet(
      "ISO gap analysis, control mapping, and implementation roadmap.",
      "Typically 6-12 weeks based on site readiness and audit scheduling.",
      "Operational procedures, policy documents, and prior audit records.",
      "Audit-ready evidence pack, procedures library, and corrective actions log.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["ISO 14001", "ISO 14064", "ISO 50001", "GRI"],
      "ISO certification readiness",
    ),
    faqs: [
      {
        question: "Which ISO standards do you cover?",
        answer:
          "We support ISO 14001, 14064, 50001, and related ESG standards.",
      },
      {
        question: "What is the typical readiness timeline?",
        answer:
          "Most engagements run 6-12 weeks depending on existing controls.",
      },
      {
        question: "How do you handle corrective actions?",
        answer:
          "We document findings, owners, and timelines to close gaps quickly.",
      },
    ],
    rightRail: buildRightRail(
      "Focused on ISO audit readiness and evidence alignment.",
      "We prioritize process documentation and traceable data.",
      "Certified-ready controls and a structured audit trail.",
    ),
  },
  "carbon-accounting/what-is-carbon-accounting": {
    title: "Understand carbon accounting and what it means for your business.",
    subtitle:
      "For leadership teams clarifying scope, data requirements, and compliance expectations before reporting or targets.",
    eyebrow: "Carbon Accounting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Executive briefing, boundary definition, and carbon accounting readiness review.",
      "Typically 2-4 weeks for an initial baseline and roadmap.",
      "Utility data, fleet and travel records, and supplier information as available.",
      "Baseline inventory summary, data gap analysis, and next-step roadmap.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GHG Protocol", "ISO 14064", "SBTi", "IFRS S2"],
      "carbon accounting readiness",
    ),
    faqs: [
      {
        question: "What scopes are included in carbon accounting?",
        answer:
          "We cover Scope 1, Scope 2, and material Scope 3 categories.",
      },
      {
        question: "How often should inventories be refreshed?",
        answer: "Most organizations update annually with quarterly monitoring.",
      },
      {
        question: "Can this support net-zero target setting?",
        answer:
          "Yes. We align inventories with target-setting and reduction planning.",
      },
    ],
    rightRail: buildRightRail(
      "Clarity on boundaries, data maturity, and reporting expectations.",
      "We validate source quality before calculations.",
      "A baseline summary and a readiness roadmap.",
    ),
  },
  "carbon-accounting/get-carbon-assessment": {
    title: "Get a complete carbon assessment across Scope 1-3.",
    subtitle:
      "For organizations ready to quantify emissions, we build a verified inventory and a reduction-ready baseline.",
    eyebrow: "Carbon Accounting",
    primaryCtaLabel: "Request Assessment",
    whatYouGet: buildWhatYouGet(
      "Scope 1-3 inventory, emissions factor methodology, and baseline report.",
      "Typically 6-10 weeks depending on data availability and scope.",
      "Energy, fuel, travel, procurement, and supplier activity data.",
      "Inventory workbook, methodology memo, and audit-ready evidence trail.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GHG Protocol", "ISO 14064", "SBTi", "CDP"],
      "carbon assessment delivery",
    ),
    faqs: [
      {
        question: "How do you handle missing Scope 3 data?",
        answer:
          "We use approved estimation methods and document all assumptions.",
      },
      {
        question: "Do you provide a reduction roadmap?",
        answer:
          "Yes. We identify hotspots and prioritize reduction levers.",
      },
      {
        question: "Can this be used for assurance?",
        answer:
          "We maintain a transparent audit trail for third-party verification.",
      },
    ],
    rightRail: buildRightRail(
      "Built for audit-ready Scope 1-3 inventories.",
      "We standardize data ingestion and calculations.",
      "A defensible baseline and reusable inventory files.",
    ),
  },
  "carbon-accounting/trade-carbon-credits": {
    title: "Trade carbon credits with diligence and market clarity.",
    subtitle:
      "For procurement teams exploring offsets, we evaluate credit quality, verify claims, and structure a credible purchase strategy.",
    eyebrow: "Carbon Accounting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Credit sourcing strategy, due diligence checklist, and procurement support.",
      "Typically 3-6 weeks depending on market availability and review cycles.",
      "Reduction targets, budget parameters, and risk appetite inputs.",
      "Verified credit shortlist, quality assessment memo, and purchase guidance.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["Verra", "Gold Standard", "GHG Protocol", "ICVCM"],
      "carbon credit procurement",
    ),
    faqs: [
      {
        question: "How do you assess credit quality?",
        answer:
          "We review additionality, permanence, and verification history.",
      },
      {
        question: "Do you support portfolio construction?",
        answer:
          "Yes. We balance risk, price, and reputational considerations.",
      },
      {
        question: "Can you align credits to reporting needs?",
        answer:
          "We match credits to disclosure and claims requirements.",
      },
    ],
    rightRail: buildRightRail(
      "Focused on quality, traceability, and reputational safeguards.",
      "We evaluate registries and project documentation.",
      "A vetted credit portfolio and procurement playbook.",
    ),
  },
  "sustainability-consulting/industries/textiles": {
    title: "Sustainability strategy for textile and apparel leaders.",
    subtitle:
      "For mills, brands, and manufacturers navigating buyer audits, water stewardship, and traceability requirements.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Materiality map, supplier engagement plan, and compliance roadmap.",
      "Typically 6-10 weeks based on facility count and data access.",
      "Water, energy, chemical use, and supplier audit data.",
      "Factory scorecards, reporting templates, and buyer-ready evidence.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["Higg FEM", "ZDHC", "GRI", "ISO 14001"],
      "textiles sustainability delivery",
    ),
    faqs: [
      {
        question: "Do you support buyer audit preparation?",
        answer:
          "Yes. We align evidence to buyer protocols and track corrective actions.",
      },
      {
        question: "How do you approach traceability?",
        answer:
          "We map tiers and data owners to improve chain-of-custody clarity.",
      },
      {
        question: "Can you help reduce water and chemical risks?",
        answer:
          "We identify hotspots and prioritize practical improvement initiatives.",
      },
    ],
    rightRail: buildRightRail(
      "Built for buyer expectations and audit readiness.",
      "We focus on facility-level and supplier data.",
      "Scorecards and proof points for customer conversations.",
    ),
  },
  "sustainability-consulting/industries/manufacturing": {
    title: "Sustainability consulting for manufacturing operations.",
    subtitle:
      "For industrial operators seeking efficiency, compliance, and credible ESG reporting across sites.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Facility sustainability assessment, compliance roadmap, and KPI dashboard.",
      "Typically 6-12 weeks depending on site complexity and data maturity.",
      "Energy, waste, water, and safety metrics across facilities.",
      "Baseline report, improvement roadmap, and audit-ready documentation.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["ISO 14001", "ISO 50001", "GRI", "GHG Protocol"],
      "manufacturing sustainability delivery",
    ),
    faqs: [
      {
        question: "How do you prioritize improvement areas?",
        answer:
          "We quantify hotspots and rank initiatives by impact and feasibility.",
      },
      {
        question: "Do you work across multiple plants?",
        answer:
          "Yes. We create a consistent framework for multi-site reporting.",
      },
      {
        question: "Can this integrate with existing EHS systems?",
        answer:
          "We align with your current tooling and data flows.",
      },
    ],
    rightRail: buildRightRail(
      "Structured for multi-site operational environments.",
      "We consolidate data across plants and functions.",
      "A repeatable reporting and compliance framework.",
    ),
  },
  "sustainability-consulting/industries/transportation-logistics": {
    title: "Sustainability strategy for transportation and logistics.",
    subtitle:
      "For carriers, logistics firms, and fleet operators managing emissions, fuel efficiency, and regulatory compliance.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Fleet emissions baseline, route efficiency analysis, and compliance plan.",
      "Typically 6-10 weeks depending on fleet size and data coverage.",
      "Fuel usage, mileage, load factors, and logistics network data.",
      "Emissions dashboard, reduction plan, and reporting-ready outputs.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GHG Protocol", "SmartWay", "ISO 14064", "GRI"],
      "logistics sustainability delivery",
    ),
    faqs: [
      {
        question: "Do you cover fleet electrification planning?",
        answer:
          "We assess feasibility, costs, and emissions impacts for transition plans.",
      },
      {
        question: "How do you handle carrier data gaps?",
        answer:
          "We standardize data requests and use approved estimation methods.",
      },
      {
        question: "Can you support regulatory reporting?",
        answer:
          "Yes. We align outputs to regional reporting requirements.",
      },
    ],
    rightRail: buildRightRail(
      "Focused on fleet emissions and operational efficiency.",
      "We integrate fuel, mileage, and route data.",
      "A defensible logistics emissions baseline.",
    ),
  },
  "sustainability-consulting/industries/hospitality": {
    title: "Sustainability consulting for hospitality and tourism.",
    subtitle:
      "For hotels and resorts improving resource efficiency, guest expectations, and ESG disclosures.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Property sustainability assessment, ESG roadmap, and guest-ready reporting.",
      "Typically 6-10 weeks depending on portfolio size.",
      "Energy, water, waste, and supplier data for each property.",
      "Property scorecards, improvement plan, and disclosure templates.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GSTC", "GRI", "ISO 14001", "GHG Protocol"],
      "hospitality sustainability delivery",
    ),
    faqs: [
      {
        question: "Can you align with green hotel standards?",
        answer:
          "We map requirements to GSTC and similar certifications.",
      },
      {
        question: "How do you support guest-facing communications?",
        answer:
          "We translate data into credible, approved messaging.",
      },
      {
        question: "Do you work across multiple properties?",
        answer:
          "Yes. We standardize metrics for portfolio reporting.",
      },
    ],
    rightRail: buildRightRail(
      "Tailored for property-level operations and guest expectations.",
      "We focus on utilities, waste, and procurement data.",
      "Guest-ready reporting assets and property dashboards.",
    ),
  },
  "sustainability-consulting/industries/healthcare": {
    title: "Sustainability strategy for healthcare providers.",
    subtitle:
      "For hospitals and health systems balancing compliance, patient outcomes, and operational efficiency.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Facility emissions baseline, compliance checklist, and ESG roadmap.",
      "Typically 6-12 weeks based on campus size and data access.",
      "Energy use, waste handling, and procurement data across sites.",
      "Baseline report, improvement plan, and regulatory-ready disclosures.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GHG Protocol", "ISO 14001", "GRI", "HCWH"],
      "healthcare sustainability delivery",
    ),
    faqs: [
      {
        question: "How do you manage clinical waste requirements?",
        answer:
          "We align data capture with regulatory and safety expectations.",
      },
      {
        question: "Can you support resilience planning?",
        answer:
          "Yes. We incorporate climate risk and continuity planning.",
      },
      {
        question: "Do you work with procurement teams?",
        answer:
          "We support sustainable sourcing and supplier engagement.",
      },
    ],
    rightRail: buildRightRail(
      "Designed for complex healthcare operations and compliance needs.",
      "We prioritize patient-safe, data-driven improvements.",
      "A compliance-ready ESG baseline and roadmap.",
    ),
  },
  "sustainability-consulting/industries/steel": {
    title: "Sustainability consulting for steel and heavy industry.",
    subtitle:
      "For steel producers reducing emissions intensity and meeting global buyer requirements.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Emissions baseline, decarbonization roadmap, and buyer-aligned reporting.",
      "Typically 8-12 weeks depending on plant complexity.",
      "Energy, process emissions, and supply chain data.",
      "Inventory workbook, reduction plan, and disclosure-ready outputs.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GHG Protocol", "ISO 14064", "GRI", "ResponsibleSteel"],
      "steel sustainability delivery",
    ),
    faqs: [
      {
        question: "Do you cover process emissions and fuel switching?",
        answer:
          "Yes. We model process emissions and reduction pathways.",
      },
      {
        question: "How do you address buyer reporting requirements?",
        answer:
          "We align outputs to buyer scorecards and ESG disclosures.",
      },
      {
        question: "Can you support transition planning?",
        answer:
          "We provide phased roadmaps and investment readiness guidance.",
      },
    ],
    rightRail: buildRightRail(
      "Focused on heavy industry emissions and compliance.",
      "We prioritize process data and energy efficiency.",
      "A decarbonization-ready data and reporting foundation.",
    ),
  },
  "sustainability-consulting/our-services": {
    title: "Sustainability Consulting Services",
    subtitle:
      "Practical, audit-ready sustainability services designed to help organizations meet regulatory requirements, improve environmental performance, and build long-term enterprise value.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    secondaryCtaLabel: "Our Methodology",
    secondaryCtaHref: "/sustainability-consulting/our-methodology",
    showRightRail: false,
    servicesSectionTitle: "Services Overview",
    servicesSectionDescription:
      "Structured advisory support across strategy, governance, compliance, and execution.",
    industriesSectionTitle: "Industries We Support",
    industriesSectionDescription:
      "Our sustainability and ESG services are tailored to the regulatory, operational, and value-chain realities of each industry we serve.",
    services: [
      {
        title: "Sustainability Strategy & Roadmapping",
        description:
          "Long-term ESG goal setting, prioritization, and phased execution planning to align leadership and teams. We translate priorities into a clear, sequenced roadmap.",
        ctaLabel: "Discuss this service",
        ctaHref: "/contact",
      },
      {
        title: "ESG Policy & Governance Design",
        description:
          "Governance frameworks, internal controls, and accountability models that stand up to audit scrutiny. Roles and decision rights are documented end-to-end.",
        ctaLabel: "Discuss this service",
        ctaHref: "/contact",
      },
      {
        title: "Regulatory Readiness & Compliance Advisory",
        description:
          "Alignment support for BRSR, GRI, ISO, and emerging ESG requirements with a sustainability lens. We map disclosures to evidence and owners.",
        ctaLabel: "Discuss this service",
        ctaHref: "/contact",
      },
      {
        title: "Decarbonization & Transition Planning",
        description:
          "Emissions reduction strategies, transition pathways, and investment-ready action plans. Focus stays on measurable impact and feasibility.",
        ctaLabel: "Discuss this service",
        ctaHref: "/contact",
      },
      {
        title: "Training & Capacity Building",
        description:
          "Leadership workshops, operational training, and ESG enablement for cross-functional teams. We build internal confidence for sustained execution.",
        ctaLabel: "Discuss this service",
        ctaHref: "/contact",
      },
    ],
    industries: [
      {
        title: "Textiles",
        points: [
          "Support ESG and buyer compliance requirements for global apparel brands",
          "Enable traceability across raw materials and manufacturing stages",
          "Reduce environmental impact through water, energy, and waste optimization",
          "Prepare audit-ready ESG disclosures aligned with buyer codes and regulations",
          "Strengthen sustainability credentials for export competitiveness",
        ],
      },
      {
        title: "Manufacturing",
        points: [
          "Align ESG reporting with operational efficiency and cost optimization",
          "Identify high-impact emission and resource reduction opportunities",
          "Build governance and data systems for regulatory readiness",
          "Support supplier and value-chain sustainability assessments",
          "Improve investor and stakeholder confidence through structured disclosures",
        ],
      },
      {
        title: "Transportation & Logistics",
        points: [
          "Measure and manage Scope 1, 2, and 3 emissions across fleets and routes",
          "Support decarbonization strategies aligned with fuel transition pathways",
          "Improve compliance with emerging logistics and transport regulations",
          "Enable transparent emissions reporting for enterprise customers",
          "Optimize sustainability performance without disrupting operations",
        ],
      },
      {
        title: "Hospitality",
        points: [
          "Track and reduce energy, water, and waste impacts across properties",
          "Build sustainability programs aligned with brand and guest expectations",
          "Support ESG disclosures for asset owners and operators",
          "Improve operational efficiency while enhancing guest trust",
          "Prepare sustainability credentials for investors and partners",
        ],
      },
      {
        title: "Healthcare",
        points: [
          "Support ESG and sustainability reporting for regulated environments",
          "Manage emissions and waste across facilities and supply chains",
          "Align sustainability initiatives with patient safety and compliance needs",
          "Strengthen governance and reporting structures",
          "Enable transparent reporting for stakeholders and regulators",
        ],
      },
      {
        title: "Steel",
        points: [
          "Assess and manage carbon intensity across production processes",
          "Support transition planning for emissions-intensive operations",
          "Enable reporting aligned with global climate and disclosure frameworks",
          "Prepare data systems for buyer and investor scrutiny",
          "Support long-term decarbonization and competitiveness strategies",
        ],
      },
      {
        title: "Chemical",
        points: [
          "Address complex regulatory and environmental reporting requirements",
          "Manage emissions, resource use, and safety considerations",
          "Build auditable sustainability and ESG data systems",
          "Support transition strategies aligned with regulatory expectations",
          "Improve transparency for customers, investors, and authorities",
        ],
      },
      {
        title: "Pharmaceutical",
        points: [
          "Align ESG reporting with strict regulatory and quality requirements",
          "Manage sustainability impacts across R&D, manufacturing, and supply chains",
          "Support responsible sourcing and governance practices",
          "Strengthen transparency for global stakeholders",
          "Prepare sustainability disclosures without disrupting compliance operations",
        ],
      },
    ],
    industriesCtaLabel: "Discuss Your Industry Needs",
    industriesCtaHref: "/contact",
    industriesCtaDescription:
      "Our experts tailor each engagement to your industry's regulatory and operational context.",
    methodSectionTitle: "How These Services Are Delivered",
    methodSectionDescription:
      "A repeatable delivery model built for rigor, transparency, and audit readiness.",
    methodSteps: [
      {
        title: "Discovery & Baseline Assessment",
        description:
          "Align on scope, objectives, and current-state sustainability performance.",
      },
      {
        title: "Data & Stakeholder Inputs",
        description:
          "Gather operational data, policies, and stakeholder insights to inform decisions.",
      },
      {
        title: "Analysis & Recommendations",
        description:
          "Develop practical recommendations supported by evidence and clear metrics.",
      },
      {
        title: "Implementation Support & Review",
        description:
          "Support execution, track progress, and prepare audit-ready documentation.",
      },
    ],
    proofSectionTitle: "Proof & Credibility",
    proofSectionDescription:
      "Frameworks supported, client outcomes, and case studies available upon request.",
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "ISO 14064"],
      "sustainability services delivery",
    ),
    faqs: [
      {
        question: "How are sustainability consulting services scoped?",
        answer:
          "We start with discovery and scope based on your goals, data maturity, and compliance needs.",
      },
      {
        question: "Do you work alongside internal teams?",
        answer:
          "Yes. We partner with internal stakeholders and build shared ownership.",
      },
      {
        question: "Can services be delivered independently of reporting?",
        answer:
          "Yes. Services can be modular and aligned to your current priorities.",
      },
      {
        question: "What industries do you typically support?",
        answer:
          "We work across manufacturing, services, and regulated sectors with tailored delivery.",
      },
    ],
    rightRail: buildRightRail(
      "A services-first consulting model built for executive decision-making.",
      "We align services to your audit and disclosure calendar.",
      "A clear delivery plan with owners and milestones.",
    ),
    closingCta: {
      title: "Let's Build a Practical Sustainability Roadmap",
      description:
        "Our experts will review your needs and respond with a tailored approach.",
      buttonLabel: "Contact Us",
      buttonHref: "/contact",
    },
  },
  "sustainability-consulting/our-methodology": {
    title: "Our sustainability methodology from discovery to audit readiness.",
    subtitle:
      "A structured, evidence-first engagement model that moves teams from data chaos to credible reporting and action.",
    eyebrow: "Sustainability Consulting",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Engagement blueprint, governance model, and reporting cadence plan.",
      "Typically 4-6 weeks to establish the core operating system.",
      "Stakeholder input, current workflows, and existing ESG data.",
      "Methodology playbook, templates, and a phased delivery roadmap.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "GHG Protocol"],
      "methodology deployment",
    ),
    faqs: [
      {
        question: "Is the methodology adaptable to our industry?",
        answer:
          "Yes. We tailor steps, data requirements, and outputs to your sector.",
      },
      {
        question: "How do you align with internal governance?",
        answer:
          "We map owners, cadence, and approvals to your operating model.",
      },
      {
        question: "What happens after the initial engagement?",
        answer:
          "We provide a roadmap and handoff to internal or ongoing teams.",
      },
    ],
    rightRail: buildRightRail(
      "A repeatable framework for ESG delivery teams.",
      "We document ownership, cadence, and evidence trails.",
      "A full methodology kit for internal adoption.",
    ),
  },
  "our-company/about-us": {
    title: "About Mirika Consulting Group.",
    subtitle:
      "A specialist ESG advisory firm built on scientific rigor, clarity, and practical transformation for business leaders.",
    eyebrow: "Our Company",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "A dedicated ESG partner, senior advisory access, and clear delivery ownership.",
      "Engagement timelines tailored to your reporting and compliance cycles.",
      "A clear view of your goals, data maturity, and stakeholder priorities.",
      "A documented engagement plan, project governance, and accountability map.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "GHG Protocol"],
      "advisory delivery",
    ),
    faqs: [
      {
        question: "What makes Mirika different?",
        answer:
          "We combine scientific rigor with executive-ready reporting and delivery.",
      },
      {
        question: "Who leads engagements?",
        answer:
          "Senior advisors lead strategy with dedicated analysts and project managers.",
      },
      {
        question: "Do you support long-term partnerships?",
        answer:
          "Yes. We offer ongoing reporting and sustainability program support.",
      },
    ],
    rightRail: buildRightRail(
      "Built for credibility-first ESG partnerships.",
      "We prioritize leadership alignment and transparency.",
      "A clear engagement model and accountability structure.",
    ),
  },
  "our-company/our-certifications": {
    title: "Our certifications and professional accreditations.",
    subtitle:
      "The standards and frameworks that validate our advisory work and delivery practices.",
    eyebrow: "Our Company",
    primaryCtaLabel: "Request Assessment",
    whatYouGet: buildWhatYouGet(
      "Transparency into our credentials, affiliations, and advisory standards.",
      "A concise overview delivered with your vendor review timelines.",
      "Your vendor requirements, procurement criteria, and compliance needs.",
      "Credential summaries, validation documents, and capability statements.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "ISO 14064", "GHG Protocol"],
      "certification credibility",
    ),
    faqs: [
      {
        question: "Which standards do your teams align with?",
        answer:
          "We maintain expertise across leading ESG and reporting frameworks.",
      },
      {
        question: "Can you support vendor due diligence?",
        answer:
          "Yes. We provide documentation to meet procurement requirements.",
      },
      {
        question: "How do you stay current on regulations?",
        answer:
          "We track regulatory updates and embed changes into our delivery.",
      },
    ],
    rightRail: buildRightRail(
      "Evidence-based credentials for procurement and compliance.",
      "We document affiliations and ongoing training.",
      "A credential pack for vendor review and audits.",
    ),
  },
  "our-company/resources-case-studies": {
    title: "Resources and case studies for ESG leaders.",
    subtitle:
      "Briefs, playbooks, and engagement snapshots that show how we deliver clarity and results.",
    eyebrow: "Our Company",
    primaryCtaLabel: "Contact Us",
    whatYouGet: buildWhatYouGet(
      "Curated resources, case study summaries, and reusable guidance.",
      "Delivered on request with quarterly updates and refreshes.",
      "Your focus areas, industry, and reporting objectives.",
      "Resource library access, case study briefs, and slide-ready summaries.",
    ),
    methodSteps: defaultMethodSteps,
    proof: buildProof(
      ["GRI", "BRSR", "ISO 14001", "GHG Protocol"],
      "resource library",
    ),
    faqs: [
      {
        question: "Are detailed case studies available?",
        answer:
          "Yes. We share detailed outcomes under NDA when appropriate.",
      },
      {
        question: "Do you publish templates or toolkits?",
        answer:
          "We provide select templates and playbooks for client use.",
      },
      {
        question: "How often are resources updated?",
        answer:
          "We refresh materials quarterly based on regulatory changes.",
      },
    ],
    rightRail: buildRightRail(
      "Evidence of delivery outcomes and reusable assets.",
      "We align resources to your sector and goals.",
      "A curated library for executive and stakeholder use.",
    ),
  },
};
