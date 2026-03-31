

const inputBtn = document.querySelector(".input-box button");
let input = document.getElementById("task-input");
let taskList = document.querySelector(".task-Container");

inputBtn.addEventListener("click", (event) => {
    if(input.value === ''){
        alert("write some task")
    } else {

    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
    <div class="task-box-1">
      <input type="radio">
      <p>${input.value}</p>
    </div>
    <i class="fa-solid fa-xmark delete"></i>
  `;

    taskList.appendChild(task);

    const delBtn = task.querySelector(".delete");
    delBtn.addEventListener("click", () => {
        task.remove();
    });

    const taskBox = task.querySelector(".task-box-1");
    const p = task.querySelector("p");
    taskBox.addEventListener("click", ()=>{
    p.style.textDecoration ="line-through"
    })

    input.value = "";

}
});



