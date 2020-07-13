import React from 'react';

import './App.css';
import HeaderComponent from './components/HeaderComponent';
import IntroSections from './components/IntroSections';
import AboutUsSection from './components/AboutUsSection';
import ServicesSections from './components/ServicesSections';
import WhyUsSections from './components/WhyUsSections';
import CallToActionsSection from './components/CallToActionsSection';
import FeaturesSections from './components/FeaturesSections';
import PortfolioSection from './components/PortfolioSection';
import ClientsSections from './components/ClientsSections';
import TeamSections from './components/TeamSections';
import PricingSections from './components/PricingSections';
import ClientsTwoSections from './components/ClientsTwoSections';
import FrequentlyAsk from './components/FrequentlyAsk';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <IntroSections/>
      <AboutUsSection/>
      <ServicesSections/>
      <WhyUsSections/>
      <CallToActionsSection/>
      <FeaturesSections/>
      <PortfolioSection/>
      <ClientsSections/>
      <TeamSections/>
      <ClientsTwoSections/>
      <PricingSections/>
      <FrequentlyAsk/>
      <Footer/>
    </div>
  );
}

export default App;
