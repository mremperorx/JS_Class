let name = "Majed El-Naser";
var age  = 25;
var Prof = "Web Development";

const hobbies = ["Coding", "Gaming", "Watching"];

console.log (`Welcome to my first JavaScript Project.
My name is ${name}
I am ${age} years old 
Im Trening as ${Prof}`);

console.log(`My hobbies are : ${hobbies}`);

  let input = prompt("Who are you ?");
  console.log(input);

   function TestAge() {
    var TestAge = Number(prompt("What is Your Age?"));

    if (TestAge <= 0){
    alert("age is less than or equal to zero.");
    }
   }

   function TestGender() {
    var TestGender = prompt ("What is Your Gender?");

    if(TestGender === "Female"){
    alert("hello mrs " + input);
    }
    if(TestGender === "Male"){
     alert("hello mr " + input);
    }
    if(TestGender != "Female" && TestGender != "Male"){
      alert("Hello " + input);
    }
   }
  TestAge();
  TestGender();
  
const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')){
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click', () => {
  if(closedFace.classList.contains('closed')){
    closedFace.classList.add('active');
    openFace.classList.remove('active');
  }
});