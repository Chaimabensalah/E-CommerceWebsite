import React from 'react';
import { Container } from 'react-bootstrap';
import lapss from '../../images/lapss.png';

const DiscountSection = () => {
return (
    <Container>
<div class="container1">
    <div class="card_box">
    <img
        style={{ height: "300px", width: "450px" }}
        className=""
        src={lapss}
        alt="Promotion Image"
    />
          <p>Unbeatable Deals on PCs – Save Up to 30%!</p>

      <span></span>
    </div>
</div>
</Container>

)
}

export default DiscountSection