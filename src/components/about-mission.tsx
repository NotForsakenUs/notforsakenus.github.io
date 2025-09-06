import { Church, Section, Frame } from "lucide-react";

interface MissionSectionProps {
  className?: string;
}

export default function AboutMission({ className = "" }: MissionSectionProps) {
  return (
    <section id="about" className={`bg-background py-16 md:py-24 ${className}`}>
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Building a community of hope, restoration, and spiritual growth for those who need it most.
          </p>
        </div>

        <div className="grid gap-12 md:gap-16">
          {/* Mission Statement */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Church className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-heading text-primary">
                Our Mission
              </h3>
            </div>
            <div className="bg-muted rounded-lg p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed !whitespace-pre-line">
                The Mission of Not Forsaken is to encourage and cultivate Christ-centered relationships that equip individuals and families with biblical knowledge, practical resources, and spiritual guidance to foster lasting peace, confidence, and purpose in the lives of those we serve by addressing spiritual doubts, strengthening faith, and empowering discipleship.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Section className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-heading text-primary">
                Our Vision
              </h3>
            </div>
            <div className="bg-muted rounded-lg p-8 md:p-10">
              <p className="text-lg md:text-xl leading-relaxed !whitespace-pre-line">Our vision is a Church where doubt is met with grace, questions lead to deeper understanding, and every believer is equipped not just to survive in this fallen world, but to thrive as bold disciples who reflect the person of Jesus Christ in every aspect of their lives.

              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Frame className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl md:text-3xl font-heading text-primary text-center">
                Our Core Values
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Unconditional Love
                </h4>
                <p className="leading-relaxed">
                  We love without judgment, meeting people exactly where they are 
                  and walking alongside them in their journey toward healing.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Radical Compassion
                </h4>
                <p className="leading-relaxed">
                  Our compassion extends to the most vulnerable and marginalized, 
                  reflecting Christ's heart for the broken and forgotten.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Authentic Community
                </h4>
                <p className="leading-relaxed">
                  We create safe spaces where genuine relationships flourish and 
                  people can experience belonging and acceptance.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h4 className="text-xl font-heading text-primary mb-3">
                  Transformative Hope
                </h4>
                <p className="leading-relaxed">
                  We believe in the power of hope to transform lives and the 
                  possibility of redemption for every person.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-primary mb-8">
              Our Story
            </h3>
            <div className="bg-muted rounded-lg p-8 md:p-10 text-left">
              <p className="leading-relaxed mb-6">
                I initially came up with the idea of Not Forsaken Ministries while I was attending seminary at Liberty University. Although I have grown up in church my entire life and have been a Christian since age nine, I realized that many American churches do not properly equip people to be disciples or to understand much of their Bible. This was true in my own life, and I did not realize it until I began seminary at the age of 44.
              </p>
              <p className="leading-relaxed mb-6">
                Many Christians today have questions about the Bible or Christianity that they are too afraid of asking in their church or even have doubts about whether Christianity is true. My hope is that the Lord will use this ministry to help answer questions people have about living as a Christian in this fallen world.
              </p>
              <p className="leading-relaxed !whitespace-pre-line">Currently, this ministry is built around a blog and in-person teaching and ministry, but soon, this ministry will be launching a podcast and YouTube channel. The overall goal of Not Forsaken Ministries is to help you as a Christian overcome doubts or answer questions about your beliefs and help you grow in your walk with Jesus.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}