import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

const TemplateCardInicioContext = React.createContext(null);

export default function TemplateCardInicio({titulo, img, alt, url}) {
    return(
        <TemplateCardInicioContext.Provider>
            <Col xl={4} md={4} sm={6} xs={12}>
                <Card>
                    <img src={img} className="card-img-top" alt={alt}></img>
                    <Card.Body>
                        <h3>{titulo}</h3>
                    </Card.Body>
                    <Card.Footer>
                        <Link to={url} className="btn btn-success btn-block">Ir</Link>
                    </Card.Footer>
                </Card>
            </Col>
        </TemplateCardInicioContext.Provider>
    )
}