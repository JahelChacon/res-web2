import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export default function TemplateCardInicio({ titulo, img, imgWebp, alt, url }) {
    return (
        <Col xl={4} lg={4} md={6} sm={6} xs={12}>
            <Card>
                <picture>
                    <source className="card-img-top" srcSet={imgWebp} type="image/webp" alt={alt} />
                    <source className="card-img-top" src={img} type="image/jpg" alt={alt} />
                    <img className="card-img-top" src={img} alt={alt}></img>
                </picture>
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