

function acao(){
var cidade = document.getElementById('cidade').value

var url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(cidade)}&format=json&limit=1`;

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
          //  alert(`Latitude: ${location.lat}, Longitude: ${location.lon}`);
             var lat = location.lat
             var log = location.lon


             fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=wind_speed_10m,&hourly=temperature_2m`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da API');
        }
        return response.json();
    })
    .then(data => {
        //alert(`Velocidade do vento: ${data.hourly.wind_speed_10m}`);
       // alert(data.hourly.temperature_2m)
       // info.innerHTML = data.hourly.temperature_2m

                // Supondo que 'data.hourly.temperature_2m' contenha as temperaturas horárias
                var temperatures = data.hourly.temperature_2m;

                // Número de horas por dia
                var hoursPerDay = 24;

                // Array para armazenar a temperatura média diária
                var dailyAverages = [];

                // Agrupar temperaturas por dia e calcular a média
                for (let i = 0; i < temperatures.length; i += hoursPerDay) {
                    let dailyTemps = temperatures.slice(i, i + hoursPerDay); // Pega 24 temperaturas
                    let dailyAverage = dailyTemps.reduce((sum, temp) => sum + temp, 0) / dailyTemps.length;
                    dailyAverages.push(dailyAverage);
                }

                // Exibir as médias diárias
                
                dailyAverages.forEach((avg, index) => {
                  //  alert(`Dia ${index + 1}: Temperatura média = ${avg.toFixed(2)}°C`);
                // info.innerHTML =`Dia ${index + 1}: Temperatura média = ${avg.toFixed(2)}°C`

                     aviso.innerHTML =""

                        if(index == 0){
                            var dia1 = avg.toFixed(2)
                            info1.innerHTML = 'hoje: <br>' + dia1;
                        }else if(index == 1){
                            var dia2 = avg.toFixed(2)
                            info2.innerHTML = 'amanhã: <br>'+dia2
                        }else if(index == 2){
                            var dia3 = avg.toFixed(2)
                            info3.innerHTML = 'dia 3:<br> '+dia3
                        }else if(index == 3){
                            var dia4 = avg.toFixed(2)
                            info4.innerHTML ='dia 4: <br>'+ dia4
                        }else if(index == 4){
                            var dia5 = avg.toFixed(2)
                            info5.innerHTML = 'dia 5: <br>'+dia5
                        }else if(index == 5){
                            var dia6 = avg.toFixed(2)
                            info6.innerHTML = 'dia 6:<br> '+dia6
                        }else if(index == 6){
                            var dia7 = avg.toFixed(2)
                            info7.innerHTML = 'dia 7:<br> '+ dia7
                        }
                });


    })
    .catch(error => {
        console.error('Erro ao buscar dados de clima:', error);
     //   alert('Erro ao buscar dados de clima');
  boom()
    });


        } else {
           // alert('Não foi possível encontrar a localização para a cidade especificada.');
            aviso.innerHTML ="Não foi possível encontrar a localização para a cidade especificada"
           boom()
        }
    })
    .catch(error => {
        console.error('Erro ao buscar a localização:', error);
        boom()
    });


}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
       acao()
    }
  });

  
function boom(){
    new Notify({
        status: 'error',
        title: 'Erro',
        text: 'vê se essa cidade existe! hahaha',
        effect: 'fade',
        speed: 300,
        autoclose: true,
        autotimeout: 4000,
        position: 'center',
        gap: 50
    });
}