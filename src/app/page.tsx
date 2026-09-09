'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutSection from '../components/AboutSection';
import ParallaxBanner from '../components/ParallaxBanner';
import ChefRecommended from '../components/ChefRecommended';
import PopularDishesMenu from '../components/PopularDishesMenu';
import DiningExperience from '../components/DiningExperience';
import ChefTeam from '../components/ChefTeam';
import ReviewsSection from '../components/ReviewsSection';
import ReservationSection from '../components/ReservationSection';
import CartDrawer from '../components/CartDrawer';
import LightboxModal from '../components/LightboxModal';
import Footer from '../components/Footer';

export default function HomePage() {
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    caption: string;
  }>({
    isOpen: false,
    imageSrc: '',
    caption: '',
  });

  const handleOpenLightbox = (imageSrc: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageSrc,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToReservation = () => {
    const resSection = document.getElementById('reservation');
    if (resSection) {
      resSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Header & Sticky Navbar */}
      <Navbar onOpenReservation={handleScrollToReservation} />

      {/* Hero Slider (Recreating Slider Revolution) */}
      <HeroSlider />

      {/* About Section with Chef Plating & Signature */}
      <AboutSection />

      {/* Parallax Breakout 1: Chef Recommended */}
      <ParallaxBanner
        image="/images/shutterstock_178075700.jpg"
        title="Chef Recommended"
        subtitle="Signature Royal Thai dishes recommended by our master chefs"
        objectPosition="center 45%"
      />

      {/* 3-Column Classic Menu Cards */}
      <ChefRecommended onOpenLightbox={handleOpenLightbox} />

      {/* Parallax Breakout 2: Popular Dishes */}
      <ParallaxBanner
        image="/images/photodune-5087439-chicken-tagine-m.jpg"
        title="Popular Thai Dishes"
        subtitle="Our most beloved curries, noodles, stir-fries & drinks"
        objectPosition="center 38%"
      />

      {/* 2-Column Dotted Leader Menu */}
      <PopularDishesMenu />

      {/* Parallax Breakout 3: Ingredients */}
      <ParallaxBanner
        image="/images/shutterstock_174816359.jpg"
        title="Fresh Thai Herbs"
        subtitle="Hand-pounded galangal, lemongrass, sweet basil & kaffir lime"
        objectPosition="center 50%"
      />

      {/* Dining Experience & 4-Photo Mosaic Gallery */}
      <DiningExperience
        onOpenLightbox={handleOpenLightbox}
        onOpenReservation={handleScrollToReservation}
      />

      {/* Chef Team Section (Parallax Wine Glasses Background) */}
      <ChefTeam />

      {/* Guest Reviews & Google 4.6-Star Rating Section */}
      <ReviewsSection />

      {/* Online Table Reservation Section */}
      <ReservationSection />

      {/* Interactive Cart Drawer */}
      <CartDrawer />

      {/* Image Lightbox Viewer */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        imageSrc={lightboxState.imageSrc}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      {/* Footer & Back to Top */}
      <Footer />
    </main>
  );
}
