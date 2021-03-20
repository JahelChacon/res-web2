import React, { useState } from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { logIn } from '../../store/actions/user';
import { Redirect } from "react-router-dom";
import MensajeError from "../Compartidos/Mensajes/MensajeError";

const Login = ({ signIn, usuario }) => {
    const { register, errors, handleSubmit, reset } = useForm();
    const [intentoLogin, setIntentoLogin] = useState(false);

    const onSubmit = function (formData) {
        signIn(formData.usuario, formData.contrasena);
        setIntentoLogin(true);
    };

    if (usuario) {
        if (usuario.administradorSistema ||
            usuario.administradorCuentas ||
            usuario.administradorSeguridad) {
            return <Redirect to="/" />;
        } else if (usuario.administradorRestaurante) {
            return <Redirect to="apertura-caja" />;
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Row>
                    <Col></Col>
                    <Col xl={6} lg={6} md={8} sm={12} xs={12}>
                        <Card>
                            <Card.Header className="bg-primary text-white">
                                <h3>Login</h3>
                            </Card.Header>
                            <Card.Body>
                                <div className={"form-group"}>
                                    <input
                                        type="text"
                                        name="usuario"
                                        className={"form-control"}
                                        placeholder={"Usuario"}
                                        ref={register({
                                            required: "Debe insertar un valor",
                                            maxLength: { value: 65, message: "El largo máximo es de 65 caracteres" }
                                        })}
                                    />
                                    {errors.usuario && (<div style={{ color: "red", fontSize: "14px" }}>{errors.usuario.message}</div>)}
                                </div>
                                <div className={"form-group"}>
                                    <input
                                        type="password"
                                        name="contrasena"
                                        className={"form-control"}
                                        placeholder={"Contraseña"}
                                        ref={register({
                                            required: "Debe insertar un valor",
                                            maxLength: { value: 40, message: "El largo máximo es de 40 caracteres" }
                                        })}
                                    />
                                    {errors.contrasena && (<div style={{ color: "red", fontSize: "14px" }}>{errors.contrasena.message}</div>)}
                                </div>
                                <MensajeError error={!usuario && intentoLogin} mensaje='Usuario o contraseña incorrectos' />
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                <Button type={"submit"} variant={"outline-success"}>Entrar</Button> {' '}
                                <Button type={"reset"} onClick={reset} variant={"outline-warning"}>Limpiar</Button> {' '}
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </form>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    signIn: (usuario, contrasena) => dispatch(logIn(usuario, contrasena)),
});

export default connect(null, mapDispatchToProps)(Login);
