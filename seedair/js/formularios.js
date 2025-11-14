// Ejemplo: validación de registro, login y contacto.
document.addEventListener('DOMContentLoaded', function() {
  // CREAR CUENTA
  const formularioCuenta = document.getElementById('formularioCuenta');
  if(formularioCuenta) {
    formularioCuenta.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Cuenta creada correctamente');
      formularioCuenta.reset();
    });
  }
  // LOGIN
  const formularioSesion = document.getElementById('formularioSesion');
  if(formularioSesion) {
    formularioSesion.addEventListener('submit', function(e){
      e.preventDefault();
      alert("Inicio de sesión simulado :)");
      formularioSesion.reset();
    });
  }
  // CONTACTO
  const formularioContacto = document.getElementById('formularioContacto');
  if(formularioContacto) {
    formularioContacto.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Mensaje enviado correctamente');
      formularioContacto.reset();
    });
  }
  // REPORTAR
  const formularioReporte = document.getElementById('formularioReporte');
  if(formularioReporte) {
    formularioReporte.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Reporte enviado correctamente');
      formularioReporte.reset();
    });
  }
});
