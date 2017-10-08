
  import processing.serial.*;
  //import gifAnimation.*;
  //import processing.sound.*;
  Serial port;
  String Blink;
  PImage img;
  PImage img2;
  //SoundFile file;

  void setup() {
    size(1000, 560);
    img = loadImage("family.jpg");
    img2 = loadImage("kingdom.jpg");
    println("Available serial ports:");
    // if using Processing 2.1 or later, use Serial.printArray()
    printArray(Serial.list());  // improved function 
    port = new Serial(this, Serial.list()[3], 9600);
  }
  
  void draw() {
    if (Blink.equals("0") == true) {
      image(img,0,0);
      //file = new SoundFile(this, "hakuna_matata.mp3");
      //file.play();
    } else {
      image(img2,0,0);
    }
  }
  
  void serialEvent(Serial myPort){
    String myString = myPort.readStringUntil('\n');  
    if (myString != null) {
        myString = trim(myString);  
    Blink = myString;      
    }  
  }
