"use client";

import { Quote, Church, HandHelping, UsersRound, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Not Forsaken Ministries stepped in when we had nowhere else to turn. They provided food for my family and helped us find stable housing. Their kindness and support gave us hope during our darkest time.",
    name: "Maria Rodriguez",
    context: "Single mother of two, assisted with emergency housing and food support"
  },
  {
    quote: "The job training program changed my life. After being homeless for months, they helped me develop skills and connected me with employers who gave me a second chance. I now have steady work and my own apartment.",
    name: "James Mitchell",
    context: "Program graduate, now employed in construction"
  },
  {
    quote: "When my husband passed away, I didn't know how to manage alone. The ministry's counseling and community support helped me through grief and connected me with others who understood. I'm forever grateful.",
    name: "Dorothy Chen",
    context: "Widow, participated in grief counseling and support groups"
  },
  {
    quote: "As a volunteer, I've seen firsthand how this ministry transforms lives. Every person who walks through our doors is treated with dignity and respect. It's an honor to serve alongside such dedicated people.",
    name: "Pastor David Thompson",
    context: "Community volunteer and local church leader"
  },
  {
    quote: "The children's program saved my son. He was struggling in school and getting into trouble, but the mentorship and after-school support turned everything around. He's now thriving academically and socially.",
    name: "Angela Washington",
    context: "Parent of youth program participant"
  },
  {
    quote: "Not Forsaken Ministries doesn't just provide temporary relief—they walk alongside you for the long journey. The life skills classes and ongoing support helped me break the cycle of poverty for good.",
    name: "Michael Torres",
    context: "Multi-year program participant, now stable housing advocate"
  }
];

const impactStats = [
  {
    icon: UsersRound,
    number: "2,847",
    label: "People Served This Year",
    description: "Individuals and families received direct assistance"
  },
  {
    icon: Church,
    number: "156",
    label: "Families Housed",
    description: "Transitioned from homelessness to stable housing"
  },
  {
    icon: HandHelping,
    number: "98%",
    label: "Program Success Rate",
    description: "Participants who achieved their goals"
  },
  {
    icon: BadgeCheck,
    number: "45",
    label: "Community Partners",
    description: "Local organizations working together"
  }
];

export default function TestimonialsImpact() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-primary mb-4">
            Lives Transformed
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            See how God is working through our community to bring hope, healing, and lasting change
            to those who need it most.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6 text-center bg-card border-border hover:bg-accent/50 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-heading text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm">
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-border hover:bg-accent/30 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors duration-200" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className="mt-auto">
                  <div className="font-medium text-primary mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm leading-snug">
                    {testimonial.context}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Every story represents a life changed through the power of community, compassion, and faith.
            You can be part of the next transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center gap-2">
              <HandHelping className="w-5 h-5" />
              Get Involved
            </button>
            <button className="px-8 py-3 border border-border font-medium rounded-lg hover:bg-accent transition-colors duration-200">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}