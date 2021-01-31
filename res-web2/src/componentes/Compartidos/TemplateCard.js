import React from "react";
import { Link } from "react-router-dom";

const TemplateCardContext = React.createContext(null);

export default function TemplateCard({titulo, img, alt, url}) {
    return(
        <TemplateCardContext.Provider>
            <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
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
        </TemplateCardContext.Provider>
    )
}