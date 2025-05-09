
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "./logo"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"


export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && email.includes('@')) { // Basic email validation
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setEmail("")
    } else {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
    }
  }

  return (
    <footer id="subscribe" ref={ref} className="bg-muted/50 text-muted-foreground py-12">
      <div className={cn(
          "container mx-auto px-4 scroll-animate",
          isVisible && "scroll-animate-visible"
        )}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Copyright */}
          <div className="space-y-4 text-center md:text-left">
            <Link href="/" aria-label="MarkDev Home" className="inline-block">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MarkDev Landing. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-start space-x-3 pt-2">
                {/* ThemeToggle is now in the main navigation, can be removed from footer if desired or kept for redundancy */}
                {/* <ThemeToggle /> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
            <p className="text-sm mb-3">Subscribe to our newsletter for the latest marketing insights.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background flex-grow" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter"
              />
              <Button type="submit" variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </form>
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              <Link href="#" aria-label="Github" className="hover:text-primary transition-colors"><Github size={20}/></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20}/></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20}/></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
