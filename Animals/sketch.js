var serial;	// variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem1431';  // fill in your serial port name here
var inData;
var value;
var img;
var choice; 

/*function preload()
 {	
    //  img = loadImage("https://img.buzzfeed.com/buzzfeed-static/static/2014-08/1/3/enhanced/webdr08/original-10732-1406878046-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
      //img = loadImage("img/kingdom.jpg");
  }*/

function setup() 
{
  createCanvas(1000, 500);
  image (img, 0,0 );
 
 // open a serial connection
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on("list", printList);  // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen);        // callback for the port opening
  serial.on("data", serialEvent);     // callback for when new data arrives
  serial.on("error", serialError);    // callback for errors
  serial.on("close", portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}  

 

function draw() 
{
  choice = serial.readString()
  if (choice == "1") 
  {
		 serial.write (choice);
		img = loadImage("https://img.buzzfeed.com/buzzfeed-static/static/2014-08/1/3/enhanced/webdr08/original-10732-1406878046-3.jpg?downsize=715:*&output-format=auto&output-quality=auto");
 	}
 	else 
 		img = loadImage("https://lumiere-a.akamaihd.net/v1/images/g_thelionking_05_2680fc66.jpeg?region=0%2C0%2C1200%2C560");
 }



function serverConnected() {
    println("connected to server.");
}
function portOpen() {
    println("the serial port opened.")
}
function serialEvent() {
    inData = Number(serial.read());
}
function serialError(err) {
    println("Something went wrong with the serial port. " + err);
}
function portClose() {
    println("The serial port closed.");
}


/*
// print list of ports for debugging
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
 	print(i + " " + portList[i]);
   }
}
*/
