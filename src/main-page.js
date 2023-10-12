import './style.css';

// Module used to create the standard layout of the page

//<div class="header">
//    <h1>To-Do List</h1>
//</div>

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
    
    return {div, projectsList};
})();

//  Page Content Module
//  Includes the sidebar
const mainGrid = (() => {
    // Div used to make grid
    const contentGrid = document.createElement('div');
    contentGrid.classList.add('main-grid');

    // Add to grid
    contentGrid.appendChild(sidebar.div);

    return contentGrid;
})();


// Add to body
function generatePage() {
    document.body.appendChild(header);
    document.body.appendChild(mainGrid);
}

export default generatePage;
