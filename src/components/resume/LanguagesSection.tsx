import { Language } from "@/data/resumeData";

interface LanguagesSectionProps {
  languages: Language[];
}

const ProficiencyDots = ({ level, label }: { level: number; label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground w-12">{label}</span>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`proficiency-dot ${
              dot <= level ? "proficiency-dot-filled" : "proficiency-dot-empty"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const LanguagesSection = ({ languages }: LanguagesSectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Languages</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {languages.map((lang) => (
          <div key={lang.name} className="space-y-2">
            <h3 className="font-semibold text-sm" style={{ color: 'hsl(var(--resume-text))' }}>
              {lang.name}
            </h3>
            <div className="space-y-1">
              <ProficiencyDots level={lang.written} label="Written" />
              <ProficiencyDots level={lang.verbal} label="Verbal" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
