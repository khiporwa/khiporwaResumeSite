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
    email: "khiteshporwal@gmail.com",
    portfolio: "https://khiteshporwal.myportfolio.app",
    location: "Hyderabad, India",
  },
  summary: `I am a dynamic software engineer based in Hyderabad with 10 years of experience, including 5.5 years with one of India's leading IT services companies, where I honed my skills in .NET, web development, SQL, API integration, web APIs, data management, cloud technologies, vendor integration, client communication, and server management. My profile exhibits proven ability to deliver high-quality solutions along with strong problem-solving abilities and expertise in .NET and cloud technologies, and I am seeking new opportunities to further expand my knowledge by exploring innovative technologies in the industry.`,
  experience: [
    {
      id: "exp-1",
      dateRange: "08/2024 - Present",
      location: "Hyderabad, India",
      title: "Software Engineer",
      company: "VeriSlab B. College",
      companyUrl: "#",
      highlights: [
        "Have Module in VeriSlab is Oracle B2B Integration application, for file rename along with ERP integration, applications, EDI integration and enterprise system automation. The system included API integration for e-Commerce platforms, marketplaces, OMS, CRMs, and payment solutions - integrating with APIs from products like Shopify, Amazon, eBay, Walmart, Magento, Salesforce, etc.",
        "Enterprise Integration Development: Migrated Oracle ICS and Jitterbit to Oracle cloud platforms using Mulesoft APIs integration services to on-premise backend systems, like Salesforce, Oracle NETSUITE, Warehouse Systems, Oracle MVC CIS, SAP Billing, Microsoft Dynamics, CW, Shopify, Walmart, etc.",
        "Celigo iPaaS Implementation: In-house and third-party system and product integrations using Celigo Integrator.io using REST/SOAP APIs, SFTP-based integration, error handling and alerting, data mapping, scheduling, and Flows to automate business critical processes with ERP systems, like NetSuite, Shopify, SAP and custom data processing tools.",
        "ERP & Order Management Support: Supported enterprise EDI system workflows and order lifecycle processes for multi-channel fulfillment, warehousing, and inventory flow control for ERP systems with NetSuite, Oracle EBS, SAP, Salesforce and Oracle JD Edwards systems; custom API integration, error handling, and data mapping.",
        "Project & Development Management: Trained and executed integration projects for ERP systems, milestones, deliverables, timelines, and collaboration strategies for stakeholders, developers, QA teams, and client teams.",
      ],
    },
    {
      id: "exp-2",
      dateRange: "03/2022 - 08/2024",
      location: "Hyderabad, India",
      title: "Implementation Engineer",
      company: "VendorBridge Pvt Ltd",
      companyUrl: "#",
      highlights: [
        "Celigo Integration Engineering and API Integration",
        "Achieved Celigo certification in Integration for Sales-related warehousing API integration use cases",
        "Received improvement in weekly 10% under API integration, enabling 1.5x faster response and overall around 6% decrease in API request timeouts and improved accuracy of 8%",
        "Proficient in web or console apps and end-to-end integration patterns for Business Central, S1 Microsoft integration, and enhanced integration performance by 25%",
        "Configuration of Source Systems and integration support to the design team",
      ],
    },
    {
      id: "exp-3",
      dateRange: "06/2021 - 03/2022",
      location: "Hyderabad, India",
      title: "Associate Implementation Engineer",
      company: "VendorBridge Pvt Ltd",
      companyUrl: "#",
      highlights: [
        "Implementation (Celigo Integration, Engineering, and Support)",
        "Developed and improved data processing methodology by 5x time",
        "Led and drove 30% faster project delivery by implementing Celigo in flows",
        "Configured Source System to sync data of Magento2 to NetSuite for sales related entities in 15% better performance",
        "Integrated Shopify to Celigo Shopify to NetSuite connections",
        "API endpoint and system-to-system implementation, data processing, data import/export by API and auto sync",
      ],
    },
    {
      id: "exp-4",
      dateRange: "10/2017 - 04/2022",
      location: "Hyderabad, India",
      title: "UI Developer / PIC",
      company: "Amazon Development Centre Private Limited",
      highlights: [
        "UI Frontend is next-gen UI project for AMZ internal system tools",
        "Developed SV-Frontend tools, inventory tools, pod fulfillment and allocation tools",
        "Trained Junior developers, helping them get certified on Amazon SV fulfillment center experience",
        "Integrated micro-frontend apps to enhance processes, amazon-attributes, and amazon dashboard",
      ],
    },
    {
      id: "exp-5",
      dateRange: "04/2016 - 10/2018",
      location: "Hyderabad, India",
      title: "Developer",
      company: "Fusion Informatics",
      highlights: [
        "Web development in .NET with business logic implementation",
        "Worked on .NET Front-end and Custom C# integrations",
        "Backend Desi Project, ASP.Net Channel Expertise",
        "Full-stack skills in .NET + angular technologies for web processing and mobile data integration",
        "Multiple project skill sets in .NET technologies",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      dateRange: "06/2016 - 10/2021",
      location: "Hyderabad, India",
      degree: "Bachelor's of Commerce: Mathematics and Commerce",
      institution: "Loyola Academy Degree & PG College",
    },
  ],
  languages: [
    { name: "English", written: 5, verbal: 5 },
    { name: "Hindi", written: 5, verbal: 5 },
    { name: "Native", written: 5, verbal: 5 },
  ],
  skills: [
    {
      skills: [
        { name: "Oracle NetSuite ERP", years: "4+ Years" },
        { name: "Celigo Integrator.IO", years: "4+ Years" },
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
        { name: "Stripe" },
        { name: "Shopify" },
        { name: "Amazon" },
        { name: "Walmart" },
        { name: "eBay" },
      ],
    },
  ],
  interests: [
    {
      id: "int-1",
      icon: "gamepad",
      title: "Game Design & Development",
      description: "Front-end / indie game dev and designer, anime design & animation lover",
    },
    {
      id: "int-2",
      icon: "trending-up",
      title: "Stock Market Trading & Investing",
      description: "Options and F&O in the stock market and markets",
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
      description: "Film making & 3D graphics",
    },
    {
      id: "int-5",
      icon: "trophy",
      title: "Chess",
      description: "Chess enthusiast",
    },
  ],
};
