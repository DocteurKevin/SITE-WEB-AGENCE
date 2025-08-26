"use client";

import { PenTool, Mail, MessageCircle, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Témoignages", href: "#temoignages" },
  ];

  const services = [
    { name: "Pack Starter", href: "#services" },
    { name: "Pack Pro", href: "#services" },
    { name: "Pack Premium", href: "#services" },
    { name: "Prestations à l'unité", href: "#services" },
  ];

  const legal = [
    { name: "Mentions légales", href: "#" },
    { name: "Politique de confidentialité", href: "#" },
    { name: "CGV", href: "#" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="gradient-bg p-2 rounded-lg">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">K-Tout-Risk</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Le ghostwriter qui transforme les mots en revenus.
              Zéro diplôme. Zéro bullshit. 100% transformation.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:agencektoutrisk@gmail.com"
                  className="text-background/80 hover:text-white transition-colors"
                >
                  agencektoutrisk@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/33745280417"
                  className="text-background/80 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +33 7 45 28 04 17
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/kevinbarret337688264"
                  className="text-background/80 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kevin Barret
                  <ExternalLink className="h-3 w-3 inline ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-background/80 hover:text-white transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Légal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-background/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 p-4 bg-background/10 rounded-lg">
              <h4 className="font-semibold mb-3">Mes résultats</h4>
              <div className="space-y-2 text-sm">
                <div>🏆 Top 11% LinkedIn France</div>
                <div>📈 150k impressions en 6 mois</div>
                <div>🎯 324 leads générés</div>
                <div>💯 100% organique</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2025 Agence K-Tout-Risk. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/kevinbarret337688264"
                className="text-background/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:agencektoutrisk@gmail.com"
                className="text-background/60 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/33458754"
                className="text-background/60 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
