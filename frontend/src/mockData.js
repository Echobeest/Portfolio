// Mock data for portfolio

export const personalInfo = {
  name: "Prajwal Kakandaki",
  role: "Microsoft Dynamics 365 CRM Technical Consultant",
  subRoles: ["Power Platform Developer", ".NET Developer"],
  experience: "Experienced",
  location: "India",
  email: "prajwalkakandaki1@gmail.com",
  phone: "+91 72593 51598",
  linkedin: "https://www.linkedin.com/in/prajwal-kakandaki-b8770a186/",
  github: "https://github.com/Echobeest/",
  profileImage: "https://customer-assets-4nw71qhi.emergentagent.net/job_azure-engineer-1/artifacts/eeu9lo55_Profile%20Photo.png",
  resumeUrl: "https://customer-assets-4nw71qhi.emergentagent.net/job_azure-engineer-1/artifacts/0as34nwd_Prajwal_Kakandaki%20Resume%20%281%29.pdf"
};

export const aboutText = {
  intro: "I'm a seasoned Microsoft Dynamics 365 CRM Technical Consultant with extensive experience in delivering enterprise-grade solutions. I specialize in architecting and implementing complex CRM solutions using Power Platform and .NET technologies.",
  passion: "My passion lies in transforming business challenges into elegant technical solutions, leveraging the full power of Microsoft's ecosystem to drive digital transformation."
};

export const skills = [
  { category: "Microsoft Dynamics 365", items: ["Dynamics 365 CRM", "Dataverse", "Power Platform", "Power Apps", "Power Automate", "Power Pages"], level: 95 },
  { category: ".NET Development", items: ["C#", ".NET", "ASP.NET Core", "Web API", "Plugins", "Custom Workflow Activities"], level: 90 },
  { category: "Web Technologies", items: ["JavaScript", "TypeScript", "HTML5", "CSS3", "REST APIs", "PCF Controls"], level: 88 },
  { category: "Database & Query", items: ["SQL Server", "FetchXML", "QueryExpression", "SSIS"], level: 85 },
  { category: "Azure & DevOps", items: ["Azure Functions", "Azure Logic Apps", "Azure DevOps", "Azure Blob Storage", "Azure Service Bus"], level: 82 },
  { category: "Tools & Others", items: ["Ribbon Workbench", "Git", "Visual Studio"], level: 80 }
];

export const experience = [
  {
    id: 1,
    company: "Infosys Ltd",
    role: "Microsoft Dynamics 365 Technical Consultant",
    period: "Jul 2024 - Present",
    project: "Microsoft — Land & Lease",
    description: "Working directly with Microsoft Full-Time Engineers (FTEs) on an internal Dynamics 365 CE project. Designing scalable solutions using Dataverse, C# plugins, and Power Platform.",
    achievements: [
      "Designing and developing C# plugins using Dataverse SDK",
      "Implementing Power Automate flows for business process automation",
      "Handling Dataverse Web API integrations with external systems",
      "Resolving plugin execution, OData, and production issues",
      "Supporting deployments across Dev, Test, and Production environments"
    ]
  },
  {
    id: 2,
    company: "Sonata Software",
    role: "Dynamics 365 Developer",
    period: "Sept 2022 - Jun 2024",
    project: "Multiple Client Engagements",
    description: "Delivered multiple Dynamics 365 CE solutions for enterprise and non-profit clients. Specialized in Field Service, ISV customizations, and integrations with external platforms like SAP.",
    achievements: [
      "Implemented Dynamics 365 Field Service for Southern California Edison, replacing legacy CLICK CRM",
      "Built Canvas Apps and configured SLA automation workflows",
      "Integrated SAP with Dynamics 365 using Web API for Southern California Edison",
      "Customized Dynamics 365 CE ISV model-driven application for World Vision Canada's Fundraising & Engagement (F&E) operations",
      "Delivered non-profit fundraising CRM customizations end-to-end"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Land & Lease Management System",
    category: "Enterprise CRM",
    description: "Comprehensive Dynamics 365 CRM solution for managing land and lease operations with automated workflows and Azure integrations.",
    problem: "Client needed a unified platform to manage complex land and lease agreements, approval processes, and document management with multiple stakeholder involvement.",
    solution: "Built an end-to-end solution using Dynamics 365 CRM with custom entities, Power Automate workflows, Azure Functions for integrations, and Power Pages for external stakeholder access.",
    technologies: ["Dynamics 365 CRM", "Power Automate", "Azure Functions", "Power Pages", "C#", "SQL Server"],
    architecture: "Microservices architecture with Dynamics 365 as core, Azure Functions for middleware, and Power Pages for portal.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Lead Management Automation",
    category: "Sales Automation",
    description: "Intelligent lead management system with automated scoring, routing, and nurturing workflows.",
    problem: "Sales team struggled with manual lead assignment and lacked visibility into lead quality and conversion probability.",
    solution: "Implemented automated lead scoring using Power Automate, intelligent routing based on criteria, and real-time dashboards for tracking.",
    technologies: ["Dynamics 365 Sales", "Power Automate", "Power BI", "JavaScript", "FetchXML"],
    architecture: "Event-driven architecture with real-time triggers and custom business rules.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Sales CRM Customization",
    category: "CRM Enhancement",
    description: "Tailored Dynamics 365 Sales CRM with custom entities, forms, and business logic for pharmaceutical sales.",
    problem: "Standard CRM didn't support industry-specific workflows and compliance requirements for pharmaceutical sales.",
    solution: "Created custom entities for samples, prescriptions, and doctor visits. Built plugins for validation and custom PCF controls for specialized data entry.",
    technologies: ["Dynamics 365", "C#", "PCF Controls", "TypeScript", "Ribbon Workbench"],
    architecture: "Layered architecture with custom plugins, PCF components, and ribbon customizations.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Approval Workflow System",
    category: "Business Process Automation",
    description: "Multi-level approval system with dynamic routing and escalation management.",
    problem: "Manual approval processes caused delays and lacked audit trails. Complex routing rules based on amount, department, and geography.",
    solution: "Designed Power Automate flows with dynamic approval chains, parallel approvals, and automated escalations. Integrated email notifications and mobile approvals.",
    technologies: ["Power Automate", "Dynamics 365", "Azure Logic Apps", "SharePoint"],
    architecture: "Workflow-driven architecture with state machine pattern and audit logging.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "#",
    demo: "#"
  }
];

export const services = [
  {
    id: 1,
    title: "Dynamics 365 CRM Development",
    description: "End-to-end CRM implementation, customization, and optimization for your business needs.",
    features: ["Custom entity creation", "Form and view customization", "Business rule implementation", "Performance optimization"]
  },
  {
    id: 2,
    title: "Plugin Development",
    description: "Custom plugin development for complex business logic and validation requirements.",
    features: ["Pre/Post operation plugins", "Custom workflow activities", "Error handling", "Unit testing"]
  },
  {
    id: 3,
    title: "Power Platform Solutions",
    description: "Comprehensive Power Platform development including Power Apps, Power Automate, and Power Pages.",
    features: ["Canvas and Model-driven apps", "Automated workflows", "Custom connectors", "Portal development"]
  },
  {
    id: 4,
    title: "Azure Integrations",
    description: "Seamless integration with Azure services for extended functionality and scalability.",
    features: ["Azure Functions", "Logic Apps", "Service Bus integration", "Blob Storage"]
  },
  {
    id: 5,
    title: "API Development",
    description: "RESTful API development for integrating Dynamics 365 with external systems.",
    features: ["Web API customization", "OData queries", "Authentication", "Error handling"]
  },
  {
    id: 6,
    title: "Custom Solutions",
    description: "Tailored solutions designed to meet your specific business challenges and requirements.",
    features: ["Requirement analysis", "Solution architecture", "Implementation", "Support"]
  }
];

export const statistics = [
  { id: 1, number: 50, suffix: "+", label: "Projects Completed" },
  { id: 2, number: 25, suffix: "+", label: "Happy Clients" },
  { id: 3, number: 100, suffix: "+", label: "CRM Solutions" },
  { id: 4, number: 15, suffix: "+", label: "Certifications" }
];

export const certifications = [
  {
    id: 1,
    title: "Microsoft Dynamics 365 Fundamentals",
    issuer: "Microsoft",
    date: "2020",
    credentialId: "MB-910"
  },
  {
    id: 2,
    title: "Microsoft Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "2020",
    credentialId: "PL-900"
  },
  {
    id: 3,
    title: "Microsoft Certified: Dynamics 365 Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "MB-400"
  },
  {
    id: 4,
    title: "Microsoft Certified: Power Platform Developer Associate",
    issuer: "Microsoft",
    date: "2021",
    credentialId: "PL-400"
  },
  {
    id: 5,
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "AZ-900"
  },
  {
    id: 6,
    title: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "AZ-204"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "IT Director",
    company: "Global Enterprises Inc.",
    content: "Prajwal's expertise in Dynamics 365 transformed our sales operations. His attention to detail and technical prowess delivered a solution that exceeded our expectations. The system he built handles complex workflows seamlessly.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "TechVision Solutions",
    content: "Working with Prajwal was exceptional. He not only understood our technical requirements but also provided valuable insights that improved our business processes. His Power Platform solutions saved us countless hours.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Project Manager",
    company: "InnovateCorp",
    content: "Prajwal delivered a complex CRM implementation on time and within budget. His communication throughout the project was excellent, and he was always available to address concerns. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "David Kumar",
    role: "VP of Sales",
    company: "SalesPro Systems",
    content: "The lead management automation system Prajwal built has doubled our conversion rates. His understanding of both technology and business needs is impressive. A true professional.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Operations Manager",
    company: "Enterprise Solutions Ltd.",
    content: "Prajwal's custom plugins and workflows streamlined our approval processes significantly. His code quality and documentation are outstanding. We continue to work with him for ongoing enhancements.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop"
  }
];

export const manifesto = [
  {
    number: "01",
    title: "Innovation Through Technology",
    content: "Leveraging cutting-edge Microsoft technologies to build solutions that don't just meet requirements—they exceed expectations and drive business transformation."
  },
  {
    number: "02",
    title: "Quality Over Quantity",
    content: "Every line of code, every configuration, every solution is crafted with precision. Excellence isn't optional—it's the standard."
  },
  {
    number: "03",
    title: "Continuous Learning",
    content: "The Microsoft ecosystem evolves rapidly. Staying ahead means constant learning, experimentation, and adaptation to deliver the most current and effective solutions."
  },
  {
    number: "04",
    title: "Client Success is My Success",
    content: "True success is measured by the impact on your business—increased efficiency, better insights, and tangible ROI. Your success story is my mission."
  }
];