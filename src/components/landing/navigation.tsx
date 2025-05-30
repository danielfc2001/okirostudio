"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/blog", label: "Blog" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLocation(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="OkiroStudio">
          <Logo
            className={`${
              (location === "/" && isScrolled) || location !== "/"
                ? `fill-primary`
                : `fill-white`
            } h-10 w-auto dark:fill-white dark:text-white`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                location === "/" && !isScrolled && "text-white"
              } text-sm font-medium transition-colors hover:text-primary px-3 py-2`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="outline" className="ml-2">
            <Link href="/#subscribe">
              <Mail className="mr-2 h-4 w-4" />
              Subscribete
            </Link>
          </Button>
          <div
            className={`${
              location === "/" && !isScrolled && "text-white"
            } ml-2`}
          >
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetTitle className="hidden">Menu</SheetTitle>
            <SheetContent side="right" className="w-[280px] flex flex-col p-0">
              <div className="p-6 border-b flex justify-between items-center">
                <Link
                  href="/"
                  aria-label="MarkDev Home"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Logo className="fill-primary dark:fill-white h-8 w-auto" />
                </Link>
                {/*                 <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button> */}
              </div>
              <nav className="flex-grow p-4">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2 px-3 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <Button asChild variant="default" className="w-full mt-6">
                  <Link
                    href="/#subscribe"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Subscribe
                  </Link>
                </Button>
              </nav>
              <div className="p-4 border-t flex justify-center">
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
