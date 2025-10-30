'use client'
import Link from "next/link";

import { Button } from "./ui/button";

import Logout from "./auth/Logout";

import { useSession} from "next-auth/react";
const Navbar = ({ sideMenu }) => {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              D
            </div>
            <span className="font-bold text-xl text-foreground">DesignHub</span>
          </Link>
          {sideMenu && (
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                About
              </a>
              <Button
                size="sm"
                className="bg-primary text-white hover:bg-primary/90 button-hover"
              >
                Get Started
              </Button>

              <li>
                {session?.user ? (
                  <div>
                    <span className="mx-1"> {session?.user?.name} </span>
                    <span> | </span>
                    <Logout />
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    Login
                  </Link>
                )}
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
