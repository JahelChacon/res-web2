import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import "./TemplateCard.css";

export default function TemplateCard({ titulo, img, imgWebp, alt, url }) {
    return (
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
            <Card>
                <picture>
                    <source className="card-img-top" srcSet={imgWebp} type="image/webp" alt={alt}
                        style={{ height: "180px", width: "100%", objectFit: "cover" }} />
                    <source className="card-img-top" src={img} type="image/jpg" alt={alt}
                        style={{ height: "180px", width: "100%", objectFit: "cover" }} />
                    <img className="card-img-top" src={img} alt={alt}
                        style={{ height: "180px", width: "100%", objectFit: "cover" }}></img>
                </picture>
                {/* <img src={img} className="card-img-top" style={{height: "180px", width: "100%", objectFit: "cover"}} alt={alt}></img> */}
                <Card.Body>
                    <h3>{titulo}</h3>
                </Card.Body>
                <Card.Footer>
                    <Link to={url} className="btn btn-success btn-block">Ir</Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}