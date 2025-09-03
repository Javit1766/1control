import { obtenerProductos } from "../../control/miLocalStorage.js";

export function nav(){
 
    let nav = document.createElement('div');
    nav.className = "nav";
    
    let div1 = document.createElement('div');
    div1.className = "div";
    div1.textContent = "🏠";
    nav.appendChild(div1);
    
    let div2 = document.createElement('div');
    div2.className = "div";
    div2.textContent = "📦";
    nav.appendChild(div2);

    let div3 = document.createElement('div');
    div3.className = "div";
    div3.textContent = "❓";
    nav.appendChild(div3);

    let div4 = document.createElement('div');
    div4.href = "pages/carrito/carrito.html";
    div4.className = "div";
    div4.textContent = "🛒";
     nav.appendChild(div4);

    let divItem = document.createElement('div');
    divItem.className = "div-Item"
    divItem.textContent = obtenerProductos().lenght;

    
    return nav;
}