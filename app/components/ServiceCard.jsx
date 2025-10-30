
export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="card-hover group p-6 bg-white border border-border rounded-lg">
      <div className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
