const button = document.querySelector("button")!;
const input1 = document.getElementById("num1")! as HTMLInputElement; 
const input2= document.getElementById("num2")! as HTMLInputElement;
// HTMLInputElement = typecasting -> letting it know which typescript element it is going to be
function add(num1, num2) {
    return num1 + num2;
    
}

button.addEventListener("click", function() {
    console.log(add(input1.value, input2.value));
});