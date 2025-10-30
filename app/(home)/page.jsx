'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import StepCard  from "../components/StepCard";
import  ServiceCard  from "../components/ServiceCard";
import  PortfolioCard  from "../components/PortfolioCard";
import PricingCard from "../components/PricingCard";
import Testimonial  from "../components/Testimonial";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";



const portfolioProjects = [
  {
    id: "social-media-campaign",
    title: "Social Media Campaign",
    description: "Cohesive Instagram and TikTok campaign for a lifestyle brand",
    category: "Social Media",
    tools: ["Figma", "After Effects"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FF6B9D' width='400' height='300'/%3E%3C/svg%3E",
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    description: "High-converting landing page for a productivity tool",
    category: "Web Design",
    tools: ["Figma", "React"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%234ECDC4' width='400' height='300'/%3E%3C/svg%3E",
  },
  {
    id: "brand-poster",
    title: "Brand Poster",
    description: "Minimalist poster design for a fashion startup",
    category: "Print",
    tools: ["Illustrator", "InDesign"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23FFE66D' width='400' height='300'/%3E%3C/svg%3E",
  },
  {
    id: "corporate-brochure",
    title: "Corporate Brochure",
    description: "Multi-page brochure for B2B consulting firm",
    category: "Print",
    tools: ["InDesign", "Photoshop"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%235E72E4' width='400' height='300'/%3E%3C/svg%3E",
  },
  {
    id: "logo-icon-set",
    title: "Logo & Icon Set",
    description: "Complete logo system with accompanying icon library",
    category: "Branding",
    tools: ["Illustrator", "Figma"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23A78BFA' width='400' height='300'/%3E%3C/svg%3E",
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI",
    description: "Complete design system for a fitness tracking application",
    category: "App Design",
    tools: ["Figma", "Protopie"],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2306D6A0' width='400' height='300'/%3E%3C/svg%3E",
  },
];

const categories = ["All", "Social Media", "Web Design", "Print", "Branding", "App Design"];

export default function Home() {
  const [email, setEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactName("");
    setContactEmail("");
    setContactMessage("");
  };

  return (
    <div className="w-full">
      {/* Navigation */}
    <Navbar sideMenu={true}/>

     <HeroSection/>

      {/* How It Works Section */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, streamlined, and designed for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <StepCard
              number={1}
              title="Submit Your Design Request"
              description="Fill out a simple form describing your design needs, goals, and preferences"
              icon="📝"
            />
            <div className="hidden md:flex items-center justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <StepCard
              number={2}
              title="Designers Get to Work"
              description="Our talented team gets started immediately on your project"
              icon="🎨"
            />
            <div className="hidden md:flex items-center justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
            <StepCard
              number={3}
              title="Review & Revise"
              description="Get your designs, provide feedback, and request unlimited revisions"
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for complete brand and digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a2 2 0 00-1 .267V21" />
                </svg>
              }
              title="Brand Identity"
              description="Logos, color palettes, typography systems, and complete brand guidelines"
            />
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Web & App Design"
              description="Landing pages, user interfaces, mobile apps, and interactive prototypes"
            />
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              title="Marketing Materials"
              description="Social media posts, ads, email templates, eBooks, and promotional content"
            />
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Print Collateral"
              description="Brochures, posters, business cards, packaging, and print-ready assets"
            />
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2 1m2-1l-2-1m2 1v2.5" />
                </svg>
              }
              title="Illustrations & Icons"
              description="Custom graphics, vector illustrations, and icon sets for your brand"
            />
            <ServiceCard
              icon={
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
              title="Video & Motion"
              description="GIFs, animations, video editing, and motion graphics for web and social"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked projects showcasing our design excellence
            </p>
          </div>

          <Tabs defaultValue="All" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}  className="text-sm px-4 py-2 rounded-md 
                         data-[state=active]:bg-foreground 
                         data-[state=active]:text-white 
                         data-[state=active]:shadow-md 
                         hover:bg-accent hover:text-white 
                         transition-colors duration-200">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioProjects
                    .filter((project) =>
                      category === "All" ? true : project.category === category
                    )
                    .map((project) => (
                      <Link key={project.id} href={`/project/${project.id}`}>
                        <PortfolioCard
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          category={project.category}
                          tools={project.tools}
                          image={project.image}
                        />
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            <PricingCard
              name="Basic"
              price={499}
              description="Perfect for startups"
              features={[
                "Up to 4 design requests/month",
                "2-3 business day turnaround",
                "Unlimited revisions",
                "Design files included",
                "Email support",
              ]}
            />
            <PricingCard
              name="Professional"
              price={999}
              description="Most popular"
              features={[
                "Up to 8 design requests/month",
                "24-48 hour turnaround",
                "Unlimited revisions",
                "Design files & source",
                "Priority email & chat support",
                "Dedicated designer",
                "Brand guidelines included",
              ]}
              highlighted
            />
            <PricingCard
              name="Enterprise"
              price={2499}
              description="For growing agencies"
              features={[
                "Unlimited design requests",
                "Same-day turnaround",
                "Unlimited revisions",
                "All file formats",
                "24/7 phone support",
                "Dedicated team",
                "Custom workflows",
                "Quarterly strategy calls",
              ]}
            />
          </div>

          <div className="mt-16 bg-white border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Optional Add-ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Priority Support</p>
                  <p className="text-sm text-muted-foreground">$99/month - Skip the queue</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-border rounded-lg">
                <input type="checkbox" className="mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Dedicated Designer</p>
                  <p className="text-sm text-muted-foreground">$299/month - Single point of contact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="DesignHub completely transformed our brand. The quality and speed exceeded our expectations. Highly recommend!"
              author="Sarah Chen"
              company="TechStart Inc."
            />
            <Testimonial
              quote="We've tried many design agencies, but DesignHub's unlimited revisions and dedicated support set them apart."
              author="Marcus Johnson"
              company="Growth Marketing Co."
            />
            <Testimonial
              quote="The flat monthly fee model eliminated our design budget headaches. Our in-house team loves working with them."
              author="Emily Rodriguez"
              company="Creative Studios"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About DesignHub
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Empowering businesses with on-demand design services since 2020. We believe that great design should be accessible to everyone, regardless of size or budget.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of world-class designers is passionate about creating beautiful, functional designs that drive real business results.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Core Values</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground">Quality First</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-foreground">Efficiency & Speed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-foreground">Collaboration & Communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg h-48 flex items-center justify-center text-white font-semibold text-center p-4">
                50+ Designers
              </div>
              <div className="bg-gradient-to-br from-secondary to-primary rounded-lg h-48 flex items-center justify-center text-white font-semibold text-center p-4">
                500+ Projects
              </div>
              <div className="bg-gradient-to-br from-accent to-secondary rounded-lg h-48 flex items-center justify-center text-white font-semibold text-center p-4">
                98% Happy Clients
              </div>
              <div className="bg-gradient-to-br from-primary/80 to-accent/80 rounded-lg h-48 flex items-center justify-center text-white font-semibold text-center p-4">
                Award Winning
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6 mb-12">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                required
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90 button-hover py-3"
            >
              Send Message
            </Button>
          </form>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for design tips, case studies, and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-primary/30 bg-white focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                className="bg-primary text-white hover:bg-primary/90 button-hover px-6"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center font-bold text-lg text-foreground">
                  D
                </div>
                <span className="font-bold text-lg">DesignHub</span>
              </div>
              <p className="text-sm text-white/70">
                Your on-demand design partner for unlimited creativity.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Services</a></li>
                <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-center text-sm text-white/70">
              &copy; 2024 DesignHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
