export interface ContactInfo {
  email: string;
  portfolio?: string;
  location: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Experience {
  id: string;
  dateRange: string;
  location: string;
  title: string;
  company: string;
  companyUrl?: string;
  highlights: string[];
}

export interface Education {
  id: string;
  dateRange: string;
  location: string;
  degree: string;
  institution: string;
}

export interface Language {
  name: string;
  written: number; // 1-5
  verbal: number; // 1-5
}

export interface Skill {
  name: string;
  years?: string;
}

export interface SkillCategory {
  name?: string;
  skills: Skill[];
}

export interface Interest {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contact: ContactInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  languages: Language[];
  skills: SkillCategory[];
  interests: Interest[];
}

export const resumeData: ResumeData = {
  name: "KHITESH PORWAL",
  title: "Software Engineer",
  contact: {
    email: "khiteshjainofficial@gmail.com",
    portfolio: "https://khiteshporwal.netlify.app/",
    location: "Hyderabad, India",
  },
  summary: `I am a dynamic software engineer with 5+ years of professional industry experience and 4 years specialized expertise in NetSuite ERP and Celigo integration platforms. My technical proficiency encompasses EDI implementations, 
  3PL logistics integrations, and marketplace connectivity solutions. I excel in multitasking and stakeholder communication while delivering robust solutions across iPaaS platforms, 
  SaaS ecosystems, middleware technologies, data migration projects, and enterprise application integration.`,
  experience: [
    {
      id: "exp-1",
      dateRange: "08/2024 - Present",
      location: "Hyderabad, India",
      title: "Software Engineer (NetSuite & Celigo 4 Years)",
      company: "Novamodule Pvt Ltd",
      companyUrl: "#",
      highlights: [
        "Nova Module is a NetSuite Alliance & SDN Partner and Celigo Elite Partner specializing in Oracle NetSuite ERP implementation, Celigo Integrator.io development, EDI integrations, and enterprise system automation. The company delivers scalable solutions integrating eCommerce platforms, marketplaces, 3PLs, CRMs, and payment systems, enabling seamless data synchronization, operational efficiency, and business scalability for global clients.",
        "Enterprise Integration Development: Designed, developed, and deployed end-to-end Oracle NetSuite ERP integrations with major marketplaces and eCommerce platforms including Amazon, Shopify, Walmart, eBay, BigCommerce, WooCommerce, Square, ensuring accurate order, inventory, fulfillment, and financial data flow.",
        "Celigo iPaaS Implementation: Architected and implemented custom and pre-built integrations using Celigo Integrator.io, leveraging REST/SOAP APIs, JSON data transformation, error handling, scheduling, and monitoring to deliver scalable, fault-tolerant integration solutions.",
        "3PL & WMS Automation: Built and managed custom third-party logistics (3PL) and Warehouse Management System (WMS) integrations (e.g., ShipStation, Centric, Snowflake-based pipelines), automating order fulfillment, shipment tracking, inventory synchronization, and ASN workflows to optimize supply chain operations.",
        "Custom Integration Solutions: Developed bespoke integration flows for non-standard logistics providers and partner systems, implementing business-specific mapping, transformation logic, and exception handling to meet complex operational requirements.",
        "Real-Time & Near Real-Time Synchronization: Implemented real-time and event-driven data synchronization across ERP, eCommerce, CRM, and WMS systems to ensure data consistency, accuracy, and operational visibility.",
        "CRM & Downstream System Integration: Integrated NetSuite with CRM platforms to enable unified customer data, synchronized sales orders, invoices, and customer records, improving sales operations and reporting accuracy.",
        "Data Warehouse & Analytics Integration: Designed integrations between data warehouses and NetSuite/CRM systems, enabling centralized reporting, analytics, and business intelligence through structured and automated data pipelines.",
        "EDI & Order Management Support: Supported and enhanced EDI-driven workflows and order lifecycle processes, ensuring seamless exchange of transactional data between trading partners, marketplaces, and backend ERP systems.",
        "Implementation & Client Enablement: Delivered end-to-end implementation support, including requirements analysis, solution design, UAT support, deployment, post-go-live stabilization, documentation, and knowledge transfer to client technical and operations teams.",
        "Project & Stakeholder Management: Planned and executed integration projects by defining scope, milestones, deliverables, timelines, and risk mitigation strategies, collaborating closely with cross-functional teams and external stakeholders.",
        "Platform Certification & Expertise: Celigo-certified Integration Apps specialist, demonstrating advanced expertise in configuring, optimizing, and extending Celigo solutions to streamline enterprise workflows and improve system interoperability.",


      ],
    },
    {
      id: "exp-2",
      dateRange: "03/2023 - 08/2024",
      location: "Hyderabad, India",
      title: "Implementation Engineer",
      company: "Novamodule Pvt Ltd",
      companyUrl: "#",
      highlights: [
        "Achieved Celigo Certified Level 5x Engineer Status, attained Level 5x certification from Celigo, demonstrating top tier expertise in the platform.",

        "Enhanced project efficiency and client satisfaction by 20%.",

        "Orchestrated seamless integration between multiple APIs including Shopify, WooCommerce, eBay, LoopReturns, Walmart, Bergen Logistics, Amazon, and Orderful EDI.",

        "Reduced manual errors by 50% in order fulfillment processes, resulting in a 15% decrease in operational costs and a 10% increase in order processing speed.",

        "Provided end-to-end support for software implementation life cycles, improved client retention by 30% and reduced implementation time by 25%.",

        "Collaborated on system audits for timely implementations, decreased project delays by 20% and increased project success rates by 15%.",

        "Configured and executed system software changes, increased system reliability and client satisfaction by 10%.",

        "Inspected software changes to reduce post-deployment issues, decreased post-deployment issues by 40% and lowered support costs by 20%.",

        "Performed comprehensive process testing and documentation, prepared detailed documentation, reducing onboarding time for new team members by 30%.",

        "Designed and implemented system security and data assurance, developed robust system security measures and data assurance protocols, decreased security incidents by 25% and increased client trust by 20%.",
      ],
    },
    {
      id: "exp-3",
      dateRange: "06/2022 - 03/2023",
      location: "Hyderabad, India",
      title: "Associate Implementation Engineer",
      company: "Novamodule Pvt Ltd",
      companyUrl: "#",
      highlights: [
        "Provided end-to-end support for cloud implementation life cycles, ensuring smooth deployment and successful adoption.",

        "Collaborated on system audits to ensure timely implementation and adherence to best practices.",

        "Configured and executed system integration updates, improving reliability and enhancing client satisfaction by 10%.",

        "Reviewed integration changes to minimize post-deployment issues and improve system stability.",

        "Conducted comprehensive process testing and documentation, reducing onboarding time for new team members by 30%.",

        "Designed and implemented system security and data assurance protocols, reducing security incidents by 25% and increasing client trust by 20%.",
      ],
    },
    {
      id: "exp-4",
      dateRange: "10/2021 - 04/2022",
      location: "Hyderabad, India",
      title: "VCS Associate (IP)",
      company: "Amazon Development Centre Private Limited",
      highlights: [
        "Contributed to operations at a leading e-commerce organization, delivering high-quality customer service in a fast-paced environment.",

        "Demonstrated strong time management skills, consistently meeting tight deadlines while maintaining service quality and accuracy.",

        "Applied critical thinking to analyze issues, evaluate solutions, and make informed decisions to improve workflow efficiency.",

        "Supported daily order processing and customer queries, ensuring timely resolution and customer satisfaction.",

        "Collaborated with cross-functional teams to address customer concerns and streamline internal processes.",

        "Maintained accurate documentation and records, ensuring data integrity and operational transparency.",

        "Proactively identified process gaps and suggested improvements to enhance team productivity and reduce errors.",
      ],
    },
    {
      id: "exp-5",
      dateRange: "06/2020 - 12/2020",
      location: "Hyderabad, India",
      title: "UI/UX Artist",
      company: "Saburi Informatics",
      highlights: [
        "Pioneered emerging UI/UX trends and effectively addressed design challenges to deliver innovative solutions.",

        "Designed client-centric UI/UX interfaces with a strong focus on usability and visual appeal.",

        "Created subtle, engaging UI/UX designs that aligned with client expectations while enhancing creative output.",

        "Identified and resolved UI/UX issues by applying user-focused design principles and best practices.",

        "Conducted user research and feedback analysis to improve interface functionality and user satisfaction.",

        "Collaborated with stakeholders to translate business requirements into intuitive UI/UX designs.",

        "Developed wireframes, prototypes, and design mockups to communicate concepts clearly and effectively.",

        "Ensured design consistency by maintaining UI guidelines, style guides, and visual standards.",

        "Optimized UI/UX elements for better accessibility and improved overall user experience.",

        "Iterated designs based on usability testing and stakeholder feedback to achieve continuous improvement.",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      dateRange: "06/2018 - 06/2021",
      location: "Hyderabad, India",
      degree: "Bachelor's of science: Multimedia & Animation",
      institution: "Loyola Academy Degree & PG College",
    },
  ],
  languages: [
    { name: "English", written: 5, verbal: 5 },
    { name: "Hindi", written: 5, verbal: 5 },
    // { name: "Native", written: 5, verbal: 5 },
  ],
  skills: [
    {
      skills: [
        { name: "Oracle NetSuite ERP", years: "4 Years" },
        { name: "Celigo Integrator.IO", years: "4 Years" },
        { name: "3PL Systems (Versatile)" },
        { name: "Stripe" },
        { name: "Shopify" },
        { name: "Amazon" },
        { name: "Walmart" },
        { name: "eBay" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JSON" },
        { name: "REST/SOAP APIs" },
        { name: "Agile Methodologies" },
        { name: "Version Control" },
        { name: "UX/UI Design" },
        { name: "Git" },
        { name: "Android Studio" },
        { name: "Communication" },
        { name: "Problem Solving" },
        { name: "Framework" },
        { name: "Python" },
        { name: "Java/JScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "SQL" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Data Analysis" },
        { name: "Excel" },
        { name: "Word" },
        { name: "PowerPoint" },
        { name: "EPL System" },
        { name: "iPaaS Architecture" },
        { name: "EDI (Electronic Data Interchange)" },
        { name: "Postman Tool API" },
        { name: "Adobe Creative Suite" },
        { name: "Front-End UI/UX" },
        { name: "MySQL" },
        { name: "Objective-C" },
        { name: "Data Integrity" },
        { name: "Google Cloud" },
        { name: "AWS services" },
      
      ],
    },
  ],
  interests: [
    {
      id: "int-1",
      icon: "gamepad",
      title: "Game Design & Development",
      description: "Indie game dev and 3D artist",
    },
    {
      id: "int-2",
      icon: "trending-up",
      title: "Stock Market Trading & Investing",
      description: "Intraday, money market & financial market - Investigator",
    },
    {
      id: "int-3",
      icon: "globe",
      title: "Traveling & Cultural Exploration",
      description: "Exploring new places & cultures",
    },
    {
      id: "int-4",
      icon: "film",
      title: "Film Making & 3D Animation",
      description: "Film making & 3D visual a rtist",
    },
    {
      id: "int-5",
      icon: "trophy",
      title: "Chess",
      description: "Chess enthusiast",
    },
  ],
};
