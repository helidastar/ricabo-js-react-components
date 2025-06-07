// Variables
const name = "Charity Ricabo";
let age = 19;
const birthday = "June 18, 2005";
const address = "City of Naga";
const personality = "INFJ-T"; // Advocate

// Function
function greet() {
  return `Hello! My name is ${name}, age: ${age}, birthday: ${birthday}, address: ${address}, and my personality type is ${personality}.\n\n
INFJ-T (Advocate) personalities are known for their deep sense of idealism and integrity. I'm empathetic, insightful, and passionate about helping others. As an introvert, I value meaningful connections and often seek purpose in everything I do. INFJ-Ts are creative, organized, and driven by their values, making them supportive friends and thoughtful problem-solvers.`;
}

// DOM Manipulation
document.getElementById("title").innerText = "Welcome to My Website";

// Event Handling
function handleClick() {
  document.getElementById("info").innerText = greet();
}
