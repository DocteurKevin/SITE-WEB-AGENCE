"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, Users, Clock } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice Marketing",
      company: "TechFlow Solutions",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      content: "Kevin a complètement transformé notre présence LinkedIn. En 3 mois, nos leads ont augmenté de 340%. Son approche sans bullshit et ses contenus qui convertissent font toute la différence.",
      results: "+340% leads en 3 mois",
      verified: true
    },
    {
      name: "Marc Dubois",
      role: "CEO",
      company: "Transport & Logistics Pro",
      avatar: "/api/placeholder/64/64",
      rating: 4,
      content: "Bon résultats même si ça prend un peu de temps au début. Kevin comprend vraiment notre secteur du transport. Nos posts font maintenant 6x plus d'engagement qu'avant.",
      results: "6x plus d'engagement",
      verified: true
    },
    {
      name: "Isabelle Rodriguez",
      role: "Consultante RH",
      company: "HR Excellence",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      content: "Le ROI est impressionnant. Chaque euro investi dans ses services nous rapporte 15€ en nouvelles opportunités. Son style unique nous a positionnés comme leaders d'opinion.",
      results: "ROI de 1500%",
      verified: true
    },
    {
      name: "Thomas Leroy",
      role: "Fondateur",
      company: "InnovTech Startup",
      avatar: "/api/placeholder/64/64",
      rating: 4,
      content: "Kevin a cette capacité de transformer des sujets techniques en histoires captivantes. Quelques ajustements ont été nécessaires au début mais le résultat final est là.",
      results: "+180% de followers",
      verified: false
    },
    {
      name: "Caroline Petit",
      role: "Directrice Commerciale",
      company: "Sales Performance",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      content: "Depuis qu'on travaille avec Kevin, on reçoit 5 à 7 demandes qualifiées par semaine via LinkedIn. Son approche ghostwriting nous a donné une voix authentique et impactante.",
      results: "5-7 leads/semaine",
      verified: true
    },
    {
      name: "Antoine Bernard",
      role: "Dirigeant",
      company: "Conseil Business",
      avatar: "/api/placeholder/64/64",
      rating: 3,
      content: "Correct sans plus. Les résultats sont présents mais j'attendais un peu mieux pour le prix. Peut-être que mes attentes étaient trop élevées. Service client réactif en tout cas.",
      results: "Résultats modérés",
      verified: false
    }
  ];

  const stats = [
    {
      value: "4.2/5",
      label: "Note moyenne clients",
      icon: <Star className="h-5 w-5" />,
      subtext: "Sur 47 avis vérifiés"
    },
    {
      value: "89%",
      label: "Clients satisfaits",
      icon: <Quote className="h-5 w-5" />,
      subtext: "Recommandent nos services"
    },
    {
      value: "2.1x",
      label: "ROI moyen obtenu",
      icon: <TrendingUp className="h-5 w-5" />,
      subtext: "En moins de 6 mois"
    }
  ];

  const recentActivity = [
    "Sophie M. vient de laisser un avis 5⭐",
    "Marc D. a renouvelé son pack PRO",
    "3 nouvelles demandes de devis reçues",
    "Thomas L. a acheté le guide LinkedIn"
  ];

  return (
    <section id="temoignages" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Témoignages clients
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ce que mes <span className="gradient-text">clients</span> disent
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des avis authentiques, avec leurs vraies réflexions - pas que du 5 étoiles !
          </p>
        </div>

        {/* Live Activity */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-12">
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold text-green-800">Activité en temps réel</span>
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

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-200">
              <CardContent className="pt-6">
                <div className="gradient-bg w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.subtext}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="h-16 w-16" />
              </div>

              <CardContent className="pt-6">
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating
                            ? 'fill-current text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  {testimonial.verified && (
                    <Badge variant="secondary" className="text-xs">
                      ✅ Vérifié
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-foreground/90 leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Results Badge */}
                <Badge
                  className={`mb-4 ${
                    testimonial.rating >= 5 ? 'gradient-bg text-white' :
                    testimonial.rating >= 4 ? 'yellow-gradient text-black' :
                    'bg-gray-500 text-white'
                  }`}
                >
                  {testimonial.results}
                </Badge>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} chez {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-muted/30 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Ils me font confiance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {/* Company logos placeholders */}
            <div className="text-center">
              <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">TechFlow</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">Transport Pro</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">HR Excellence</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">InnovTech</span>
              </div>
            </div>
          </div>

          {/* Rating breakdown */}
          <div className="mt-8 max-w-md mx-auto">
            <h4 className="text-center font-semibold mb-4">Répartition des notes</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>5 étoiles</span>
                <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
                <span>60%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>4 étoiles</span>
                <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span>25%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>3 étoiles</span>
                <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '15%'}}></div>
                </div>
                <span>15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
