import React from 'react' 
import { Col,Card } from 'react-bootstrap'

const BrandCard = ({img}) => {
return (
<Col
XS="6"
sm="6"
md="4"
lg="2"
className="my-2 d-flex justify-content-center">
<Card
className="my-1"
style={{
width: "50%",
height: "50px",
borderRadius: "8px",
border: "none",
backgroundColor: "#FFFFFF",
}}>
<Card.Img style={{ width: "100%", height: "100px" }} src={img} />
</Card>
</Col>
)
}
export default BrandCard