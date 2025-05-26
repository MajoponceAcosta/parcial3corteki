document.getElementById("miFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
    const nombre = document.getElementById("nombre").value;
    const mensaje = "¡Bienvenido, " + nombre + "!";
    document.getElementById("mensaje").textContent = mensaje;
});