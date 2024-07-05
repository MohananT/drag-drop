const draggables = document.querySelectorAll(".task")
const droppables = document.querySelectorAll('.swim-lane')
console.log(draggables);

draggables.forEach((task) => {
    task.addEventListener("dragstart", () => {
        task.classList.add("is-dragging")
    })
    task.addEventListener("dragend", () => {
        task.classList.remove("is-dragging")
    })
});

droppables.forEach((zone) => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        const crTask = document.querySelector('.is-dragging');
        zone.appendChild(crTask);
    })
})