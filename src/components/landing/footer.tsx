"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "./logo";
import { Facebook, Instagram, Linkedin, Phone, X, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      // Basic email validation
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer
      id="subscribe"
      ref={ref}
      className="bg-muted/50 text-muted-foreground py-12"
    >
      <div
        className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}
      >
        <div className="grid items-start grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className=" text-center md:text-left">
            <Link href="/" aria-label="MarkDev Home" className="inline-block">
              <Logo className="h-10 w-auto" />
            </Link>
            <h4 className="font-medium text-foreground mb-3">Contactenos:</h4>
            <ul className="space-y-1 text-sm mb-2">
              <li className="hover:text-primary transition-colors">
                <span className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  +5355669040
                </span>
              </li>
              <li className="hover:text-primary transition-colors">
                <span className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  support@okirostudio.com
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3">
              En esta pagina
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Ofertas
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  Portafolio
                </Link>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3">
              Enlaces Recomendados
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary transition-colors"
                >
                  Politica de privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary transition-colors"
                >
                  Terminos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* Newsletter Subscription */}
          <div className=" text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-2">
              Mantente actualizado
            </h4>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest marketing insights.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                variant="default"
                className="w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Mail className="mr-1 h-3 w-3" /> Suscribete
              </Button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-primary transition-colors"
              >
                <X size={20} />
              </Link>
            </div>
          </div>
        </div>
        <p className="w-full text-center text-sm mt-3">
          &copy; {new Date().getFullYear()} MarkDev Landing. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
