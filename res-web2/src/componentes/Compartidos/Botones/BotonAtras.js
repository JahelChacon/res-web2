import { React } from "react";
import { Link } from "react-router-dom";

export default function BotonAtras({ url }) {
  return (
    <Link to={url ? url : '/'} className="btn btn-outline-danger">Atrás</Link>
  )
}