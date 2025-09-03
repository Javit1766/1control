import { header } from "../componentes/header/headerComponents.js";
import { listaCarrito } from "../componentes/seccionCarrito/listaCarrito.js";

let seccionCarrito = document.createTreeWalker('section');

seccionCarrito.appendChild(header());

seccionCarrito.appendChild(listaCarrito());

document.body.appendChild(seccionCarrito);