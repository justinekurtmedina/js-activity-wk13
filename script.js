document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");

 
    button.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value; 
        const color = document.getElementById("color").value

        
        document.getElementById("result").textContent = "Hello, " + name + " ikaw ay " + age + " anyos na " + "ang favorite color mo ay " + color + " !!!!";
    });
});