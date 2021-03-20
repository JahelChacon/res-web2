import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { Spinner } from "react-bootstrap";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { logIn, limpiarMensaje } from '../../store/actions/user';
import { Redirect } from "react-router-dom";
import MensajeError from "../Compartidos/Mensajes/MensajeError";

const Login = ({ signIn, usuario, errorMessage, limpiarError }) => {
    const { register, errors, handleSubmit, reset } = useForm();
    const [cargando, setCargando] = useState(false);

    const onSubmit = (formData) => {
        setCargando(true)
        signIn(formData.usuario, formData.contrasena);
    };

    const onLimpiar = () => {
        reset();
        limpiarError();
        setCargando(false);
    };

    useEffect(() => {
        limpiarError();
    }, [limpiarError])

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
                                <MensajeError error={errorMessage} mensaje='Usuario o contraseña incorrectos' />
                            </Card.Body>
                            <Card.Footer style={{ textAlign: "right" }}>
                                {(cargando && !usuario && !errorMessage) ?
                                    <div className="ml-4">
                                        <Spinner animation="border" />
                                    </div>
                                    :
                                    <React.Fragment>
                                        <Button type={"submit"} variant={"outline-success"}>Entrar</Button> {' '}
                                        <Button type={"reset"} onClick={onLimpiar} variant={"outline-warning"}>Limpiar</Button> {' '}
                                    </React.Fragment>
                                }
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </form>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    errorMessage: state.userReducer ? state.userReducer.errorMessage : false,
});


const mapDispatchToProps = dispatch => ({
    signIn: (usuario, contrasena) => dispatch(logIn(usuario, contrasena)),
    limpiarError: () => dispatch(limpiarMensaje()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
