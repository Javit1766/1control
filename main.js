import { header } from "./componentes/header/headerComponents.js"
import { nav } from "./componentes/nav/navComponents.js"
import { seccion1 } from "./componentes/seccion1/seccion1Components.js"
 function seccion(){

    let seccion = document.createElement('section');

    // header
    seccion.appendChild(header());

    // seccion
    seccion.appendChild(seccion1());
     
    // nav
    seccion.appendChild(nav())
    return seccion;
    
}

document.body.appendChild(seccion());