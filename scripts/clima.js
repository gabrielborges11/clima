
//NÃO ESTÁ SENDO USADO
//APENAS PARA EXEMPLO

var lat = prompt("Digite a latitude:");
var log = prompt("Digite a longitude:");

// URL da API formatada corretamente
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=wind_speed_10m,&hourly=temperature_2m`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        //alert(`Velocidade do vento: ${data.hourly.wind_speed_10m}`);
        alert(data.hourly.temperature_2m)
    })
    .catch(error => {
        console.error('Erro ao buscar dados de clima:', error);
        alert('Erro ao buscar dados de clima');
    });
