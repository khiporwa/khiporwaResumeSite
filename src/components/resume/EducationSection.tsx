import { Education } from "@/data/resumeData";

interface EducationSectionProps {
  education: Education[];
}

const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Education</h2>
      
      <div className="space-y-0">
        {education.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-dot" />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold text-sm" style={{ color: 'hsl(var(--resume-text))' }}>
                  {edu.degree}
                </h3>
                <p className="text-sm resume-link">{edu.institution}</p>
              </div>
              <div className="text-sm text-muted-foreground sm:text-right mt-1 sm:mt-0">
                <p className="font-medium">{edu.dateRange}</p>
                <p>{edu.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
