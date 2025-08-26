"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, PenTool, BookOpen, AlertTriangle } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Guide LinkedIn", href: "#guide", special: true },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="red-gradient p-3 rounded-lg shadow-lg">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <div className="text-red-600 font-bold text-sm">AGENCE</div>
              <div className="text-xl font-bold text-black">K-TOUT-RISK</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative transition-colors duration-200 font-medium ${
                  item.special
                    ? 'text-red-600 hover:text-red-700 font-bold'
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {item.name}
                {item.special && (
                  <Badge className="absolute -top-2 -right-8 bg-red-500 text-white text-xs animate-pulse">
                    HOT
                  </Badge>
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-red-500 text-red-600 hover:bg-red-50 relative"
              asChild
            >
              <a href="https://buy.stripe.com/3cI8wReB567gdX5gbb5sA0a" target="_blank" rel="noopener noreferrer">
                <BookOpen className="h-4 w-4 mr-2" />
                Guide 99€
                <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs">
                  -33%
                </Badge>
              </a>
            </Button>
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity pulse-glow">
              Démarrer maintenant
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    item.special
                      ? 'text-red-600 font-bold flex items-center space-x-2'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.special && <AlertTriangle className="h-4 w-4" />}
                  <span>{item.name}</span>
                  {item.special && <Badge className="bg-red-500 text-white text-xs">HOT</Badge>}
                </a>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Button
                  variant="outline"
                  className="border-red-500 text-red-600 hover:bg-red-50"
                  asChild
                >
                  <a href="https://buy.stripe.com/3cI8wReB567gdX5gbb5sA0a" target="_blank" rel="noopener noreferrer">
                    📖 Guide LinkedIn 99€
                  </a>
                </Button>
                <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  Démarrer maintenant
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Notification bar */}
      <div className="bg-red-600 text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center space-x-2">
          <AlertTriangle className="h-4 w-4" />
          <span>🔥 GUIDE LINKEDIN: Plus que 3 exemplaires à 99€ avant passage à 149€</span>
          <AlertTriangle className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}
