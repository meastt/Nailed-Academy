"use client";

import { useState } from "react";
import Image from "next/image";
import Carousel from "@/components/ui/Carousel";
import Accordion from "@/components/ui/Accordion";
import Card from "@/components/ui/Card";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { InstagramIcon, FacebookIcon, PhoneIcon } from "@/components/ui/Icons";

const staff = [
  {
    id: "becky-bunnell",
    name: "Becky Bunnell",
    role: "Owner",
    title: "Licensed Nail Tech/Instructor",
    experience: "32 years",
    bio: "Becky is a wife and a mother of 6 children. She loves camping, four-wheeling, hunting, fishing, sports, beach time and all things NAILS! She is the owner of Nailed Studio & Academy & CEO of SO Gel Nails Supply Company. Becky is an administrator for Tech Talk Worldwide's International Facebook Group, where she has the opportunity to teach, encourage, and lift other Nail Techs to be their best self. After Utah passed licensing for Nail Techs in 2003, Becky was able to help create the curriculum for the first Nails only program for USU Eastern, in Price, Utah. Bunnell has had the honor of having her work published in Nails Magazine, Nailpro Magazine, and Scratch Magazine. She has also written a variety of blogs. Becky was also chosen as \"The Tops\" in Nail Style weekly, and a 2018 Nail Star on the \"Cruise With A Nail Star Cruise\". Becky has a podcast for nail techs called Tribe Nail Tech. She is the inventor of the HOLD IT, gel holder and recently released POSH Hema free Builder Gels and the I AM, Hema free Gel polish line, an Empowerment Evolution Experience for Nail Techs and their clients. Proceeds from each bottle goes to a Womens Shelter for abused women. What she loves most about her career is teaching, mentoring and building lasting relationships with other Nail Techs. She's proud to offer Nail products that are harsh chemical free, Hema free, hypoallergenic, vegan, cruelty free, and made in the USA for the safety of nail techs and their clients.",
    phone: "435-749-1582",
    instagram: ["https://www.instagram.com/iam.beckybunnell"],
    facebook: "https://m.facebook.com/beckyb.sogel/",
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `becky-${i + 1}`,
      image: `/images/staff/owner/portfolio/nail-${i + 1}.jpg`,
      alt: `Becky Bunnell nail art ${i + 1}`,
    })),
  },
  {
    id: "jackie-neil",
    name: "Jackie Neil",
    role: "Licensed Nail Tech & Instructor",
    title: "Licensed Nail Artist | Licensed Nail Instructor | Certified SO Gel Educator",
    experience: "4 years",
    bio: "Jackie is a skilled nail technician with 4 years of experience as a SO Gel exclusive nail technician. She's an expert with manicures, pedicures, and hard gel services. With Jackie's warm and friendly personality she puts all of her clients at ease creating an enjoyable and relaxing experience. When Jackie isn't servicing clients, she is teaching dance and preschool at Diamond Talent Productions.",
    phone: "1-435-229-3136",
    instagram: ["https://www.instagram.com/nailed.jacklyn"],
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `jackie-${i + 1}`,
      image: `/images/staff/jackie-neil/portfolio/nail-${i + 1}.jpg`,
      alt: `Jackie Neil nail art ${i + 1}`,
    })),
  },
  {
    id: "lara-cappeletti",
    name: "Lara Cappeletti",
    role: "Licensed Nail Technician",
    title: "Licensed Nail Technician | SO GEL Certified",
    experience: "Recent graduate",
    bio: "Hi I'm Lara. Welcome to Glossy by Lala. I specialize in hard gel nail services using SO Gel products exclusively, delivering strong, long-lasting nails with serious personality. Whether you're into wild nail art or clean, glossy sets, I'm all about bringing your vision to life with good vibes and a little bit of sparkle. I am a recent graduate from Nailed Academy and i'm so excited to step into this new journey! Located in St. George, Utah. Ready to get glossy?",
    phone: "(435) 319-9076",
    instagram: ["https://www.instagram.com/glossybylala"],
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `lara-${i + 1}`,
      image: `/images/staff/lara-cappeletti/portfolio/nail-${i + 1}.jpg`,
      alt: `Lara Cappeletti nail art ${i + 1}`,
    })),
  },
  {
    id: "mckenzie-cullen",
    name: "McKenzie Cullen",
    role: "Licensed Nail Technician",
    title: "Licensed Nail Technician | SO GEL Certified",
    experience: "",
    bio: "Hi! I'm McKenzie. I specialize in bringing you nails that range from natural glam to bold, eye-catching designs. Whether you're into soft elegance or statement sets, I've got you covered! I use high-quality, organic products to keep your nails healthy and looking their best. Now accepting new clients!",
    phone: "(435) 619-9521",
    instagram: ["https://www.instagram.com/nails.bykenzz"],
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `mckenzie-${i + 1}`,
      image: `/images/staff/mckenzie-cullen/portfolio/nail-${i + 1}.jpg`,
      alt: `McKenzie Cullen nail art ${i + 1}`,
    })),
  },
  {
    id: "tessie-naelese",
    name: "Tessie Naelese",
    role: "Licensed Nail Technician",
    title: "Licensed Nail Technician | SO GEL Certified",
    experience: "",
    bio: "Hi, I'm Tessie! A Southern Utah nail tech specializing in hard gel, soak-off gel, and pedicures. All tools and surfaces are thoroughly sanitized between every client. I focus on clean prep, strong structure, and custom designs tailored to your vibe — sassy, creative, or neutral. I also offer weekend and evening appointments to fit your schedule.",
    phone: "435-773-5660",
    instagram: ["https://www.instagram.com/tessienailedit"],
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `tessie-${i + 1}`,
      image: `/images/staff/tessie-naelese/portfolio/nail-${i + 1}.jpg`,
      alt: `Tessie Naelese nail art ${i + 1}`,
    })),
  },
  {
    id: "kenzie-dominguez",
    name: "Kenzie Dominguez",
    role: "Licensed Nail Technician",
    title: "Licensed Nail Technician | SO GEL Certified",
    experience: "Recent graduate",
    bio: "Hi, I'm Kenzie! I'm a graduate from Nailed Academy, and I specialize in hard gel services. I exclusively use SO GEL products that are high-quality, hypoallergenic, and organic. I am dedicated to giving my clients beautiful, long lasting nails. Whether you're a fan of stand-out bold nail art, or soft elegant designs—I've got you covered! I am always accepting new clients.",
    phone: "725-324-4688",
    instagram: ["https://www.instagram.com/nailsbykenziemae"],
    portfolio: Array.from({ length: 6 }, (_, i) => ({
      id: `kenzie-${i + 1}`,
      image: `/images/staff/kenzie-dominguez/portfolio/nail-${i + 1}.jpg`,
      alt: `Kenzie Dominguez nail art ${i + 1}`,
    })),
  },
];

export default function AboutSection() {
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);

  return (
    <section id="staff" className="py-20 bg-matte-black">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-4xl md:text-5xl font-serif text-champagne-gold text-center mb-12">
            Meet Our Team
          </h2>
        </ScrollAnimation>

        <div className="space-y-12">
          {staff.map((member, index) => (
            <ScrollAnimation key={member.id} delay={index * 100}>
              <div className={index === 0 ? "mb-16" : ""}>
                {index === 0 && (
                  <h3 className="text-2xl font-serif text-champagne-gold mb-8 text-center">
                    Owner
                  </h3>
                )}
                {index === 1 && (
                  <h3 className="text-2xl font-serif text-champagne-gold mb-8 text-center mt-12">
                    Licensed Nail Techs
                  </h3>
                )}

                <Card className="md:flex md:gap-8">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <div className="relative w-full aspect-[3/4] max-w-xs mx-auto rounded-lg overflow-hidden">
                    <Image
                      src={`/images/staff/${member.id === "becky-bunnell" ? "owner" : member.id}/${member.name.split(" ")[0].toLowerCase()}.jpg`}
                      alt={`${member.name} headshot`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="mt-4 text-center">
                    <h4 className="text-2xl font-serif text-champagne-gold mb-2">
                      {member.name}
                    </h4>
                    <p className="text-foreground/80 text-sm mb-2">{member.title}</p>
                    {member.experience && (
                      <p className="text-foreground/60 text-sm">{member.experience} experience</p>
                    )}
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-6">
                    <p className="text-foreground/80 leading-relaxed mb-4">{member.bio}</p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={`tel:${member.phone.replace(/[^0-9]/g, "")}`}
                        className="text-champagne-gold hover:text-champagne-gold-light transition-colors"
                        aria-label={`Call ${member.name} at ${member.phone}`}
                      >
                        <PhoneIcon size={24} />
                      </a>
                      {member.instagram.map((ig, idx) => (
                        <a
                          key={idx}
                          href={ig.startsWith("http") ? ig : `https://www.instagram.com/${ig.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-champagne-gold hover:text-champagne-gold-light transition-colors"
                          aria-label={`Follow ${member.name} on Instagram`}
                        >
                          <InstagramIcon size={24} />
                        </a>
                      ))}
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-champagne-gold hover:text-champagne-gold-light transition-colors"
                          aria-label={`Follow ${member.name} on Facebook`}
                        >
                          <FacebookIcon size={24} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() => setSelectedStaff(selectedStaff === member.id ? null : member.id)}
                      className="text-champagne-gold hover:text-champagne-gold-light transition-colors mb-4"
                    >
                      {selectedStaff === member.id ? "Hide" : "View"} Portfolio
                    </button>
                    {selectedStaff === member.id && (
                      <div className="max-w-md">
                        <Carousel items={member.portfolio} showDots={true} showArrows={true} />
                      </div>
                    )}
                  </div>
                </div>
              </Card>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

