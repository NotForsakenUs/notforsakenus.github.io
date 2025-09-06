"use client";

import { Button } from "@/components/ui/button";
import { HandHelping } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1b82fc8d-9898-41fa-91d9-bd506d9b63c3/generated_images/professional-overhead-photograph-of-an-o-d0fe54e0-20250905202433.jpg")'
      }}
    >
      {/* Light Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-white/70" />
      
      {/* Content Container */}
      <div className="container relative z-10 max-w-4xl mx-auto text-center px-4 py-16">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="p-4 rounded-full bg-primary/10 border border-border">
            <HandHelping className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6 leading-tight !whitespace-pre-line">Bringing Hope to Those Who Feel God has Forsaken Them

        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed !whitespace-pre-line !whitespace-pre-line">Not Forsaken Ministries serves our community with compassion, providing support, resources, and spiritual guidance to those facing life's greatest challenges.

        </p>

        {/* Mission Statement */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-sm md:text-base max-w-3xl mx-auto italic">
            "We are troubled on every side, yet not distressed; we are perplexed, but not in despair; Persecuted, but <span className="font-bold" style={{ color: '#333150' }}>not forsaken</span>; cast down, but not destroyed;" - 2 Corinthians 4:9 (KJV)
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-500" /> */}
    </section>);

}
