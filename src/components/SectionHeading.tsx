interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionHeading = ({ title, subtitle, className = "" }: Props) => (
  <div className={`text-center mb-16 ${className}`}>
    <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">{title}</h2>
    <div className="section-divider mb-5" />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeading;
