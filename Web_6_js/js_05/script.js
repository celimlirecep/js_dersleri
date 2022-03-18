const newTaskButton=document.querySelector("#newTaskButton");
const newTaskTextBox=document.querySelector("#newTaskTextBox");
const taskListBox=document.querySelector("#taskListBox");
const newTaske=document.querySelector(".newTask");



newTaskButton.addEventListener("click",newTask);
taskListBox.addEventListener("click",deleteTask);

function deleteTask(e) {
    e.preventDefault();
  if (e.target.classList.contains("clearButton")) {
 
    e.target.parentElement.remove();
  }
}
function newTask(e) {
    e.preventDefault();
    if (newTaskTextBox.value=="") alert("Lütfen görev açıklamasını yapınız...");
    else
    {
        let div=document.createElement("div");
        div.classList.add("newTask");
        taskListBox.appendChild(div);
        let li=document.createElement("li");
        li.classList.add("liTask");
        li.innerText=newTaskTextBox.value;
        div.appendChild(li);
        newTaskTextBox.value="";
  
        let silButton=document.createElement("button");
        silButton.innerHTML='<i   class="fa-solid fa-trash sillogo ozel"></i>';
        silButton.classList.add("clearButton")
        div.appendChild(silButton);

    }
        
    

}