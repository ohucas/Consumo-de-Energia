#include <Arduino.h>


const int sensorPin = A0; 
const int ledPin = 2;     

void setup() {
  Serial1.begin(115200);  
  pinMode(ledPin, OUTPUT); 
  Serial1.println("Monitoramento de Energia Iniciado!");
}

void loop() {
 
  int rawValue = analogRead(sensorPin);
  float simulatedVoltage = (rawValue / 1023.0) * 3.3; 
  float simulatedCurrent = simulatedVoltage * 5;     
  
  Serial1.print("Corrente simulada: ");
  Serial1.print(simulatedCurrent, 2);
  Serial1.println(" A");

 
  if (simulatedCurrent > 10.0) {
    digitalWrite(ledPin, HIGH); 
    Serial1.println("ALERTA: Corrente Alta!");
  } else {
    digitalWrite(ledPin, LOW);  
  }

  delay(1000); 
}

