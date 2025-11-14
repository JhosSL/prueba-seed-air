// Ejemplo de validación para formularios
document.addEventListener('DOMContentLoaded', function() {
  // Validación simple en crear cuenta
  const nombre = document.getElementById('nombre');
  if(nombre) {
    nombre.addEventListener('input', function(){
      const v = nombre.value.trim();
      let msg = document.getElementById('nombre-error');
      let ok = document.getElementById('nombre-correcto');
      if(v.length >= 2 && /^[a-zA-ZáéíóúÑñ\s]+$/.test(v)) {
        msg.textContent=""; ok.style.display="inline";
      } else {
        msg.textContent = v.length<2 ? "Mínimo 2 letras" : "Solo letras";
        ok.style.display="none";
      }
    });
  }
});
