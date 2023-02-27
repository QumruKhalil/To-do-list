function insertToDo() {
    const toDoList = document.querySelector(".card");
    const inputContainer = document.createElement('div')
    inputContainer.className = "todo-container";
    const toDo = document.createElement('div');
    toDo.className = "todo";
    toDo.innerHTML = document.querySelector('.input').value;
    document.querySelector('.input').value = ''
    const div = document.createElement('div')
    div.className = "remove";
    div.addEventListener('click', (event) => {
        const cancelButton = event.target;
        cancelButton.parentElement.remove();
    });
    inputContainer.appendChild(toDo);
    inputContainer.appendChild(div);
    toDoList.appendChild(inputContainer);

    toDoList.classList.remove('sorted');
}

document.querySelector('.add').addEventListener('click', insertToDo);


// remove
document.querySelector('.clear').addEventListener('click', (event) => {
    const cancelButton = event.target;
    cancelButton.parentElement.querySelector('.input').value = '';
});

// sort
document.querySelector('.sort-icon').addEventListener('click', (event) => {
    function getTodoText(element) {
        return element.querySelector('.todo').textContent;
    }

    const card = document.querySelector('.card');
    const sortIcon = document.querySelector('.sort-icon');

    if (card.classList.contains('sorted')) {
        const list = [...document.querySelectorAll('.todo-container')];

        list
            .concat()
            .reverse()
            .map(getTodoText)
            .forEach((todo, index) => {
                list[index].querySelector('.todo').textContent = todo;
            });  
        
        sortIcon.classList.toggle('sort-icon--reverse');
     
        
    } else {
        const list = [...document.querySelectorAll('.todo-container')];

        list
            .concat()
            .sort((a, b) => {
                return getTodoText(a).localeCompare(getTodoText(b));
            })
            .map(getTodoText)
            .forEach((todo, index) => {
                list[index].querySelector('.todo').textContent = todo;
            });
        sortIcon.classList.remove('sort-icon--reverse');
     

        card.classList.add('sorted');

    }
})