// Using let
let name = "Sarah";
let age = 22;
let isStudent = true;

document.getElementById("demo1").innerHTML =
  "Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent;

var city = "Harlem";     // Function-scoped
let state = "NY";        // Block-scoped
const country = "Canada";   // Cannot be reassigned

document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;

