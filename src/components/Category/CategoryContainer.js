import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from '../../components/Category/CategoryCard';
import cask from "../../images/cask.wpng.webp";
import cat2 from '../../images/cat2.png';
import clothe from "../../images/clothe.png";
import headphones from "../../images/headphones.png";
import labtop from "../../images/labtop.png";
import pic from "../../images/pic.png";
import speaker from "../../images/speaker.png";
import watch from "../../images/watch.png";

const CategoryContainer = () => {
return (
    <Container>
    <div className="admin-content-text">All Categorys</div>
    <Row className='my-2 d-fmex justify-content-between'>
    <CategoryCard title="fundation" img={cat2} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Peach */}
    <CategoryCard title="laptop" img={labtop} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Blue */}
    <CategoryCard title="Speaker" img={speaker} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="watch" img={watch} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="cask" img={cask} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    </Row>

    <Row className='my-2 d-fmex justify-content-between'>
    <CategoryCard title="Hoodi" img={clothe} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="headphones" img={headphones} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="cask" img={cask} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="tanjra" img={pic} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Pink */}
    <CategoryCard title="laptop" img={labtop} background="#E5E4E2"  price="123" originalPrice="1023" /> {/* Soft Blue */}
    </Row>

</Container>
)}
export default CategoryContainer