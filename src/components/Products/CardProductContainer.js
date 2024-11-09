import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from "../Uitily/SubTiltle"
import ProductCard from './ProductCard'
import machine from "../../images/machine.png";
import lap from "../../images/lap.png";
import iphone from "../../images/iphone.png";
import mixeur from "../../images/mixeur.png";

const CardProductContainer = () => {
    return (
    <Container >
    <SubTitle title="Most Sale" btntitle="More" />
    <Row className='my-2 d-flex justify-content-between'>
    <ProductCard imageSrc={machine} />
    <ProductCard imageSrc={mixeur} />
    <ProductCard imageSrc={lap} />
    <ProductCard imageSrc={iphone} />
    </Row>
    </Container>
    )  
    }
    
    export default CardProductContainer