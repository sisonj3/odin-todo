import './style.css';
import projectsDom from './projects-dom';
import todoDom from './todo-dom';
import addBtn from './add-dom';

// Module used to create the standard layout of the page

//Dom Elements
//  Header Module
const header = (() => {
    const headerDiv = document.createElement('div');
    const headerH1 = document.createElement('h1');

    // Add header class to div
    headerDiv.classList.add('header');

    //Set Text content of header
    headerH1.textContent = 'To-do List';

    headerDiv.appendChild(headerH1);

    return headerDiv;
})();

//  Sidebar Module
const sidebar = (() => {
    // Dom elements
    const div = document.createElement('div');
    const header = document.createElement('h1');

    // Add classes to dom elements
    div.classList.add('sidebar');

    // Set text of h2
    header.textContent = 'Projects';

    // Add elements to div
    div.appendChild(header);
    div.appendChild(projectsDom);
    
    return div;
})();

//  Page Content Module
//  Includes the sidebar
const mainGrid = (() => {
    // Div used to make grid
    const contentGrid = document.createElement('div');
    contentGrid.classList.add('main-grid');

    // Add to grid
    contentGrid.appendChild(sidebar);
    contentGrid.appendChild(todoDom);

    return contentGrid;
})();


// Add to body
function generatePage() {
    // Default project index
    document.body.dataset.project = 0;

    document.body.appendChild(header);
    document.body.appendChild(mainGrid);
    document.body.appendChild(addBtn);
}

export default generatePage;
