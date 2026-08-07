export const projectsData = [
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