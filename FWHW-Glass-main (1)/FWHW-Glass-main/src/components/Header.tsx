import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">FWHW Glass Technology</span>
              <span className="text-xs text-muted-foreground">Innovating Ethiopia's Glass Industry</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            
            <Link to="/products" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Products
            </Link>

            <Link to="/mirrors" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Mirrors
            </Link>
            <Link to="/application" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Application
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/owner-profile" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Owner Profile
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="/#contact">
              <Button variant="default" size="sm" className="bg-corporate-dark hover:bg-corporate-dark/90">
                Quick Contact
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link to="/" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/products" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Products
            </Link>
            <Link to="/mirrors" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Mirrors
            </Link>
            <Link to="/application" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Application
            </Link>
            <Link to="/about" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/owner-profile" className="block text-sm font-medium text-foreground hover:text-accent transition-colors">
              Owner Profile
            </Link>
            <a href="/#contact">
              <Button variant="default" size="sm" className="w-full bg-corporate-dark hover:bg-corporate-dark/90">
                Quick Contact
              </Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
