import { Experience } from "@/data/resumeData";

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Experience</h2>
      
      <div className="space-y-0">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className={index === 0 ? "timeline-dot-filled" : "timeline-dot"} />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <div>
                <h3 className="font-semibold" style={{ color: 'hsl(var(--resume-heading))' }}>
                  {exp.title}
                </h3>
                {exp.companyUrl ? (
                  <a href={exp.companyUrl} className="resume-link text-sm font-medium">
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: 'hsl(var(--resume-heading))' }}>
                    {exp.company}
                  </p>
                )}
              </div>
              <div className="text-sm text-muted-foreground sm:text-right mt-1 sm:mt-0">
                <p className="font-medium">{exp.dateRange}</p>
                <p>{exp.location}</p>
              </div>
            </div>
            
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm" style={{ color: 'hsl(var(--resume-text))' }}>
              {exp.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
