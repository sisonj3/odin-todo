import editIcon from './note-edit.svg';
import plusIcon from './plus.svg';
import format from "date-fns/format/index.js";

// Div to hold all todos
const todoListDom = document.createElement('div');
todoListDom.classList.add('todo-list');

function displayTodos(project, index) {

    // Set current project being displayed
    document.body.dataset.project = project.name;
    document.body.dataset.index = index;

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
        todoDom.classList.add(todo.priority);
        todoCheckbox.classList.add('todo-checkbox');
        todoTitle.classList.add('todo-title');
        todoDetails.classList.add('todo-details');
        todoDate.classList.add('todo-date');
        todoEdit.classList.add('todo-edit');
        todoDelete.classList.add('delete');

        // Set text contents
        todoTitle.textContent = todo.title;
        todoDetails.textContent = 'Details';
        todoDate.textContent = format(todo.dueDate, 'MM-dd-yyyy');

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
        todoEdit.addEventListener('click', () => editTodo(todo, todoTitle, todoDate, todoDom));
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
    dueDate.textContent = `Due Date: ${format(todo.dueDate, 'MM-dd-yyyy')}`;
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

function editTodo(todo, todoTitle, todoDate, todoDom) {
    console.log('Editing')

    // Dom Elements
    const overlay = document.createElement('div');
    const editBox = document.createElement('div');
    const closeDiv = document.createElement('div');
    const closeIcon = document.createElement('img');
    const textDiv = document.createElement('div');
    const editTitle = document.createElement('textarea');
    const editDesc = document.createElement('textarea');
    const dateDiv = document.createElement('div');
    const dueDateText = document.createElement('div');
    const editDate = document.createElement('input');
    const priorityDiv = document.createElement('div');
    const priorityText = document.createElement('div');
    const editPriority = document.createElement('select');
    const confirmDiv = document.createElement('div');
    const confirmBtn = document.createElement('div');

    // Character Limits
    editTitle.maxLength = 30;
    editDesc.maxLength = 90;

    // Input type
    editDate.type = 'date';

    // Set current date of todo item
    editDate.valueAsDate = todo.dueDate;

    // Priority options
    const low = document.createElement('option');
    const med = document.createElement('option'); 
    const high = document.createElement('option');

    // Priority options text
    low.text = 'Low';
    med.text = 'Medium';
    high.text = 'High';

    // Add options to select
    editPriority.add(low);
    editPriority.add(med);
    editPriority.add(high);

    // Set pre-selected option
    editPriority.value = todo.priority;

    // Close icon
    closeIcon.src = plusIcon;
    closeIcon.alt = 'X';

    // Classes
    overlay.classList.add('overlay');
    editBox.classList.add('details');
    closeDiv.classList.add('icon-div');
    closeIcon.classList.add('delete');
    textDiv.classList.add('text-div');
    editTitle.classList.add('edit-title');
    editDesc.classList.add('edit-desc');
    dateDiv.classList.add('edit-div');
    priorityDiv.classList.add('edit-div');
    confirmDiv.classList.add('icon-div');
    confirmBtn.classList.add('confirm-btn');

    // Set content to current information
    editTitle.textContent = todo.title;
    editDesc.textContent = todo.desc;
    dueDateText.textContent = 'Due Date: ';
    priorityText.textContent = 'Priority: ';
    confirmBtn.textContent = 'Confirm Edit';

    // Add to editBox
    closeDiv.appendChild(closeIcon);
    editBox.appendChild(closeDiv);

    textDiv.appendChild(editTitle);
    textDiv.appendChild(editDesc);
    editBox.appendChild(textDiv);

    dateDiv.appendChild(dueDateText);
    dateDiv.appendChild(editDate);
    editBox.appendChild(dateDiv);

    priorityDiv.appendChild(priorityText);
    priorityDiv.appendChild(editPriority);
    editBox.appendChild(priorityDiv);

    confirmDiv.appendChild(confirmBtn)
    editBox.appendChild(confirmDiv);

    // Add to body
    document.body.appendChild(overlay);
    document.body.appendChild(editBox);

    // Remove from body when closed
    closeIcon.addEventListener('click', () => {
        document.body.removeChild(overlay);
        document.body.removeChild(editBox);
    });

    // Set info to new info
    confirmBtn.addEventListener('click', () => {
        console.log('Confirmed');
        // Title
        todoTitle.textContent = editTitle.value;
        todo.title = editTitle.value;

        // Desc
        todo.desc = editDesc.value;

        // Date
        todo.dueDate = editDate.valueAsDate;
        todoDate.textContent = format(todo.dueDate, 'MM-dd-yyyy')

        // Clear todoDom priority classes if any
        todoDom.classList.remove('Low');
        todoDom.classList.remove('Medium');
        todoDom.classList.remove('High');

        // Priority
        todo.priority = editPriority.value;
        todoDom.classList.add(editPriority.value);
    });

}

function deleteTodo(project, index) {
    project.remTodo(project.getTodoAtIndex(index));
}

export {displayTodos};
export default todoListDom;