interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-canopee text-6xl lg:text-8xl text-text-color mb-8">
          {title}
        </h1>
        <p className="font-palatino text-xl text-text-color mb-8">
          Cette page est en cours de construction. Continuez à me donner des instructions pour remplir le contenu de cette page.
        </p>
        <div className="w-32 h-1 bg-primary-green mx-auto"></div>
      </div>
    </div>
  );
}
