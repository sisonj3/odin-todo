import editIcon from './note-edit.svg';
import plusIcon from './plus.svg';

// Div to hold all todos
const todoListDom = document.createElement('div');
todoListDom.classList.add('todo-list');

function displayTodos(project) {

    // Clear project list dom
    // Remove all children from body
    while (todoListDom.firstChild) {
        todoListDom.removeChild(todoListDom.lastChild);
    }

    for(let i = 0; i < project.length; i++){
        // Current todo item
        const todo = project.getTodoAtIndex(i);

        // Dom elements
        const todoDom = document.createElement('div');
        const todoCheckbox = document.createElement('div');
        const todoTitle = document.createElement('div');
        const todoDetails = document.createElement('div');
        const todoDate = document.createElement('div');
        const todoEdit = document.createElement('img');
        const todoDelete = document.createElement('img');

        // Classes
        todoDom.classList.add('todo-container');
        todoCheckbox.classList.add('todo-checkbox');
        todoTitle.classList.add('todo-title');
        todoDetails.classList.add('todo-details');
        todoDate.classList.add('todo-date');
        todoEdit.classList.add('todo-edit');
        todoDelete.classList.add('delete');

        // Set text contents
        todoTitle.textContent = todo.title;
        todoDetails.textContent = 'Details';
        todoDate.textContent = todo.dueDate;

        // Set images
        todoEdit.src = editIcon;
        todoEdit.alt = 'edit';
        todoDelete.src = plusIcon;
        todoDelete.alt = 'delete';

        // Add elements to todoDom
        todoDom.appendChild(todoCheckbox);
        todoDom.appendChild(todoTitle);
        todoDom.appendChild(todoDetails);
        todoDom.appendChild(todoDate);
        todoDom.appendChild(todoEdit);
        todoDom.appendChild(todoDelete);

        // Add todoDom to todoList
        todoListDom.appendChild(todoDom);

        // Event listeners
        todoCheckbox.addEventListener('click', () => checked(todoDom));
        todoDetails.addEventListener('click', () => showDetails(todo));
        todoEdit.addEventListener('click', () => console.log('Editing'));
        todoDelete.addEventListener('click', () => deleteTodo(project, i));
    }
}

function checked(container){
    let children = Array.from(container.childNodes);

    children.forEach(node => node.classList.toggle('checked'));
}

function showDetails(todo){
    console.log('Showing Details')
}

function deleteTodo(project, index) {
    project.remTodo(project.getTodoAtIndex(index));
    displayTodos(project);
}

export {displayTodos};
export default todoListDom;