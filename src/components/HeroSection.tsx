"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Users, Target, Clock, Star, Users2 } from "lucide-react";

export default function HeroSection() {
  const achievements = [
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: "Top 11% LinkedIn France",
      value: "#5221",
      color: "red-gradient"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Top 12% Monde",
      value: "#55658",
      color: "yellow-gradient"
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: "150k impressions",
      value: "en 6 mois",
      color: "pink-gradient"
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: "Zéro publicité",
      value: "100% organique",
      color: "blue-gradient"
    }
  ];

  const liveStats = [
    { label: "Clients actifs", value: "47", icon: <Users2 className="h-4 w-4" /> },
    { label: "Projets cette semaine", value: "12", icon: <Clock className="h-4 w-4" /> },
    { label: "Note moyenne", value: "4.2", icon: <Star className="h-4 w-4" /> }
  ];

  return (
    <section id="accueil" className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 red-gradient rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 yellow-gradient rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 pink-gradient rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Live activity indicator */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-full px-4 py-2 flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">🔥 3 nouveaux clients cette semaine</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="red-gradient text-white mb-4 px-4 py-2">
                🚛 → ✍️ Transformation complète
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Le <span className="gradient-text">Ghostwriter</span> qui transforme les mots en revenus
              </h1>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <p className="text-xl font-bold text-yellow-800 italic">
                  "Zéro diplôme. Zéro bullshit. 100% transformation."
                </p>
              </div>
              <p className="text-lg text-foreground/80">
                🚍 <strong>Ex-conducteur de car</strong> devenu Ghostwriter. Aujourd'hui, je crée du contenu qui <strong className="gradient-text">roule à fond</strong>.
              </p>
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`${achievement.color} rounded-xl p-4 hover:scale-105 transition-transform duration-200 text-white shadow-lg`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm">
                        {achievement.value}
                      </div>
                      <div className="text-xs opacity-90">
                        {achievement.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                {liveStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center space-y-1">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-xs text-muted-foreground flex items-center space-x-1">
                      {stat.icon}
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 pulse-glow">
                🚀 Voir mes offres
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-red-500 text-red-600 hover:bg-red-50">
                📖 Télécharger mon guide
              </Button>
            </div>

            {/* Certification Badge */}
            <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-200">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <div className="font-semibold">✅ Certifié par Favikon</div>
                <div className="text-sm text-muted-foreground">
                  Plateforme d'analyse de créateurs
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Kevin's Photo */}
          <div className="relative">
            {/* Main photo container */}
            <div className="relative aspect-square rounded-3xl overflow-hidden floating-animation">
              {/* For now using a placeholder - the actual photo will be uploaded */}
              <div className="w-full h-full bg-gradient-to-br from-red-400 via-yellow-400 to-pink-400 flex items-center justify-center">
                <div className="text-center p-8 text-white">
                  <div className="text-6xl mb-4">🚛→✍️</div>
                  <div className="text-2xl font-bold mb-2">Kevin Barret</div>
                  <div className="text-lg">Ghostwriter Expert</div>
                  <div className="text-sm opacity-90 mt-2">Ex-conducteur → Top Creator</div>
                </div>
              </div>
              {/* When the real photo is uploaded, replace the above div with: */}
              {/* <img
                src="/kevin-photo.jpg"
                alt="Kevin Barret - Ghostwriter Expert"
                className="w-full h-full object-cover"
              /> */}
            </div>

            {/* Logo overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="text-red-600 font-bold text-sm">AGENCE</div>
              <div className="text-black font-bold text-lg">K-TOUT-RISK</div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 red-gradient rounded-full p-4 text-white shadow-lg pulse-glow">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 yellow-gradient rounded-full p-4 text-white shadow-lg">
              <Target className="h-6 w-6" />
            </div>
            <div className="absolute top-1/2 -right-6 pink-gradient rounded-full p-3 text-white shadow-lg">
              <Award className="h-5 w-5" />
            </div>

            {/* Results popup */}
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border">
              <div className="text-xs text-muted-foreground">Résultats clients</div>
              <div className="font-bold text-green-600">+340% leads</div>
              <div className="text-xs">moyenne en 3 mois</div>
            </div>
          </div>
        </div>

        {/* Urgency bar */}
        <div className="mt-16 text-center">
          <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 font-bold urgency-flash">
            <Clock className="h-5 w-5" />
            <span>⚡ OFFRE LIMITÉE: Guide LinkedIn à 99€ - Plus que 3 exemplaires !</span>
          </div>
        </div>
      </div>
    </section>
  );
}
