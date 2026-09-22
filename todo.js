let userInput = document.getElementById('userInput');
let addTodo = document.getElementById('addTodo');
let display = document.getElementById('display');
let data = JSON.parse(localStorage.getItem('Todo_Data')) || [];

// ADD TODO
addTodo.addEventListener('click', function (e) {
    e.preventDefault();
    let value = userInput.value.trim();
    if (value === '') {
        return;
    }

    data.push(value);
    localStorage.setItem('Todo_Data', JSON.stringify(data));
    userInput.value = '';
    getData();
});

// DISPLAY TODO
function getData() {
    display.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        display.innerHTML += `
            <div class="todo-item">
                <span>${data[i]}</span>

                <div class="todo-buttons">
                    <button class="editTodo" onclick="editTodo(${i})">Edit</button>
                    <button class="deleteTodo" onclick="deleteTodo(${i})">Delete</button>
                </div>
            </div>
        `;
    }
}

// EDIT TODO
function editTodo(index) {
    let todoItem = display.children[index];
    let oldValue = data[index];

    userInput.innerHTML = `
        <input
            type="text"
            value="${oldValue}"
        >
    `;

    userInput.focus();

    let editButton = todoItem.querySelector('.editTodo');
    editButton.innerText = 'Save';

    editButton.onclick = function () {
        let newValue = userInput.value.trim();
        if (newValue === '') {
            return;
        }
        data[index] = newValue;
        localStorage.setItem('Todo_Data',JSON.stringify(data));
        getData();
        userInput.value = ''
    };
}

// DELETE TODO
function deleteTodo(index) {
    data.splice(index, 1);
    localStorage.setItem('Todo_Data',JSON.stringify(data));
    getData();
}

getData();