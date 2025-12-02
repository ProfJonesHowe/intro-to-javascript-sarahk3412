// Using let
let name = "Crystal";
let age = 25;
let isStudent = true;

document.getElementById("demo1").innerHTML =
  "Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent;

var city = "Albany";     // Function-scoped
let state = "NY";        // Block-scoped
const country = "Canada";   // Cannot be reassigned

document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;
