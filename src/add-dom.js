import plusIcon from './plus.svg';
import list from './index';
import projectFactory from './project';
import todoFactory from './todo-item';

// Add button
const addBtn = document.createElement('div');
const addImg = document.createElement('img');

// Image src and alt
addImg.src = plusIcon;
addImg.alt = 'add';

// Classes
addBtn.classList.add('plus-btn');

addBtn.appendChild(addImg);

// Event listener
addBtn.addEventListener('click', () => addBox());

// Add new todo/project box
function addBox() {
    console.log('Add todo/project');

    // Dom elements
    const overlay = document.createElement('div');
    const infoBox = document.createElement('div');
    const closeDiv = document.createElement('div');
    const closeIcon = document.createElement('img');
    const btnDiv = document.createElement('div');
    const addProjectBtn = document.createElement('div');
    const addTodoBtn = document.createElement('div');
    const displayDiv = document.createElement('div');

    // Close icon
    closeIcon.src = plusIcon;
    closeIcon.alt = 'X';

    // Classes
    overlay.classList.add('overlay');
    infoBox.classList.add('details');
    closeDiv.classList.add('icon-div');
    closeIcon.classList.add('delete');
    btnDiv.classList.add('btn-div');
    addProjectBtn.classList.add('add-btn');
    addTodoBtn.classList.add('add-btn');

    // Text Contents
    addProjectBtn.textContent = 'Add Project';
    addTodoBtn.textContent = 'Add todo';

    // Add to infoBox
    closeDiv.appendChild(closeIcon);
    infoBox.appendChild(closeDiv);
    btnDiv.appendChild(addProjectBtn);
    btnDiv.appendChild(addTodoBtn);
    infoBox.appendChild(btnDiv);
    infoBox.appendChild(displayDiv);

    // Add to body
    document.body.appendChild(overlay);
    document.body.appendChild(infoBox);

    // Event Listeners
    closeDiv.addEventListener('click', () =>{
        document.body.removeChild(overlay);
        document.body.removeChild(infoBox);
    });

    addProjectBtn.addEventListener('click', () => newProject(displayDiv));
    addTodoBtn.addEventListener('click', () => newTodo(displayDiv));
}

function newProject(div){
    console.log('Adding project');
        // Clear displayDiv
        clearDiv(div);

        // Add input to displayDiv
        const newTitle = document.createElement('textarea');
        const confirmProjectDiv = document.createElement('div');
        const confirmProjectButton = document.createElement('div');

        newTitle.maxLength = 30;
        newTitle.placeholder = 'Project Title';

        confirmProjectButton.textContent = 'Confirm Project';

        // Classes
        confirmProjectDiv.classList.add('btn-div');
        confirmProjectButton.classList.add('add-btn');
        
        // Append to div
        div.appendChild(newTitle);
        confirmProjectDiv.appendChild(confirmProjectButton);
        div.appendChild(confirmProjectDiv);

        // Event Listeners
        confirmProjectButton.addEventListener('click', () => addProject(newTitle.value));
}

function addProject(title){
    if (title.length > 0){
        list.addProject(projectFactory(title));
    }    
}

function newTodo(div) {
    console.log('Adding todo');

    // Clear displayDiv
    clearDiv(div);

    // Add input to displayDiv
    const textDiv = document.createElement('div');
    const newTitle = document.createElement('textarea');
    const newDesc = document.createElement('textarea');
    const dateDiv = document.createElement('div');
    const dueDateText = document.createElement('div');
    const editDate = document.createElement('input');
    const priorityDiv = document.createElement('div');
    const priorityText = document.createElement('div');
    const editPriority = document.createElement('select');
    const confirmTodoDiv = document.createElement('div');
    const confirmTodoButton = document.createElement('div');

    // Max Lengths
    newTitle.maxLength = 30;
    newDesc.maxLength = 90;
    

    // Input type
    editDate.type = 'date';

    // Set current date of todo item
    editDate.valueAsDate = new Date();

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

    // Text Displays
    newTitle.placeholder = 'Todo Title';
    newDesc.placeholder = 'Todo Description';
    dueDateText.textContent = 'Due Date: ';
    priorityText.textContent = 'Priority: ';
    confirmTodoButton.textContent = 'Confirm Todo';

    // Classes
    textDiv.classList.add('text-div');
    newTitle.classList.add('edit-title');
    newDesc.classList.add('edit-desc');
    dateDiv.classList.add('edit-div');
    priorityDiv.classList.add('edit-div');
    confirmTodoDiv.classList.add('btn-div');
    confirmTodoButton.classList.add('add-btn');
    
    // Append to div
    textDiv.appendChild(newTitle);
    textDiv.appendChild(newDesc);
    div.appendChild(textDiv);

    dateDiv.appendChild(dueDateText);
    dateDiv.appendChild(editDate);
    div.appendChild(dateDiv);

    priorityDiv.appendChild(priorityText);
    priorityDiv.appendChild(editPriority);
    div.appendChild(priorityDiv);

    confirmTodoDiv.appendChild(confirmTodoButton);
    div.appendChild(confirmTodoDiv);

    // Event listeners
    confirmTodoButton.addEventListener('click', () => addTodo(newTitle.value, newDesc.value, editDate.valueAsDate, editPriority.value));
}

// Add todo to currently selected project
function addTodo(title, desc, date, priority){
    if (title.length > 0) {
        list.getProjectAtIndex(document.body.dataset.index).addTodo(todoFactory(title, desc, date, priority));
        list.updateAll();
    }
    
}

function clearDiv(div){
    // Remove all children from div
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

export default addBtn;
