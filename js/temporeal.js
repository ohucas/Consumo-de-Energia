let consumptionData = [];
let alertThreshold = 5;


const user = {
    name: "Lucas Brito Lopes",
    email: "lucasbrito_lopes@hotmail.com"
};


document.getElementById("user-name").innerText = user.name;
document.getElementById("user-email").innerText = user.email;


setInterval(() => {
    updateConsumption();
}, 15000);

function updateConsumption() {

    const currentConsumption = Math.random() * 9 + 1;
    consumptionData.push(currentConsumption);


    document.getElementById("kwh").innerText = `${currentConsumption.toFixed(2)} kWh`;


    const averageConsumption = consumptionData.reduce((a, b) => a + b, 0) / consumptionData.length;
    document.getElementById("average").innerText = `${averageConsumption.toFixed(2)} kWh`;


    if (currentConsumption > alertThreshold) {
        generateAlert(currentConsumption);
    }
}

function generateAlert(consumption) {
    const alertList = document.getElementById("alert-list");
    const alertItem = document.createElement("li");
    alertItem.innerText = `Alerta: Consumo elevado detectado (${consumption.toFixed(2)} kWh)!`;
    alertList.appendChild(alertItem);


    if (alertList.children.length > 10) {
        alertList.removeChild(alertList.firstChild);
    }
}


document.getElementById("back-button").addEventListener("click", () => {
    alert("Voltando para a página anterior...");
    window.history.back();
});
