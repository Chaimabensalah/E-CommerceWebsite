import React, { useState } from 'react';
import DiscountSection from '../components/Home/DiscountSection';
import Slider from '../components/Home/Slider';
import CardProductContainer from '../components/Products/CardProductContainer';
import HomeCategory from './HomeCategory';
import BrandFeatured from '../components/Brand/BrandFeatured';

const HomePage = () => {
  // Declare state for theme (light or dark)
  const [theme, setTheme] = useState('light');

  // Function to switch themes
  const switchTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className='font' style={{ minHeight: '670px' }} data-theme={theme}>
      <Slider />
      <HomeCategory />
      <CardProductContainer title="Most Sale" btntitle="More" />
      <DiscountSection />
      <CardProductContainer title="Most Sale" btntitle="More" />
      <BrandFeatured title="Brands" btntitle="More" />
    </div>
  );
};

export default HomePage;
