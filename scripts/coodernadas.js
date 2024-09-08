

//NÃO ESTÁ SENDO USADO
//APENAS PARA EXEMPLO



// Solicite o nome da cidade ao usuário
var cityName = prompt("Digite o nome da cidade:");

// URL da API Nominatim com o nome da cidade
var url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cityName)}&format=json&limit=1`;

// Faz a requisição à API
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        // Verifica se houve resultados
        if (data.length > 0) {
            var location = data[0];
            alert(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
        } else {
            alert('Não foi possível encontrar a localização para a cidade especificada.');
        }
    })
    .catch(error => {
        console.error('Erro ao buscar a localização:', error);
        alert('Erro ao buscar a localização');
    });
