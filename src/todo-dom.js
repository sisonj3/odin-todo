import editIcon from './note-edit.svg';
import plusIcon from './plus.svg';
import format from "date-fns/format/index.js";

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

    // Dom elements
    const overlay = document.createElement('div');
    const infoBox = document.createElement('div');
    const closeDiv = document.createElement('div');
    const closeIcon = document.createElement('img');
    const title = document.createElement('div');
    const projectName = document.createElement('div');
    const priority = document.createElement('div');
    const dueDate = document.createElement('div');
    const details = document.createElement('div');

    // Text content
    title.textContent = todo.title;
    projectName.textContent = `Project: ${todo.project}`;
    priority.textContent = `Priority: ${todo.priority}`;
    dueDate.textContent = `Due Date: ${todo.dueDate}`;
    details.textContent = `Details: ${todo.desc}`;

    // Close icon
    closeIcon.src = plusIcon;
    closeIcon.alt = 'X';

    // Classes
    overlay.classList.add('overlay');
    infoBox.classList.add('details');
    closeDiv.classList.add('close-icon');
    closeIcon.classList.add('delete');
    title.classList.add('title');

    // Add to infoBox
    closeDiv.appendChild(closeIcon);
    infoBox.appendChild(closeDiv);
    infoBox.appendChild(title);
    infoBox.appendChild(projectName);
    infoBox.appendChild(priority);
    infoBox.appendChild(dueDate);
    infoBox.appendChild(details);

    // Add to body
    document.body.appendChild(overlay);
    document.body.appendChild(infoBox);

    // Remove from body when closed
    closeIcon.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(infoBox);
    });
}

function deleteTodo(project, index) {
    project.remTodo(project.getTodoAtIndex(index));
    displayTodos(project);
}

export {displayTodos};
export default todoListDom;