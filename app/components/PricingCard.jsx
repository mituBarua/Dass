import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function PricingCard({
  name,
  price,
  description,
  features,
  cta = "Start Now",
  highlighted = false,
}) {
  return (
    <div
      className={`rounded-lg card-hover transition-all duration-300 ${
        highlighted
          ? "bg-primary text-white border-2 border-primary shadow-lg scale-105"
          : "bg-white border border-border"
      }`}
    >
      <div className="p-8">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? "text-white" : "text-foreground"}`}>
          {name}
        </h3>
        <p className={`text-sm mb-6 ${highlighted ? "text-white/80" : "text-muted-foreground"}`}>
          {description}
        </p>

        <div className="mb-6">
          <span
            className={`text-4xl font-bold ${highlighted ? "text-white" : "text-foreground"}`}
          >
            ${price}
          </span>
          <span className={`text-sm ${highlighted ? "text-white/80" : "text-muted-foreground"}`}>
            /month
          </span>
        </div>

   
       <Link href="/payment"
          className={`p-2 flex items-center justify-center rounded-md mb-8 button-hover ${
            highlighted
              ? "bg-white text-primary hover:bg-gray-100"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {cta}
        </Link>

        <div className="space-y-3">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <svg
                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? "text-white" : "text-primary"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span
                className={`text-sm ${highlighted ? "text-white/90" : "text-foreground/80"}`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
