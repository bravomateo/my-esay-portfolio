const addButton = document.querySelector('.add-todo-button');
const todoInput = document.querySelector('.add-todo-input');
const todoList = document.querySelector('.todo-list');
const completedCountTodo = document.querySelector('.completed-count')
const totalCountTodo = document.querySelector('.total-count')


let totalTodos = 0;
let completedTodos = 0;


function updateCounters() {
    totalCountTodo.textContent = totalTodos;
    completedCountTodo.textContent = completedTodos;
}

function addTodo() {

    const todoText = todoInput.value;

    if (todoText === '') return;

    totalTodos++;
    updateCounters();

    // Crear el elemento li
    const li = document.createElement('li');
    
    // Crear el contenido del li con el texto del TODO
    const todoContent = document.createElement('span');
    todoContent.textContent = todoText;
    li.appendChild(todoContent);

    // Crear el contenedor para los botones
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    // Crear el botón de completar
    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    
    const completeIcon = document.createElement('img');
    completeIcon.src = 'images/CompleteIcon.svg';
    completeIcon.alt = 'Complete';
    completeButton.appendChild(completeIcon);
    
    completeButton.addEventListener('click', () => {
        li.classList.toggle('completed');

        if(li.classList.contains('completed')){
            completedTodos++;
        }

        else {
            completedTodos--;
        }
        updateCounters();

    });
    
    
    // Crear el botón de eliminar con una imagen
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/DeleteIcon.svg';
    deleteIcon.alt = 'Delete';
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener('click', () => {
        li.remove(); 
        totalTodos--;
        if (li.classList.contains('completed')) {
            completedTodos--;
        }
        updateCounters();
    });


    // Agregar los botones al contenedor de botones
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    // Agregar el contenedor de botones al elemento li
    li.appendChild(buttonContainer);

    // Agregar el li a la lista
    todoList.appendChild(li);

    // Limpiar el input
    todoInput.value = '';
}

addButton.addEventListener('click', addTodo);
