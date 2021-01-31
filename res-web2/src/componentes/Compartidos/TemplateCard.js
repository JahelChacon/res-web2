import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import "./TemplateCard.css";

const TemplateCardContext = React.createContext(null);

export default function TemplateCard({titulo, img, alt, url}) {
    return(
        <TemplateCardContext.Provider>
            <Col xl={3} md={4} sm={6} xs={12}>
                <Card>
                    <img src={img} className="card-img-top" style={{height: "180px", width: "100%", objectFit: "cover"}} alt={alt}></img>
                    <Card.Body>
                    <h3>{titulo}</h3>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={url} className="btn btn-success btn-block">Ir</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </TemplateCardContext.Provider>
    )
}