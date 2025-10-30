import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import "../global.css";

import Navbar from "../components/Navbar";
import { dbConnect } from "../../service/mongo";
import SessionProviderWrapper from "../providers/SessionProviderWrapper";
export const metadata = {
  title: "DesignHub - Your On-Demand Design Team",
  description:
    "Unlimited designs, fast turnaround, flat monthly fee. Subscribe to our design service today.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
       <SessionProviderWrapper>
               <TooltipProvider>
                 <Toaster />
                 <Sonner />
                 
                    {children}
                 
                
               </TooltipProvider>
              </SessionProviderWrapper>
      </body>
    </html>
  );
}
