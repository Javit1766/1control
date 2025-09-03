const LOCAL_STORAGE_KEY_ASSIGNMENTS = 'carrito';

function guardarProductos(productos) {
    localStorage.setItem(LOCAL_STORAGE_KEY_ASSIGNMENTS, JSON.stringify(productos));
}

function obtenerProductos() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_ASSIGNMENTS)) || [];
}

export { LOCAL_STORAGE_KEY_ASSIGNMENTS, guardarProductos, obtenerProductos };