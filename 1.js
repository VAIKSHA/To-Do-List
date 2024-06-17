document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to add a new todo item
    const addTodoItem = () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.classList.add('todo-item');
            
            const span = document.createElement('span');
            span.textContent = todoText;
            li.appendChild(span);
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                li.remove();
            });
            li.appendChild(deleteButton);

            todoList.appendChild(li);
            todoInput.value = '';
            todoInput.focus();
        }
    };

    // Add a new todo item when the add button is clicked
    addButton.addEventListener('click', addTodoItem);

    // Add a new todo item when the Enter key is pressed
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodoItem();
        }
    });
});
