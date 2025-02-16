document.addEventListener('DOMContentLoaded', function() {
    fetch('/static/estados.json')
        .then(response => response.json())
        .then(data => {
            // Llenar los select con los estados
            const origenSelect = document.getElementById('origen');
            const destinoSelect = document.getElementById('destino');

            for (const estado in data) {
                const option = document.createElement('option');
                option.value = estado;
                option.textContent = estado;
                origenSelect.appendChild(option);
                destinoSelect.appendChild(option.cloneNode(true)); // Clonar para el destino
            }

            // Llenar las ciudades del origen cuando se selecciona un estado
            origenSelect.addEventListener('change', function() {
                const ciudadSelect = document.getElementById('ciudad-origen');
                ciudadSelect.innerHTML = ''; // Limpiar las ciudades previas

                const ciudades = data[origenSelect.value] || [];
                ciudades.forEach(ciudad => {
                    const option = document.createElement('option');
                    option.value = ciudad;
                    option.textContent = ciudad;
                    ciudadSelect.appendChild(option);
                });
            });

            // Llenar las ciudades del destino cuando se selecciona un estado
            destinoSelect.addEventListener('change', function() {
                const ciudadSelect = document.getElementById('ciudad-destino');
                ciudadSelect.innerHTML = ''; // Limpiar las ciudades previas

                const ciudades = data[destinoSelect.value] || [];
                ciudades.forEach(ciudad => {
                    const option = document.createElement('option');
                    option.value = ciudad;
                    option.textContent = ciudad;
                    ciudadSelect.appendChild(option);
                });
            });
        });
});
