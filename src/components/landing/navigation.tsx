
"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Featured Works" },
  { href: "/blog", label: "Blog" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavItems = ({isMobile = false}: {isMobile?: boolean}) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isMobile ? "block py-2 px-4 hover:bg-muted" : "px-3 py-2"
          )}
          onClick={() => isMobile && setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
      <Button asChild variant={isMobile ? "default" : "outline"} className={isMobile ? "w-full mt-4" : ""}>
        <Link href="#subscribe" onClick={() => isMobile && setMobileMenuOpen(false)}>
          <Mail className="mr-2 h-4 w-4" />
          Subscribe
        </Link>
      </Button>
    </>
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" aria-label="MarkDev Home">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavItems />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b flex justify-between items-center">
                   <Link href="/" aria-label="MarkDev Home" onClick={() => setMobileMenuOpen(false)}>
                     <Logo className="h-8 w-auto" />
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                     <X className="h-6 w-6" />
                   </Button>
                </div>
                <nav className="flex-grow p-4 space-y-2">
                  <NavItems isMobile={true} />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
