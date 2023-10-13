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
        todoTitle.textContent = project.getTodoAtIndex(i).title;
        todoDetails.textContent = 'Details';
        todoDate.textContent = project.getTodoAtIndex(i).dueDate;

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
        todoCheckbox.addEventListener('click', () => console.log('Checked'));
        todoDetails.addEventListener('click', () => console.log('Details clicked'));
        todoEdit.addEventListener('click', () => console.log('Editing'));
        todoDelete.addEventListener('click', () => deleteTodo(project, i));
    }
}

function deleteTodo(project, index) {
    project.remTodo(project.getTodoAtIndex(index));
    displayTodos(project);
}

export {displayTodos};
export default todoListDom;