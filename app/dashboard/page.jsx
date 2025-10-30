'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
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
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Client Dashboard</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page will include features to submit requests, track project status, and download completed files.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-primary text-white hover:bg-primary/90">
              <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-muted">
              <a href="/#pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
