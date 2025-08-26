"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Comment générer 150k impressions LinkedIn en 6 mois (sans publicité)",
      excerpt: "Ma méthode complète pour exploser votre visibilité LinkedIn grâce au contenu organique. Les techniques que j'utilise pour mes clients.",
      category: "Stratégie LinkedIn",
      date: "15 Dec 2024",
      readTime: "8 min",
      featured: true,
      slug: "generer-150k-impressions-linkedin"
    },
    {
      title: "Pourquoi 90% des posts LinkedIn échouent (et comment l'éviter)",
      excerpt: "Les erreurs fatales que font la plupart des créateurs de contenu et comment les transformer en opportunités.",
      category: "Conseils",
      date: "10 Dec 2024",
      readTime: "5 min",
      featured: false,
      slug: "erreurs-posts-linkedin"
    },
    {
      title: "De conducteur de car à Top 11% LinkedIn : mon parcours",
      excerpt: "L'histoire complète de ma transformation. Zéro diplôme, zéro réseau, mais une stratégie qui fonctionne.",
      category: "Témoignage",
      date: "5 Dec 2024",
      readTime: "12 min",
      featured: false,
      slug: "parcours-conducteur-linkedin"
    },
    {
      title: "7 formats de contenu qui génèrent des leads B2B",
      excerpt: "Les types de posts qui convertissent le mieux selon mon expérience avec 50+ clients dans le transport et la logistique.",
      category: "Content Marketing",
      date: "1 Dec 2024",
      readTime: "6 min",
      featured: false,
      slug: "formats-contenu-leads-b2b"
    }
  ];

  const categories = [
    "Tous",
    "Stratégie LinkedIn",
    "Conseils",
    "Témoignage",
    "Content Marketing"
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Blog & Ressources
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Mes <span className="gradient-text">conseils</span> exclusifs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stratégies, techniques et retours d'expérience pour transformer votre présence LinkedIn en machine à prospects.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              size="sm"
              className={index === 0 ? "gradient-bg text-white" : "border-primary text-primary hover:bg-primary/10"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card key={index} className="mb-12 overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <Badge className="gradient-bg text-white">Article Featured</Badge>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {post.category}
                </Badge>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{post.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button className="gradient-bg text-white hover:opacity-90 w-fit">
                  Lire l'article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <Badge className="gradient-bg text-white">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                  Lire la suite
                  <ArrowRight className="h-3 w-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-16 gradient-bg text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ne ratez aucun conseil</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Recevez mes meilleures stratégies LinkedIn directement dans votre boîte mail.
              1 email par semaine, 0 spam, que du contenu actionnable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                S'abonner
              </Button>
            </div>
            <p className="text-xs text-white/70 mt-3">
              Déjà 2847 professionnels nous font confiance
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
