

export default function PortfolioCard({
  id,
  title,
  description,
  category,
  tools,
  image,
  onClick,
}) {
  return (
    <div
      className="card-hover group rounded-lg overflow-hidden bg-white border border-border cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tools.map((tool, idx) => (
            <span
              key={idx}
              className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
