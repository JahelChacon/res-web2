import React from "react";
import { Link } from "react-router-dom";

const TemplateCardInicioContext = React.createContext(null);

export default function TemplateCardInicio({titulo, img, alt, url}) {
    return(
        <TemplateCardInicioContext.Provider>
            <div className="col-xl-4 col-md-4 col-sm-6 col-xs-12">
                <div className="card">
                    <img src={img} className="card-img-top" alt={alt}></img>
                    <div className="card-body">
                        <h3>{titulo}</h3>
                    </div>
                    <div className="card-footer">
                        <Link to={url} className="btn btn-success btn-block">Ir</Link>
                    </div>
                </div>
            </div>
        </TemplateCardInicioContext.Provider>
    )
}