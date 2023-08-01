function mostrarImagen(src) {
    const modal = document.getElementById('modal');
    const imagenMostrada = document.getElementById('imagenMostrada');

    imagenMostrada.src = src;
    modal.style.display = 'flex';
}

function cerrarImagen() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}