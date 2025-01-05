
let userName = 'Lucas';
let realTimeConsumption = 0;
let averageConsumption = 0;
let alerts = [];
let totalMonthConsumption = 0;
let dailyConsumption = [];
let monthlyAverage = 0;  


function displayUserInfo() {
    const userNameElement = document.getElementById('user-name');
    userNameElement.textContent = userName;
}


function updateRealTimeData() {

    realTimeConsumption = (Math.random() * 5).toFixed(2);
    averageConsumption = (Math.random() * 4).toFixed(2);


    alerts = [];
    if (realTimeConsumption > 3) {
        alerts.push("Consumo muito alto! Verifique os dispositivos.");
    }


    document.getElementById('current-consumption').textContent = realTimeConsumption;
    document.getElementById('average-consumption').textContent = averageConsumption;
    document.getElementById('alerts-list').textContent = alerts.join(', ') || "Nenhum alerta.";


    updateMonthlyConsumption(realTimeConsumption);
}

function updateMonthlyConsumption(consumption) {
    const today = new Date();
    const dayOfMonth = today.getDate();


    dailyConsumption[dayOfMonth - 1] = consumption;


    totalMonthConsumption = dailyConsumption.reduce((sum, value) => sum + (value || 0), 0);


    const daysRecorded = dailyConsumption.filter(consumption => consumption > 0).length;
    monthlyAverage = (totalMonthConsumption / daysRecorded).toFixed(2);


    document.getElementById('monthly-average-consumption').textContent = monthlyAverage;
    document.getElementById('total-month-consumption').textContent = totalMonthConsumption.toFixed(2);
}


function startRealTimeMonitoring() {
    setInterval(updateRealTimeData, 15000);
}


function showTab(tabName) {

    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');


    document.getElementById(tabName).style.display = 'block';
}


function goBack() {
    window.history.back();
}


window.onload = function() {
    displayUserInfo();
    startRealTimeMonitoring();
};
