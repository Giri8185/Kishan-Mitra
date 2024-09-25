import React from 'react'
import NavBarSection from '../components/NavBarSection'
import HeroSection from '../components/HeroSection'
import Content from '../components/Content'
import GallarySection from '../components/GallarySection'
import HoverSction from '../components/HoverSction'
import FeatureSection from '../components/FeatureSection'
import PricingSection from '../components/PricingSection'
import TeamSection from '../components/TeamSection'
import TestiMonialSection from '../components/TestiMonialSection'
import ContactSection from '../components/ContactSection'
import FooterSction from '../components/FooterSction'

const Landingpage = () => {
  return (
    <div>
      <NavBarSection/>
      <HeroSection/>
      <Content/>
      <GallarySection/>
      <HoverSction />
      <FeatureSection />
      <PricingSection />
      <TeamSection />
      <TestiMonialSection />
      <ContactSection />
      <FooterSction />
    </div>
  )
}

export default Landingpage