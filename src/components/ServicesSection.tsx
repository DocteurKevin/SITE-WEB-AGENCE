"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Clock, Users, AlertTriangle, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      name: "STARTER",
      price: "600",
      period: "/mois",
      description: "Idéal pour commencer à poser sa voix",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "4 posts LinkedIn / mois",
        "Visuels inclus",
        "Révisions illimitées",
        "Support par email"
      ],
      popular: false,
      availability: "3 places restantes",
      link: "https://buy.stripe.com/00w14p8cH67g3ir3op5sA01"
    },
    {
      name: "PRO",
      price: "1200",
      period: "/mois",
      description: "Idéal pour visibilité et autorité",
      icon: <Star className="h-6 w-6" />,
      features: [
        "8 posts LinkedIn / mois",
        "2 articles longs",
        "150 commentaires stratégiques",
        "Ton de voix personnalisé",
        "Visuels premium inclus",
        "Support prioritaire"
      ],
      popular: true,
      availability: "Complet - Liste d'attente",
      waitlist: true,
      link: "https://buy.stripe.com/14AbJ3eB5eDMg5dcYZ5sA02"
    },
    {
      name: "PREMIUM",
      price: "2000",
      period: "/mois",
      description: "Pour les leaders ou marques à forte ambition",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "8 posts + 2 articles optimisés",
        "Refonte complète du profil LinkedIn",
        "500 commentaires stratégiques",
        "Coaching éditorial 1h / mois",
        "Stratégie personnalisée",
        "Support dédié 24/7"
      ],
      popular: false,
      availability: "1 place restante",
      urgent: true,
      link: "https://buy.stripe.com/aFa28t3WrgLU5qzgbb5sA03"
    }
  ];

  const individualServices = [
    {
      name: "Post unique",
      description: "300-1300 caractères",
      price: "150",
      badge: "Livraison 48h",
      link: "https://buy.stripe.com/fZueVf9gLanwbOX6AB5sA04"
    },
    {
      name: "Article long LinkedIn",
      description: "600-1000 mots",
      price: "450",
      badge: "Best-seller",
      link: "https://buy.stripe.com/9B6aEZakP9js7yH2kl5sA05"
    },
    {
      name: "Refonte profil LinkedIn",
      description: "Complète avec optimisation",
      price: "600",
      badge: "ROI garanti",
      link: "https://buy.stripe.com/3cI9AVdx1anw6uD9MN5sA06"
    }
  ];

  const recentActivity = [
    "Sarah M. vient de commander le pack PRO",
    "3 nouveaux clients cette semaine",
    "Marc D. a renouvelé son abonnement",
    "Plus de 150 projets livrés ce mois"
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Mes services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            L'Agence <span className="gradient-text">K-Tout-Risk</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            J'écris dans l'ombre, pour mettre votre voix en lumière. Zéro cliché. Zéro contenu plat.
            Seulement des textes qui transforment, engagent, et positionnent.
          </p>
        </div>

        {/* Live Activity */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-green-800">Activité récente</span>
          </div>
          <div className="grid md:grid-cols-2 gap-2 text-sm text-green-700">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Clock className="h-3 w-3" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                service.popular ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20' : ''
              } ${service.urgent ? 'border-red-500 shadow-lg shadow-red-500/20' : ''}`}
            >
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 gradient-bg text-white text-center py-2 text-sm font-semibold">
                  🔥 Le plus populaire
                </div>
              )}

              {service.urgent && (
                <div className="absolute top-0 left-0 right-0 urgency-flash text-white text-center py-2 text-sm font-semibold">
                  ⚡ URGENT - Dernière place
                </div>
              )}

              <CardHeader className={service.popular || service.urgent ? 'pt-12' : ''}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    service.popular ? 'gradient-bg' :
                    service.urgent ? 'bg-red-500' :
                    'bg-gray-500'
                  }`}>
                    {service.icon}
                  </div>
                  <Badge variant={service.popular ? "default" : "secondary"}>
                    {service.name}
                  </Badge>
                </div>

                <CardTitle className="text-2xl mb-2">
                  <span className="text-4xl font-bold">{service.price}€</span>
                  <span className="text-lg text-muted-foreground">{service.period}</span>
                </CardTitle>

                <p className="text-muted-foreground mb-4">{service.description}</p>

                {/* Availability */}
                <div className={`text-sm font-semibold p-2 rounded ${
                  service.waitlist ? 'bg-yellow-100 text-yellow-800' :
                  service.urgent ? 'bg-red-100 text-red-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {service.waitlist && <Users className="h-4 w-4 inline mr-1" />}
                  {service.urgent && <AlertTriangle className="h-4 w-4 inline mr-1" />}
                  {!service.waitlist && !service.urgent && <TrendingUp className="h-4 w-4 inline mr-1" />}
                  {service.availability}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    service.waitlist ? 'bg-yellow-500 text-white hover:bg-yellow-600' :
                    service.popular ? 'gradient-bg text-white hover:opacity-90' :
                    service.urgent ? 'bg-red-500 text-white hover:bg-red-600 pulse-glow' :
                    'border-primary text-primary hover:bg-primary/10'
                  }`}
                  variant={service.popular || service.urgent || service.waitlist ? "default" : "outline"}
                  asChild
                >
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {service.waitlist ? '📝 Rejoindre la liste' :
                     service.urgent ? '🚨 Réserver maintenant' :
                     `Je choisis ${service.name}`}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Individual Services */}
        <div className="bg-muted/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Prestations à l'unité</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {individualServices.map((service, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-200 relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs">
                  {service.badge}
                </Badge>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold gradient-text mb-4">{service.price}€</div>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link} target="_blank" rel="noopener noreferrer">
                      Commander
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Comment ça marche ?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choisissez votre pack", desc: "Celui qui correspond le mieux à vos objectifs" },
              { step: "2", title: "Validez en 1 clic", desc: "Devis + contrat ou directement via Stripe" },
              { step: "3", title: "Recevez vos livrables", desc: "Chaque semaine avec régularité et impact" },
              { step: "4", title: "Profitez du suivi", desc: "Révisions incluses + accompagnement direct" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 text-white px-8 py-4 rounded-xl inline-block">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6" />
              <div>
                <div className="font-bold text-lg">⚡ Attention : Places limitées</div>
                <div className="text-sm opacity-90">Je ne prends que 15 clients maximum pour garantir la qualité</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
