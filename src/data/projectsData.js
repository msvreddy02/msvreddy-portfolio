export const projectsData = [
  {
  id: 'art-fetal-rhd-screening-nhsbt',
  title: 'ART Fetal RhD Screening System',
  client: 'NHS Blood and Transplant (NHSBT)',
  role: 'IBM BAW Developer (Development Support)',
  category: 'IBM BAW',
  description:
    'Provided development support for clinical diagnostic workflows orchestrating sample plate processing from MiPaaS middleware to final LIMS export with real-time laboratory dashboards.',
  tech: [
    'IBM BAW',
    'Process Designer',
    'CSHS',
    'AJAX Services',
    'TWSearch API',
    'REST APIs',
    'JavaScript'
  ],
  highlights: [
    {
      title: 'Workflow Support & Orchestration',
      text: 'Supported a 2-lane BPD automating diagnostic plate ingest from MiPaaS middleware to final LIMS export.'
    },
    {
      title: 'Real-Time Lab Dashboard',
      text: 'Maintained zero-refresh worklists using Coach Views and AJAX callbacks to ensure responsive UI updates for lab staff.'
    },
    {
      title: 'Search & Audit Optimization',
      text: 'Enhanced TWSearch scripts and custom business aliases for faster filtering and compliance with 9-month audit retention lookups.'
    },
    {
      title: 'Triage & Decision UI Maintenance',
      text: 'Supported Coach views displaying microplate layouts, whole-plate PASS/FAIL statuses, and audit trail validations.'
    },
    {
      title: 'Engine Fault & Error Resolution',
      text: 'Resolved deep server-engine serialization issues (CWTBG0019E) and race conditions by converting long-polling steps to async calls.'
    },
    {
      title: 'Mock Harness & Testing',
      text: 'Maintained mock-data toggles alongside live REST services to validate features quickly without external lab hardware dependencies.'
    }
  ]
},
  
  {
    id: "digital-automation-conventional",
    title: "Digital Automation for Conventional Services",
    client: "Ahli Bank",
    role: "BPM Developer",
    category: "Banking & Workflow",
    tech: ["IBM FileNet P8 (CE, PE)", "IBM Content Navigator (ICN)", "IBM BAW v24.0", "Java/J2EE", "REST APIs", "Oracle DB"],
    description: "Engineered core FileNet object models and integrated IBM BAW process applications with FileNet P8 repositories via REST services and custom Java APIs. Designed operational workflows using Process Designer, establishing custom Work Queues, In-Baskets, and ICN plugins using Java and Dojo.",
    highlights: [
      { title: "Object Modeling & Workflow", text: "Configured Object Stores, Document Classes, Property Templates, Choice Lists, and Process Engine Work Queues." },
      { title: "ICN Customization", text: "Tailored IBM Content Navigator with personalized Desktops, Entry Templates, and custom Java/Dojo plugins." },
      { title: "Automated Triggers", text: "Built custom Java Event Actions and Subscriptions for automated document processing and property updates." },
      { title: "Security & Compliance", text: "Implemented FileNet ACLs, ACEs, and role-based authorization to strictly satisfy banking regulatory standards." }
    ]
  },
  {
    id: "digital-automation-islamic",
    title: "Digital Automation for Islamic Services",
    client: "Ahli Bank",
    role: "BPM Developer",
    category: "Banking & Workflow",
    tech: ["IBM FileNet P8", "IBM BAW", "IBM BPM 8.6", "Java/J2EE", "RESTful Web Services", "SQL Server"],
    description: "Built and optimized enterprise ECM and BPM solutions for end-to-end Islamic Account Services and cheque book processing. Led historical document migration and Process Engine performance tuning to accelerate customer request fulfillments.",
    highlights: [
      { title: "BAW Process Integration", text: "Integrated IBM BAW process applications with FileNet repositories for automated cheque book request routing and lifecycle management." },
      { title: "Legacy Migration", text: "Executed document migration and validation of historical customer records and request files from legacy systems." },
      { title: "Performance Tuning", text: "Optimized FileNet search indexing strategies, log analysis, RCA, and queue performance tuning on Process Engine." },
      { title: "Custom Java Services", text: "Developed custom Java integration services connecting repositories with core banking middleware." }
    ]
  },
  {
    id: "conventional-account-opening",
    title: "Conventional Account Opening",
    client: "Ahli Bank",
    role: "BPM Developer",
    category: "Account Automation",
    tech: ["IBM BAW", "IBM FileNet P8", "IBM Content Navigator", "Java", "REST APIs", "Oracle DB"],
    description: "Designed automated Account Opening processes in IBM BAW integrated directly with IBM FileNet P8 for real-time customer identification document ingestion, verification, and indexing.",
    highlights: [
      { title: "Real-time Ingestion", text: "Connected BAW Human Tasks and Business Rules with FileNet for real-time document retrieval during approval steps." },
      { title: "Operator Workflows", text: "Configured Process Designer custom Work Queues and ICN Entry Templates for bank verification teams." },
      { title: "Automated Metadata Updates", text: "Built Java Event Actions for automated metadata updates upon BAW account opening approvals." },
      { title: "System RCA & Diagnostics", text: "Executed log analysis and queue performance tuning across BAW and Process Engine components." }
    ]
  }
  
];