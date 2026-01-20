import { SkillCategory } from "@/data/resumeData";

interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}

const SkillsSection = ({ skillCategories }: SkillsSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Skills</h2>
      
      {skillCategories.map((category, catIdx) => (
        <div key={catIdx} className="mb-4 last:mb-0">
          {category.name && (
            <h3 className="font-semibold text-sm mb-2" style={{ color: 'hsl(var(--resume-text))' }}>
              {category.name}
            </h3>
          )}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIdx) => (
              <span key={skillIdx} className="skill-tag">
                {skill.name}
                {skill.years && (
                  <span className="text-muted-foreground ml-1">({skill.years})</span>
                )}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SkillsSection;
