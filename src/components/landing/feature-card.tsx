export interface Features {
  vector: string;
  name: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FeatureCard({
  vector,
  name,
  description,
  className,
  style,
}: Features) {
  return (
    <article className={className} style={style}>
      <div
        className="bg-accent p-5 rounded-full border-muted-foreground mb-4"
        dangerouslySetInnerHTML={{ __html: vector }}
      />
      <h2 className="font-bold text-3xl text-center my-3">{name}</h2>
      <p className="text-center text-muted-foreground">{description}</p>
    </article>
  );
}
