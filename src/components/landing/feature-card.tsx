export interface Features {
  vector: string;
  name: string;
  description: string;
}

export default function FeatureCard({ vector, name, description }: Features) {
  return (
    <article className="bg-accent-foreground flex flex-col items-center border px-5 py-10 rounded-lg shadow-md flex-grow">
      <div
        className="bg-accent p-5 rounded-full border-muted-foreground mb-4"
        dangerouslySetInnerHTML={{ __html: vector }}
      />
      <h2 className="font-bold text-3xl text-center my-3">{name}</h2>
      <p className="text-center text-muted-foreground">{description}</p>
    </article>
  );
}
