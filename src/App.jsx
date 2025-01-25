// App.js
import React from "react";
import Header from "./components/Header/Header.component";
import NavBar from "./components/Navbar/Navbar.component";
import Hero from "./components/HeroSection/HeroSection.component";
import Services from "./components/Services/Services.component";
import  TrustedBy from "./components/Partners/Partners.component";
import AboutSection from "./components/AboutUs/Aboutus.component";
import WhySection from "./components/WhyChooseUs/WhyChooseUs.component";
import VideoSection from "./components/VideoIntroduction/VideoIntroduction.component";
import HappyClients from "./components/Testimonials/Testimonials.component";
import StepsComponent from "./components/Pricing/Pricing.component";
import BlogSection from "./components/Blog/Blogs.component";
import Faq from "./components/Faq/Faq.component";
import MobileAppSection from "./components/MobileApp/MobileApp.component";
import StatisticsSection from "./components/StatisticSection/Statistic.component";
import EmailSection from "./components/EmailSection/EmailSection.component";
import BrandSection from "./components/BrandSection/BrandSection.component";
import Footer from "./components/Footer/Footer.component";


import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
       <NavBar /> 
      <Hero />
      < TrustedBy />
      <Services />
      <AboutSection />
      <WhySection />
      <VideoSection />
      <HappyClients/>
      <StepsComponent />
      <BlogSection />
      <Faq/>
      <MobileAppSection/>
      <StatisticsSection/>
      <EmailSection/>
      <BrandSection/>
      <Footer /> 
    </div>
  );
};

export default App;
