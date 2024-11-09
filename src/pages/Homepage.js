
import React from 'react';
import DiscountSection from '../components/Home/DiscountSection';
import Slider from '../components/Home/Slider';
import CardProductContainer from '../components/Products/CardProductContainer';
import HomeCategory from './HomeCategory';
import BrandFeatured from '../components/Brand/BrandFeatured';
import Footer from '../components/Uitily/Footer';
import NavBarLogin from '../components/Uitily/NavBarLogin';

const HomePage = () => {
return (
<div className='font' style={{ minHeight:'670px' }}>
    <Slider />
    <HomeCategory />
    <CardProductContainer title="most sale" btntitle="More"/>
    <DiscountSection />
    <CardProductContainer title="most sale" btntitle="More"/>
    <BrandFeatured title="Brands" btntitle="More"/>
</div>
)
}

export default HomePage