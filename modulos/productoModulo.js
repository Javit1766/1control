import { guardarProductos, obtenerProductos } from "../control/miLocalStorage.js";

export function item(titulo, urlImg, Descripcion, Precio) {

    let item = document.createElement('div');
    item.className = "item";

    let h1 = document.createElement('h1');
    h1.textContent = titulo;   
    h1.className = "h1";
    item.appendChild(h1);

    let img = document.createElement('img');
    img.src = urlImg;
    img.className = "img";
    item.appendChild(img);

    let descripcion = document.createElement('p');
    descripcion.innerText = Descripcion;
    descripcion.className = "Descripcion";
    item.appendChild(descripcion);

    let precio = document.createElement('p');
    precio.innerText = Precio;   
    precio.className = "precio";
    item.appendChild(precio);

    item.addEventListener('click', () => {
        let carritoLocalStorage = obtenerProductos();
        console.log("carrito: ", carritoLocalStorage)

        carritoLocalStorage.push({precio:precio,nombre:titulo});
        guardarProductos(carritoLocalStorage);
        console.log("Producto en LocalStorage");
        location.reload();
    });

    return item;
}