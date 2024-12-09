// Archivo: script.js

document.addEventListener("DOMContentLoaded", () => {
    // Cargar datos desde un archivo JSON
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectElement = document.getElementById("codeSelector");
        const detailsElement = document.getElementById("details");
  
        // Agregar opciones al desplegable
        Object.keys(data).forEach((code) => {
          const option = document.createElement("option");
          option.value = code;
          option.textContent = code;
          selectElement.appendChild(option);
        });
  
        // Manejar selección de código
        selectElement.addEventListener("change", () => {
          const selectedCode = selectElement.value;
          const details = data[selectedCode];
  
          if (details) {
            detailsElement.innerHTML = `
              <h2>Detalles del Código: ${selectedCode}</h2>
              <p><strong>Descripción:</strong> ${details.descripcion}</p>
              <p><strong>Causas:</strong></p>
              <ul>
                ${details.causas.map((causa) => `<li>${causa}</li>`).join("")}
              </ul>
              <p><strong>Recurso:</strong> ${details.recurso}</p>
            `;
          } else {
            detailsElement.innerHTML = "<p>Por favor selecciona un código.</p>";
          }
        });
      })
      .catch((error) => {
        console.error("Error cargando el archivo JSON:", error);
      });
  });
  