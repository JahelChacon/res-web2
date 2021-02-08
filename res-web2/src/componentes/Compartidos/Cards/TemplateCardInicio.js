import React from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

const TemplateCardInicioContext = React.createContext(null);

export default function TemplateCardInicio({titulo, img, imgWebp, alt, url}) {
    return(
        <TemplateCardInicioContext.Provider>
            <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                    <picture>
                      <source class="card-img-top" srcset={imgWebp} type="image/webp" alt={alt} />
                      <source class="card-img-top" src={img} type="image/jpg" alt={alt} />
                      <img class="card-img-top" src={img} alt={alt}></img>
                    </picture>
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