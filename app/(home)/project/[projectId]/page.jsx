'use client';

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";


const projectsDatabase = {
  "social-media-campaign": {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    description: "Cohesive Instagram and TikTok campaign for a lifestyle brand",
    longDescription:
      "A complete social media campaign designed to increase brand awareness and engagement across Instagram and TikTok platforms. The campaign featured consistent visual styling, compelling copy, and strategic content planning.",
    category: "Social Media",
    tools: ["Figma", "After Effects", "Adobe Photoshop"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23FF6B9D' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "The client needed to establish a strong presence on social platforms while maintaining brand consistency across different content formats and audience preferences.",
    solution:
      "We developed a comprehensive content strategy with a cohesive visual identity, created 30+ pieces of content tailored to each platform, and established posting guidelines for consistent engagement.",
    results: [
      "45% increase in Instagram followers",
      "120% improvement in engagement rate",
      "8M impressions on TikTok",
      "15 brand partnership inquiries",
    ],
  },
  "saas-landing-page": {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    description: "High-converting landing page for a productivity tool",
    longDescription:
      "A conversion-focused landing page designed for a B2B SaaS platform. The design emphasizes user benefits, includes clear CTAs, and utilizes social proof to drive sign-ups.",
    category: "Web Design",
    tools: ["Figma", "React", "Webflow"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%234ECDC4' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "The SaaS company needed to clearly communicate their complex product benefits to non-technical decision makers and drive qualified sign-ups.",
    solution:
      "We created a minimalist design focused on key value propositions, implemented animated elements to showcase features, added customer testimonials, and optimized the conversion funnel.",
    results: [
      "3.2% conversion rate",
      "2,500+ new sign-ups in first month",
      "Average session duration: 3m 45s",
      "Named a Webby Awards finalist",
    ],
  },
  "brand-poster": {
    id: "brand-poster",
    title: "Brand Poster",
    description: "Minimalist poster design for a fashion startup",
    longDescription:
      "A striking poster design that captures the essence of a modern fashion brand. The design uses bold typography, minimalist imagery, and a sophisticated color palette.",
    category: "Print",
    tools: ["Illustrator", "InDesign", "Photoshop"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23FFE66D' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "The fashion brand needed a print poster that would stand out in retail spaces while conveying their minimalist aesthetic and premium positioning.",
    solution:
      "We designed a clean, modern poster featuring bold typography, a curated color scheme, and subtle visual elements that reflect the brand's design philosophy.",
    results: [
      "Displayed in 50+ retail locations",
      "10,000+ posters printed and distributed",
      "Social media engagement on unveiling: 25K likes",
      "Featured in Design Magazine",
    ],
  },
  "corporate-brochure": {
    id: "corporate-brochure",
    title: "Corporate Brochure",
    description: "Multi-page brochure for B2B consulting firm",
    longDescription:
      "A comprehensive corporate brochure designed to showcase the expertise and services of a management consulting firm. The brochure includes company overview, service descriptions, case studies, and contact information.",
    category: "Print",
    tools: ["InDesign", "Photoshop", "Illustrator"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%235E72E4' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "Create a professional brochure that communicates expertise while being visually engaging and easy to navigate for busy executives.",
    solution:
      "We designed a 12-page brochure with clear information hierarchy, professional photography, case study highlights, and a premium feel that reflected the consulting firm's positioning.",
    results: [
      "300% increase in inbound leads",
      "Used in 50+ client pitches",
      "90% retention rate in target audience",
      "Reprinted 3 times due to demand",
    ],
  },
  "logo-icon-set": {
    id: "logo-icon-set",
    title: "Logo & Icon Set",
    description: "Complete logo system with accompanying icon library",
    longDescription:
      "A comprehensive brand identity system including a primary logo, logo variations, and a complete icon set for use across digital and print applications.",
    category: "Branding",
    tools: ["Illustrator", "Figma", "Adobe XD"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23A78BFA' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "Develop a versatile logo and icon system that works across all brand touchpoints while maintaining consistency and scalability.",
    solution:
      "We created a flexible logo system with multiple variations for different applications, developed 60+ icons in consistent style, and provided comprehensive guidelines.",
    results: [
      "Logo used across 100+ brand touchpoints",
      "Icon set used in product and marketing",
      "Brand recognition increased 85%",
      "Design system adopted company-wide",
    ],
  },
  "mobile-app-ui": {
    id: "mobile-app-ui",
    title: "Mobile App UI",
    description: "Complete design system for a fitness tracking application",
    longDescription:
      "A comprehensive design system and complete user interface for a mobile fitness tracking application. Includes onboarding flow, workout tracking, progress analytics, and social features.",
    category: "App Design",
    tools: ["Figma", "Protopie", "After Effects"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%2306D6A0' width='800' height='600'/%3E%3C/svg%3E",
    challenges:
      "Design an intuitive interface for tracking fitness data while keeping users engaged and motivated to achieve their health goals.",
    solution:
      "We created a modern design system with reusable components, designed an intuitive navigation structure, added motivational gamification elements, and optimized for mobile accessibility.",
    results: [
      "1M+ app downloads",
      "4.8/5 star rating",
      "92% user retention after 30 days",
      "Featured in App Store",
    ],
  },
};

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params?.projectId;

  const project = projectId ? projectsDatabase[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-white">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  D
                </div>
                <span className="font-bold text-xl text-foreground">DesignHub</span>
              </Link>
              <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </nav>
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
            <Button className="bg-primary text-white hover:bg-primary/90">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="font-bold text-xl text-foreground">DesignHub</span>
            </Link>
            <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-muted">
              <Link href="/#portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground">{project.longDescription}</p>
          </div>

          {/* Project Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-16 bg-muted h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tools Used */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-secondary/20 text-secondary px-4 py-2 rounded-lg font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Challenge</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Solution</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg text-foreground font-semibold">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-16 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to create something amazing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our design expertise.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
                Start Your Project
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-6 text-lg">
                <Link href="/#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
