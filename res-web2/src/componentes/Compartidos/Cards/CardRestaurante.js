import React from "react";
import { Col, Button } from "react-bootstrap";
import "./TemplateCard.css";

export default function CardRestaurante({ titulo, img, alt, onClick }) {
    return (
        <Col xl={3} lg={3} md={4} sm={6} xs={12}>
            <img
                src={img}
                alt={alt}
                style={{ height: "120px", width: "120px", objectFit: "cover" }}></img>
            <Button onClick={onClick} style={{ width: '95%' }}>{titulo}</Button>
        </Col>
    )
}
