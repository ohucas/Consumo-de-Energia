
const monthlyData = {
    labels: ['Agosto', 'Setembro', 'Outubro', 'Novembro'],
    datasets: [{
        label: 'Consumo de Energia (kWh)',
        data: [150, 200, 180, 0],
        borderColor: '#6200ea',
        backgroundColor: 'rgba(98, 0, 234, 0.1)',
        fill: true,
        tension: 0.4
    }]
};


function updateNovemberConsumption(averageConsumption) {
    monthlyData.datasets[0].data[3] = averageConsumption;
    energyChart.update();
}


const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'line',
    data: monthlyData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20
                }
            }
        }
    }
});


let consumptionData = [50, 80, 90, 120, 110];
let averageConsumption = consumptionData.reduce((a, b) => a + b, 0) / consumptionData.length;

updateNovemberConsumption(averageConsumption);


document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});
