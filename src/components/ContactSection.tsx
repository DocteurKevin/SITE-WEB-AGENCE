"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageCircle, Linkedin, Phone, Send, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "agencektoutrisk@gmail.com",
      link: "mailto:agencektoutrisk@gmail.com",
      description: "Réponse sous 24h"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+33 7 45 28 04 17",
      link: "https://wa.me/33745280417",
      description: "Réponse immédiate"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Kevin Barret",
      link: "https://www.linkedin.com/in/kevinbarret337688264",
      description: "Voir mon profil"
    }
  ];

  const faq = [
    {
      question: "Combien de temps pour voir les premiers résultats ?",
      answer: "Généralement 2-3 semaines pour l'engagement, 1-2 mois pour les leads qualifiés."
    },
    {
      question: "Travaillez-vous dans tous les secteurs ?",
      answer: "Je me spécialise dans le transport, la logistique, et le B2B. Mon expertise du terrain fait la différence."
    },
    {
      question: "Comment garantissez-vous la qualité ?",
      answer: "Révisions illimitées + 15 ans d'expérience terrain + résultats mesurables à chaque étape."
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer: "Oui, sans engagement. Préavis de 30 jours. Satisfaction garantie ou remboursé."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Prêt à <span className="gradient-text">transformer</span> votre contenu ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Parlons de votre projet. Pas de blabla commercial, juste une discussion franche sur vos objectifs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Démarrons votre projet</CardTitle>
              <p className="text-muted-foreground">
                Remplissez ce formulaire et je vous recontacte sous 24h avec une stratégie personnalisée.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Prénom *</label>
                    <Input placeholder="Votre prénom" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom *</label>
                    <Input placeholder="Votre nom" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email professionnel *</label>
                  <Input type="email" placeholder="vous@entreprise.com" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Entreprise</label>
                  <Input placeholder="Nom de votre entreprise" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Votre besoin *</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option value="">Sélectionnez votre besoin</option>
                    <option value="starter">Pack Starter (600€/mois)</option>
                    <option value="pro">Pack Pro (1200€/mois)</option>
                    <option value="premium">Pack Premium (2000€/mois)</option>
                    <option value="ponctuel">Prestation ponctuelle</option>
                    <option value="conseil">Conseil stratégique</option>
                    <option value="autre">Autre projet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Décrivez votre projet *</label>
                  <Textarea
                    placeholder="Parlez-moi de vos objectifs, votre secteur, vos défis actuels..."
                    rows={4}
                    required
                  />
                </div>

                <Button className="w-full gradient-bg text-white hover:opacity-90">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer ma demande
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires. Vos données sont protégées et ne seront jamais partagées.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Ou contactez-moi directement</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:scale-105 transition-transform duration-200">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="gradient-bg p-3 rounded-lg">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{method.title}</h4>
                          <a
                            href={method.link}
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Questions fréquentes</h3>
              <div className="space-y-4">
                {faq.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <Card className="gradient-bg text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Garantie satisfaction</h4>
                <p className="text-white/90 mb-4">
                  Si vous n'êtes pas satisfait des premiers livrables,
                  je reprends tout gratuitement ou vous rembourse intégralement.
                </p>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Zéro risque pour vous
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
