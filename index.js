let age = 30;
let isFemale = true;
let driverStatus = "bob";
let firstName = "Bram" || "Sarah";
let totalAmount = 195;


 // Test data
/* let age = 16;
let isFemale = true;
let driverStatus = 808; */
// let firstName = "Monika"; 


// Je mag naar binnen als je tenminste 18jaar bent
if (age > 18) {
 console.log("deze persoon mag naar binnen");
} 
  else if  (age <18) {

   console.log("deze persoon mag niet naar binnen");
 }

 else if (age ==18 ) {
   console.log("deze persoon mag naar binnen");

 }
// Je gaat naar Ladiesnight als je een vrouw bent
 if (isFemale) {
  console.log("kaartje voor Ladiesnight");
 } else {
   console.log("je bent geen vrouw, dus je mag niet naar ladiesnight");
 }
// Ben je BOB ?
 if (driverStatus === "bob") {
  console.log("Mag auto rijden");
 } else {
   console.log("je bent geen BOB, je mag niet rijden");
 }
 // Jongeren tussen 18 en 25 krijgen extra korting
 if (age >= 18 && age <= 25) {
   console.log("Je krijgt 50% korting");
 } else {
     console.log("Je moet volle prijs betalen");
   }
 
   // Ludieke actie! Mensen die Sarah en Bram heten krijgen een gratis bier!
   if (firstName === "Bram" || "Sarah") {
     console.log("Gratis bier");
   } else {
     console.log("Je bier kost je 4.99 euro");
   }

   // Euros besteden aan drankjes
   if (totalAmount > 25 && totalAmount < 50) {
     console.log("Je krijgt gratis (vega)bitterballen")
   }else if (totalAmount > 50 && totalAmount <100) {
      console.log("Gratis nachos")
   } else if (totalAmount >= 100) {
     console.log("Gratis flesje champagne");

   }