/*
  IR Proximity Sensor interface code
  Turns on an LED on when obstacle is detected, else off.
  blog.circuits4you.com 2016
 */
int led = 9;           // the PWM pin the LED is attached to
//int led2 = 11;
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

const long blinkInterval = 1000; 
//unsigned long previousBlinkMillis = 0;
int ledState = LOW;


const long fadeInterval = 30; 
//unsigned long previousFadeMillis = 0;

const int ProxSensor = A0;

void setup() {                
  pinMode(ProxSensor,INPUT);
  pinMode(led, OUTPUT);
  Serial.begin(9600);
  // Serial.println("Program Starting");
}

void loop() {
  int value = analogRead(ProxSensor);
  Serial.println(value);
  if(value > 500)      //Check the sensor input
  {
    blinkTheLed(); // set the LED on
    Serial.println("0");
  }
  else 
  {
    fadeTheLed();    // set the LED off
    Serial.println("1");
  }
  //Serial.println(analogRead(ProxSensor));
}

void blinkTheLed() {
  // Serial.println("BLINK");
  // if the LED is off turn it on and vice-versa:
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    digitalWrite(led, ledState);
    delay(100);
}

// this function fades the LED
void fadeTheLed() {
  // Serial.println("fading!");
  // set the brightness of pin 9:
  analogWrite(led, brightness);
  //Serial.println(brightness);
  
  // change the brightness for next time through the loop:
  brightness = brightness + fadeAmount;

  // reverse the direction of the fading at the ends of the fade:
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
   delay(100);
}

