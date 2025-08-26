"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, AlertTriangle, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function BookSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [copiesSold, setCopiesSold] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Mes horaires exacts de publication (et pourquoi)",
    "Les accroches qui m'ont propulsé à 40 000 impressions",
    "Mon système de commentaires (150/250/500 par mois)",
    "Comment j'ai exploité Favikon pour crédibiliser mon profil",
    "Mon plan d'action 30 jours pas à pas"
  ];

  const testimonials = [
    {
      name: "Marie L.",
      result: "2500 abonnés en 2 mois",
      text: "Incroyable ! J'ai suivi le guide à la lettre et les résultats sont là."
    },
    {
      name: "Thomas D.",
      result: "Top 15% en 3 mois",
      text: "Les techniques de Kevin fonctionnent vraiment. Worth every penny!"
    }
  ];

  return (
    <section id="guide" className="py-20 bg-gradient-to-br from-yellow-50 via-red-50 to-pink-50">
      <div className="container mx-auto px-6">
        {/* Urgency Banner */}
        <div className="text-center mb-8">
          <div className="urgency-flash text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 font-bold">
            <AlertTriangle className="h-5 w-5" />
            <span>DERNIÈRES HEURES - Plus que {10 - copiesSold} exemplaires !</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Book Cover */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden floating-animation">
              <Image
                src="/Minitature livre 2.png"
                alt="Couverture du livre"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold pulse-glow">
              + 20 pages
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold">
              99€ → 149€
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <Badge className="red-gradient text-white mb-4 px-4 py-2">
                📘 ÉDITION ULTRA-LIMITÉE
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Mon Guide <span className="gradient-text">exclusif</span> à 99€
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                🚍 J'étais conducteur de car. Aujourd'hui, je suis classé par Favikon dans le{" "}
                <strong>Top 11% des créateurs LinkedIn en France</strong>.
              </p>
              <p className="text-lg mb-6">
                Pas besoin d'attendre d'être "Top Voice" pour partager ma véritable stratégie.
              </p>
            </div>

            {/* Timer */}
            <Card className="bg-red-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">Offre limitée expire dans :</span>
                  </div>
                  <div className="flex items-center space-x-4 text-2xl font-bold">
                    <div className="text-center">
                      <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
                      <div className="text-xs opacity-75">heures</div>
                    </div>
                    <div>:</div>
                    <div className="text-center">
                      <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
                      <div className="text-xs opacity-75">min</div>
                    </div>
                    <div>:</div>
                    <div className="text-center">
                      <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
                      <div className="text-xs opacity-75">sec</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-bold mb-4">Dans ce guide (30+ pages), je vous livre :</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Proof */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">
                  {copiesSold} personnes ont déjà acheté aujourd'hui
                </span>
              </div>
              <div className="text-sm text-green-700">
                "Ce guide m'a fait économiser des mois d'essais-erreurs" - Sarah M.
              </div>
            </div>

            {/* Pricing */}
            <Card className="border-2 border-red-500">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground line-through">Prix normal : 149€</div>
                  <div className="text-4xl font-bold gradient-text mb-2">99€</div>
                  <div className="text-red-600 font-semibold">
                    Seulement {10 - copiesSold} exemplaires restants
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span>Progression :</span>
                    <span className="font-semibold">{copiesSold}/10 vendus</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="red-gradient h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(copiesSold / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full mt-6 text-lg font-bold urgency-flash text-white hover:opacity-90"
                  asChild
                >
                  <a
                    href="https://buy.stripe.com/3cI8wReB567gdX5gbb5sA0a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔥 ACHETER MAINTENANT - 99€
                  </a>
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                  ⚡ Après ces 10 ventes, le prix passera à 149€
                </p>
              </CardContent>
            </Card>

            {/* Mini testimonials */}
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-yellow-50 border-yellow-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-2">"{testimonial.text}"</p>
                    <div className="text-xs text-muted-foreground">
                      <strong>{testimonial.name}</strong> - {testimonial.result}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Guarantee */}
            <div className="text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="font-semibold text-blue-800 mb-2">🛡️ Garantie 30 jours</div>
              <div className="text-sm text-blue-700">
                Pas satisfait ? Je vous rembourse intégralement, sans question.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
