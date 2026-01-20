interface SummarySectionProps {
  summary: string;
}

const SummarySection = ({ summary }: SummarySectionProps) => {
  return (
    <section className="mb-8">
      <h2 className="resume-section-title">Summary</h2>
      <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--resume-text))' }}>
        {summary}
      </p>
    </section>
  );
};

export default SummarySection;
