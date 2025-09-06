"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HandHelping, 
  Church, 
  Accessibility, 
  WalletCards, 
  Phone, 
  IdCard 
} from "lucide-react";

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  features: string[];
}

const programs: Program[] = [
  {
    id: "community-outreach",
    title: "Community Outreach",
    description: "Connecting with our local community through various initiatives, food drives, and support programs to help those in need.",
    icon: HandHelping,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=240&fit=crop&crop=center",
    features: ["Food Distribution", "Clothing Drives", "Community Events", "Neighborhood Support"]
  },
  {
    id: "spiritual-guidance",
    title: "Spiritual Guidance",
    description: "Providing pastoral care, prayer support, and spiritual counseling to help individuals grow in their faith journey.",
    icon: Church,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop&crop=center",
    features: ["Prayer Ministry", "Pastoral Care", "Bible Study", "Worship Services"]
  },
  {
    id: "support-groups",
    title: "Support Groups",
    description: "Creating safe spaces for healing and recovery through various support groups addressing different life challenges.",
    icon: Accessibility,
    image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=400&h=240&fit=crop&crop=center",
    features: ["Grief Support", "Addiction Recovery", "Life Skills", "Peer Counseling"]
  },
  {
    id: "family-services",
    title: "Family Services",
    description: "Supporting families through difficult times with resources, counseling, and practical assistance programs.",
    icon: IdCard,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=240&fit=crop&crop=center",
    features: ["Family Counseling", "Parenting Classes", "Child Care", "Emergency Aid"]
  },
  {
    id: "financial-assistance",
    title: "Financial Assistance",
    description: "Providing emergency financial support and financial literacy education to help individuals achieve stability.",
    icon: WalletCards,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=240&fit=crop&crop=center",
    features: ["Emergency Aid", "Bill Assistance", "Financial Counseling", "Budget Planning"]
  },
  {
    id: "crisis-hotline",
    title: "Crisis Hotline",
    description: "24/7 crisis support and intervention services providing immediate help and connection to resources.",
    icon: Phone,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=240&fit=crop&crop=center",
    features: ["24/7 Support", "Crisis Intervention", "Resource Connection", "Follow-up Care"]
  }
];

export default function ProgramsServices() {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-foreground mb-4">
            Our Programs & Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Discover the various ways Not Forsaken Ministries serves our community through 
            compassionate programs designed to provide hope, healing, and practical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.id} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 backdrop-blur-sm p-2 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-heading text-card-foreground mb-2">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                      What We Offer
                    </h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1"
                    >
                      Learn More
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1"
                    >
                      Get Involved
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading mb-4">
              Need Immediate Help?
            </h3>
            <p className="mb-6">
              If you're facing a crisis or need immediate assistance, don't hesitate to reach out. 
              Our team is here to help connect you with the resources you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Contact Us Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View All Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}