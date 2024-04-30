// #region Formulario22
function habilitar() {
  let ciudad = document.getElementById('ciudad');
  let transporte = document.getElementById('transporte');  

  if (ciudad.value !== "Tijuana") {
      transporte.disabled = true;
  } else {
      transporte.disabled = false;
  }
}

function aparecer() {
  let select = document.getElementById('camisa'); // Corregido
  let tr = document.querySelectorAll("tr.talla");
  let form = document.querySelector('.formato');
  let enviarBtn = document.querySelector('input[type="submit"]');
  let comentariosTextarea = document.querySelector('textarea[name="comentarios"]');

  if (select.value === "Si") {
      tr.forEach(row => row.style.display = 'table-row');
      form.style.height = '600px';
      // enviarBtn.style.marginTop = '14px';
      // comentariosTextarea.rows = '4'; 
      // comentariosTextarea.cols = '20'; 
  } else {
      tr.forEach(row => row.style.display = 'none');
      form.style.height = '520px';
      //enviarBtn.style.marginTop = '28px';
      //comentariosTextarea.rows = '1'; 
      //comentariosTextarea.cols = '30';  
  }
}
// #endregion
