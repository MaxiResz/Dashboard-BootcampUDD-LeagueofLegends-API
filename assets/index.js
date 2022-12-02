import {pushData, attack, defense, magic, difficult, names} from './pushData.js'
const input = document.getElementById('inputChamp');
const button = document.getElementById('button');
const div = document.getElementById('myChart');

function getChart(){
    div.innerHTML='';
   const ctx = document.createElement('canvas');
   div.appendChild(ctx);

    const myChart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'Ataque',
                data: attack,
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgb(255, 99, 132)',
               
            }, {
                label: 'Magia',
                data: magic,
                
                backgroundColor: 'rgba(151, 0, 207, 1)',
                borderColor: 'rgb(54, 162, 235)',
                
            },
            {
                label: 'Dificultad',
                data: difficult,
              
                backgroundColor: 'rgba(8, 175, 8, 1)',
                borderColor: 'rgb(154, 162, 235)',
                
            },
            {
                label: 'Defensa',
                data: defense,
                backgroundColor: 'rgba(54, 162, 235, 1)',
                borderColor: 'rgb(154, 62, 235)',
            }]
        },

        options: {
            tooltips: {
              mode: 'index'
            }
          }
            
    })
}
async function getData(){
    const api = 'https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json';

    const response = await axios.get(api)

    const data = await response.data.data;
    
    const data2 = Object.entries(data).slice(0)
    
    return data2;     
}
button.addEventListener('click', async () =>{
    const data = await getData();
    console.log(data)
    const inputValue = input.value;
    console.log(inputValue.length);
    const filterData = data.filter(champion => champion[0] == inputValue)
    pushData(filterData);
    getChart()
    
})