import React from 'react';
import { Container, Row } from 'react-bootstrap';
import applelogo from "../../images/applelogo.png";
import brand1 from "../../images/brand1.png";
import SamsungLogo from "../../images/SamsungLogo.png";
import jumia from "../../images/jumia.png";
import lg from "../../images/lg.png";

import SubTitle from "../Uitily/SubTiltle";
import BrandCard from './BrandCard';

const BrandFeatured = ({title,btntitle}) => {
    return (
    <Container >
    <SubTitle title={title} btntitle={btntitle} />
    <Row className='my-2 d-flex justify-content-between'>
    <BrandCard img={brand1}/>
    <BrandCard img={lg}/>
    <BrandCard img={applelogo}/>
    <BrandCard img={SamsungLogo}/>
    <BrandCard img={brand1}/>
    <BrandCard img={jumia}/>
    </Row>
    </Container>
    )  
    }
    
    export default BrandFeatured