const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if(input.value == "") return;

    const todoEL = document.createElement("li");
    todoEL.innerHTML = input.value;    
    todoEL.addEventListener("click", () => todoEL.classList.toggle("completed"));
    todoEL.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        todoEL.remove();
    });      
    todosUL.appendChild(todoEL);
    input.value = "";
});