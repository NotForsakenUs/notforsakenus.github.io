"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart, HandCoins, Gift, DollarSign, CreditCard, HandHeart, PiggyBank } from "lucide-react";

interface DonationSupportProps {
  className?: string;
}

export default function DonationSupport({ className }: DonationSupportProps) {
  const [donationType, setDonationType] = useState<string>("onetime");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");

  const suggestedAmounts = [
    { amount: "25", label: "$25" },
    { amount: "50", label: "$50" },
    { amount: "100", label: "$100" },
    { amount: "250", label: "$250" },
    { amount: "500", label: "$500" },
  ];

  const programs = [
    {
      icon: <HandCoins className="h-6 w-6 text-chart-1" />,
      title: "Food & Shelter",
      description: "Provide meals and safe housing for families in need",
      impact: "$50 feeds a family for a week"
    },
    {
      icon: <Gift className="h-6 w-6 text-chart-2" />,
      title: "Emergency Relief",
      description: "Immediate assistance during crisis situations",
      impact: "$100 provides emergency aid to one person"
    },
    {
      icon: <HandHeart className="h-6 w-6 text-chart-3" />,
      title: "Community Outreach",
      description: "Building relationships and spreading hope",
      impact: "$25 supports weekly community programs"
    }
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount;
  };

  return (
    <section className={`py-20 bg-background ${className || ""}`}>
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-chart-1" />
            <h2 className="text-4xl md:text-5xl font-heading text-foreground">
              Make a Difference
            </h2>
          </div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your generous support helps us serve those who need it most. Every dollar makes a direct impact 
            in transforming lives and bringing hope to our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <Card className="bg-card border-border">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-heading flex items-center justify-center gap-2">
                <DollarSign className="h-6 w-6 text-chart-1" />
                Give Today
              </CardTitle>
              <p className="">
                Choose your donation type and amount
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Donation Type */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Donation Type</label>
                <Select value={donationType} onValueChange={setDonationType}>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="onetime">One-Time Gift</SelectItem>
                    <SelectItem value="monthly">Monthly Giving</SelectItem>
                    <SelectItem value="quarterly">Quarterly Giving</SelectItem>
                    <SelectItem value="annual">Annual Giving</SelectItem>
                  </SelectContent>
                </Select>
                {donationType === "monthly" && (
                  <div className="flex items-center gap-2 text-sm text-chart-2">
                    <PiggyBank className="h-4 w-4" />
                    <span>Monthly giving provides sustained support for ongoing programs</span>
                  </div>
                )}
              </div>

              {/* Amount Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium">Select Amount</label>
                <div className="grid grid-cols-3 gap-3">
                  {suggestedAmounts.map((amount) => (
                    <Button
                      key={amount.amount}
                      variant={selectedAmount === amount.amount ? "default" : "outline"}
                      className="h-12 text-base"
                      onClick={() => handleAmountSelect(amount.amount)}
                    >
                      {amount.label}
                    </Button>
                  ))}
                  <Button
                    variant={customAmount ? "default" : "outline"}
                    className="h-12 text-base col-span-3"
                    onClick={() => setSelectedAmount("custom")}
                  >
                    Custom Amount
                  </Button>
                </div>

                {/* Custom Amount Input */}
                {(selectedAmount === "custom" || customAmount) && (
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-10 h-12 text-base bg-input border-border"
                      min="1"
                    />
                  </div>
                )}
              </div>

              {/* Donation Button */}
              <div className="space-y-4 pt-2">
                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg font-semibold"
                  disabled={!getCurrentAmount()}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  {getCurrentAmount() ? 
                    `Donate $${getCurrentAmount()}${donationType === "monthly" ? "/month" : ""}` : 
                    "Select Amount to Continue"
                  }
                </Button>
                
                <p className="text-xs text-center">
                  <strong>Secure donation processing.</strong> Not Forsaken Ministries is a 501(c)(3) 
                  nonprofit organization. Your donation is tax-deductible to the full extent allowed by law.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact & Programs */}
          <div className="space-y-8">
            {/* Your Impact */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center gap-2">
                  <HandHeart className="h-5 w-5 text-chart-1" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  {programs.map((program, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted">
                      <div className="flex-shrink-0">
                        {program.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{program.title}</h4>
                        <p className="text-sm">{program.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {program.impact}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transparency */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Financial Transparency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-chart-2">85%</div>
                    <div className="text-sm">Programs & Services</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-1">10%</div>
                    <div className="text-sm">Administration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chart-3">5%</div>
                    <div className="text-sm">Fundraising</div>
                  </div>
                </div>
                <p className="text-sm text-center pt-2">
                  We are committed to using your donations responsibly and effectively. 
                  View our complete financial reports and annual statements on our website.
                </p>
              </CardContent>
            </Card>

            {/* Other Ways to Give */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Other Ways to Give</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Gift className="h-4 w-4 text-chart-1" />
                    <span>Corporate partnerships and matching gifts</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <HandCoins className="h-4 w-4 text-chart-2" />
                    <span>Stock donations and planned giving</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Heart className="h-4 w-4 text-chart-3" />
                    <span>Volunteer your time and skills</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Learn More About Giving Options
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}