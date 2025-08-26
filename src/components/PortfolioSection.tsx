"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Users, Target, ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Carrousel Transport - 3 Erreurs",
      category: "LinkedIn Carrousel",
      description: "Transformer un sujet technique (les erreurs dans la gestion transport) en un contenu clair, visuel et viral, qui capte l'attention en scroll rapide et pousse à la réflexion business.",
      metrics: {
        impressions: "25k+",
        engagement: "8.5%",
        conversions: "47 leads"
      },
      icon: <TrendingUp className="h-6 w-6" />,
      image: "https://ext.same-assets.com/390972278/116942823.png"
    },
    {
      title: "Article RH - Gestion des congés",
      category: "Article LinkedIn",
      description: "Démontrer comment transformer un sujet administratif rébarbatif en avantage stratégique, grâce à une écriture émotionnelle, claire et orientée conversion.",
      metrics: {
        impressions: "18k+",
        engagement: "12.3%",
        conversions: "32 leads"
      },
      icon: <FileText className="h-6 w-6" />,
      image: "https://ext.same-assets.com/390972278/4162690006.png"
    },
    {
      title: "Dans le transport on se tait trop",
      category: "Contenu Polarisant",
      description: "Utiliser un sujet sensible du secteur (le silence des conducteurs) pour créer un contenu percutant, polarisant et engageant, qui déclenche des réactions.",
      metrics: {
        impressions: "35k+",
        engagement: "15.7%",
        conversions: "89 leads"
      },
      icon: <Users className="h-6 w-6" />,
      image: "https://ext.same-assets.com/390972278/2024738409.png"
    },
    {
      title: "Profil Personnel - Identité Unique",
      category: "Personal Branding",
      description: "Mettre en avant l'identité unique de ghostwriter et hackeur d'idées, en montrant que je ne me limite pas à écrire : je crée des contenus qui transforment.",
      metrics: {
        impressions: "42k+",
        engagement: "18.2%",
        conversions: "156 leads"
      },
      icon: <Target className="h-6 w-6" />,
      image: "https://ext.same-assets.com/390972278/471100371.png"
    }
  ];

  const contentTypes = [
    {
      title: "Articles LinkedIn",
      description: "Qui transforment une douleur en désir d'achat",
      count: "50+"
    },
    {
      title: "Carrousels calibrés",
      description: "Pour captiver en 3 secondes et convertir en 30",
      count: "30+"
    },
    {
      title: "Stratégies éditoriales",
      description: "Pensées pour générer des leads réels",
      count: "15+"
    },
    {
      title: "Contenus émotionnels",
      description: "Qui font réagir, commenter et acheter",
      count: "100+"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Le <span className="gradient-text">GHOSTWRITER</span> qui transforme les mots en revenus
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Je ne me contente pas d'écrire. Je crée des machines de conversion.
            Chaque projet présenté ici est traité comme s'il valait des millions.
          </p>
        </div>

        {/* Content Types Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {contentTypes.map((type, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
              <CardHeader>
                <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{type.count}</span>
                </div>
                <CardTitle className="text-lg">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="gradient-bg text-white">
                    {item.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 gradient-bg p-2 rounded-lg">
                  {item.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardHeader>

              <CardContent>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-bold text-primary">{item.metrics.impressions}</div>
                    <div className="text-xs text-muted-foreground">Impressions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{item.metrics.engagement}</div>
                    <div className="text-xs text-muted-foreground">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{item.metrics.conversions}</div>
                    <div className="text-xs text-muted-foreground">Leads</div>
                  </div>
                </div>

                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Voir le contenu complet
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Summary */}
        <div className="bg-card rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Résultats concrets obtenus</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">150k+</div>
              <div className="text-sm text-muted-foreground">Impressions en 6 mois</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">13.8%</div>
              <div className="text-sm text-muted-foreground">Taux d'engagement moyen</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">324</div>
              <div className="text-sm text-muted-foreground">Leads générés</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Organique, zéro pub</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="gradient-bg text-white hover:opacity-90">
            Voir tous mes contenus
          </Button>
        </div>
      </div>
    </section>
  );
}
