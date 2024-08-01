function calcularRetencion() {
  // Obtener los valores de los campos de entrada
  const montoExonerado = parseFloat(document.getElementById('montoExonerado').value);
  const montoConIVA = parseFloat(document.getElementById('montoConIVA').value);
  const tasa = parseFloat(document.getElementById('tasa').value) / 100;
  
  // Validar que los valores sean números válidos
  if (isNaN(montoExonerado) || isNaN(montoConIVA) || isNaN(tasa)) {
      alert('Por favor, ingrese valores válidos.');
      return;
  }
  
  // Alícuota Impositiva fija del 16%
  const alicuota = 16 / 100;
  
  // Calcular el IVA total sobre el monto con IVA
  const ivaTotal = montoConIVA * alicuota;
  
  // Calcular la retención solo sobre el monto con IVA
  const retencion = montoConIVA * alicuota * tasa;
  
  // Calcular el total de la transacción
  const montoTotal = montoExonerado + montoConIVA + ivaTotal;
  
  // Calcular el monto total a pagar después de la retención
  const montoTotalAPagar = montoTotal - retencion;
  
  // Mostrar el resultado y el resumen de la transacción
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
      <div id="resumen">
          <h2>Resumen de la Transacción</h2>
          <div class="detalle">
              <p>Monto Total Exonerado:</p>
              <strong>${montoExonerado.toFixed(2)} Bs</strong>
          </div>
          <div class="detalle">
              <p>Monto Total con IVA:</p>
              <strong>${montoConIVA.toFixed(2)} Bs</strong>
          </div>
          <div class="detalle">
              <p>Alícuota Impositiva (IVA):</p>
              <strong>16.00%</strong>
          </div>
          <div class="detalle">
              <p>IVA Total:</p>
              <strong>${ivaTotal.toFixed(2)} Bs</strong>
          </div>
          <div class="detalle">
              <p>Tasa de Retención:</p>
              <strong>${(tasa * 100).toFixed(2)}%</strong>
          </div>
          <div class="detalle">
              <p>Monto Total de la Transacción:</p>
              <strong>${montoTotal.toFixed(2)} Bs</strong>
          </div>
          <div class="detalle">
              <p><strong>Monto de la Retención:</strong></p>
              <strong>${retencion.toFixed(2)} Bs</strong>
          </div>
          <div class="detalle">
              <p><strong>Monto Total a Pagar:</strong></p>
              <strong>${montoTotalAPagar.toFixed(2)} Bs</strong>
          </div>
      </div>
  `;
}

function reiniciarFormulario() {
  document.getElementById('retencion-form').reset();
  document.getElementById('resultado').innerHTML = '';
}