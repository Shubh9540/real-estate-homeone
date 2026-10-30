import React from 'react';
import { FourHomelessTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { OurProperties } from '@/components/sections/OurProperties';
import { Agents } from '@/components/sections/Agents';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/common/Footer';

export const dynamic = 'force-dynamic';

export default function Home() {
  const templateData: FourHomelessTemplateData = rawData;
  const sectionData = templateData?.categories?.RealEstate?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="bg-[var(--color-bg-main)] min-h-screen flex flex-col scroll-smooth">
      <TopBar data={sectionData.TopBar?.variants?.FourHomelessTopBar2} />
      <Header data={sectionData.Header?.variants?.FourHomelessHeader2} />
      <Hero data={sectionData.Hero?.variants?.FourHomelessHero2} />
      <AboutUs data={sectionData.AboutUs?.variants?.FourHomelessAboutUs2} />
      <Services data={sectionData.Services?.variants?.FourHomelessServices2} />
      <WhyChooseUs data={sectionData.whyChooseUs?.variants?.FourHomelessWhyChooseUs2} />
      <OurProperties data={sectionData.OurProperties?.variants?.FourHomelessOurProperties2} />
      <Agents data={sectionData.Agents?.variants?.FourHomelessAgents2} />
      <Testimonials data={sectionData.Testimonials?.variants?.FourHomelessTestimonials2} />
      <Contact data={sectionData.contact?.variants?.FourHomelessContact2} />
      <Footer data={commonData.Footer} />
    </main>
  );
}
