import { Mail, Globe, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { ContactInfo } from "@/data/resumeData";

interface ResumeHeaderProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

const ResumeHeader = ({ name, title, contact }: ResumeHeaderProps) => {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold text-foreground tracking-wide mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {name}
      </h1>
      <p className="text-lg text-muted-foreground mb-4">{title}</p>
      
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <a href={`mailto:${contact.email}`} className="flex items-center gap-1.5 resume-link">
          <Mail className="w-4 h-4" />
          {contact.email}
        </a>
        
        {contact.portfolio && (
          <a href={contact.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 resume-link">
            <Globe className="w-4 h-4" />
            {contact.portfolio.replace('https://', '')}
          </a>
        )}
        
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" />
          {contact.location}
        </span>
        
        {contact.phone && (
          <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 resume-link">
            <Phone className="w-4 h-4" />
            {contact.phone}
          </a>
        )}
        
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 resume-link">
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        )}
        
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 resume-link">
            <Github className="w-4 h-4" />
            GitHub
          </a>
        )}
      </div>
    </header>
  );
};

export default ResumeHeader;
