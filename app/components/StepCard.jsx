
export default function StepCard({ number, title, description, icon }) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            {number}
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-lg -z-10" />
        </div>

        <div className="text-4xl mb-4 text-primary">{icon}</div>

        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground max-w-xs">{description}</p>
      </div>
    </div>
  );
}
