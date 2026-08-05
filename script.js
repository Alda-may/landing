const form = document.querySelector('#form-pedido');
const mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Detiene el envío predeterminado

    // Capturar los valores ingresados por el usuario
    const datos = {
        nombre: document.querySelector('#nombre').value.trim(),
        email: document.querySelector('#email').value.trim(),
        direccion: document.querySelector('#direccion').value.trim()
    };

    // Confirmación por consola de datos capturados
    console.log("Datos capturados con éxito:", datos);

    // Mostrar mensaje de confirmación de compra en la página
    mensaje.textContent = `¡Gracias ${datos.nombre}! Los datos fueron capturados y la compra se realizó con éxito.`;
    mensaje.style.display = 'block';

    // Limpiar el formulario
    form.reset();

    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 5000); // Se oculta tras 5 segundos (5000 ms)
});