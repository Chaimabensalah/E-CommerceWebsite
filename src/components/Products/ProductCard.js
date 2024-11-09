import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import favoff from "../../images/favoff.png";
import lap from "../../images/lap.png";
import rate from "../../images/rate.png";


const ProductCard = ({ imageSrc }) => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
            <Card
                className="my-2 product-card"
                style={{
                    width: "100%",
                    height: "360px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                }}
            >
                    <Card.Img style={{ height: "250px", width: "100%", borderRadius: "10px 10px 0 0" }} src={imageSrc} />
                
                    <div className="d-flex justify-content-start mx-2 mt-2">
                             <img
                                    src={favoff}
                                    alt="Add to Favorites"
                                    className="text-center"
                                    style={{
                                    height: "24px",
                                    width: "26px",
                                    cursor: 'pointer'
                                     }}
                             />
                    </div>

                
                <Card.Body>
                    <Card.Title>
                        <div className="card-title" style={{ fontWeight: "600", fontSize: "16px", color: "#333" }}>
                            Sample Product Title
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <img
                                    src={rate}
                                    alt="Rating"
                                    height="16px"
                                    width="16px"
                                />
                                 <img
                                    src={rate}
                                    alt="Rating"
                                    height="16px"
                                    width="16px"
                                />
                                 <img
                                    src={rate}
                                    alt="Rating"
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2" style={{ fontSize: "14px", color: "#777" }}>4.5</div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="card-price" style={{ fontSize: "15px", fontWeight: "bold", color: "#333" }}>150</div>
                                <div className="card-currency mx-1" style={{ fontSize: "14px", color: "#777" }}>$</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ToastContainer />
        </Col>
    );
}

export default ProductCard;
