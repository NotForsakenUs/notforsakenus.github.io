"use client";

import { useState } from "react";
import { Mail, MailPlus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    requestType: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success("Thank you! Your message has been sent. We'll get back to you soon.");
      
      setFormData({
        name: "",
        email: "",
        message: "",
        requestType: "general"
      });
    } catch (error) {
      toast.error("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[#262626] py-16 md:py-24">
      <div className="container max-w-7xl">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white">
            We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about how you can get involved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email Address</h4>
                    <p className="text-white">info@notforsaken.us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading text-primary mb-6">Send Us a Message</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="requestType" className="block text-sm font-medium text-foreground mb-2">
                  Request Type
                </label>
                <select
                  id="requestType"
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Request</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-input border-border text-foreground"
                  placeholder="Please share your message, prayer request, or how we can help..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <MailPlus className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Ministry Info */}
            <div>
              <h4 className="font-heading text-xl text-white mb-4">Not Forsaken Ministries</h4>
              <p className="mb-4 text-white">
                Bringing hope, healing, and restoration to those in need through the love of Christ.
              </p>
              <div className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-white" />
                <span className="text-white">501(c)(3) Nonprofit Organization</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white hover:text-white/80 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-white hover:text-white/80 transition-colors">Our Services</a></li>
                <li><a href="#testimonials" className="text-white hover:text-white/80 transition-colors">Testimonials</a></li>
                <li><a href="#donate" className="text-white hover:text-white/80 transition-colors">Donate</a></li>
                <li><a href="#volunteer" className="text-white hover:text-white/80 transition-colors">Volunteer</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading text-lg text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-white hover:text-white/80 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-white hover:text-white/80 transition-colors">Terms of Service</a></li>
                <li><a href="/financial" className="text-white hover:text-white/80 transition-colors">Financial Transparency</a></li>
                <li><a href="/newsletter" className="text-white hover:text-white/80 transition-colors">Newsletter</a></li>
                <li><a href="/contact" className="text-white hover:text-white/80 transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Not Forsaken Ministries. All rights reserved.
            </p>
            <p className="text-sm text-white mt-3">
              Not Forsaken Ministries is a nonprofit, tax-exempt charitable organization (Tax ID: 33-1441446) under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law. Please consult with your tax adviser or the IRS to determine how much of your donation is deductible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
