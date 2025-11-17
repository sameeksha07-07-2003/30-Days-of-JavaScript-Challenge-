const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo-btn")
const todoList = document.getElementById("todo-list")

const addTodo = ()=>{

    
    const inputText = todoInput.value.trim();
    
    if(inputText === "")return;


    const li  = document.createElement("li");
    const span = document.createElement("span")
    span.innerText = inputText;

    const Deletebtn = document.createElement("button")
    Deletebtn.innerText = "Delete"

    Deletebtn.addEventListener("click",function(){
        li.remove();
    })


    li.appendChild(span)
    li.appendChild(Deletebtn)
    todoList.appendChild(li)


    todoInput.value = ""
}

addTodoBtn.addEventListener("click",addTodo);