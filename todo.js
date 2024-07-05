const form = document.getElementById("todo-form")
const input = document.getElementById("todo-input")
const todoLane = document.getElementById("todo-lane")


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = input.value;
    if (!val) return;
    const element = document.createElement('p');
    element.innerText = val;
    element.classList.add('task');
    element.setAttribute('draggable', true)

    element.addEventListener("dragstart", () => {
        element.classList.add("is-dragging")
    })
    element.addEventListener("dragend", () => {
        element.classList.remove("is-dragging")
    })

    todoLane.appendChild(element)
    input.value = "";

})