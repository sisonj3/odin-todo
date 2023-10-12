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
    const sidebarDiv = document.createElement('div');
    const sidebarHeader = document.createElement('h1');

    // Add classes to dom elements
    sidebarDiv.classList.add('sidebar');

    // Set text of h2
    sidebarHeader.textContent = 'Projects';

    // Add elements to div
    sidebarDiv.appendChild(sidebarHeader);
    // Append projects list to sidebarDiv

    return sidebarDiv;
})();

//  Page Content Module
//  Includes the sidebar
const mainContent = (() => {
    // Div used to make grid
    const contentGrid = document.createElement('div');
    contentGrid.classList.add('main-grid');

    // Add to grid
    contentGrid.appendChild(sidebar);

    return contentGrid;
})();


// Add to body
function generatePage() {
    document.body.appendChild(header);
    document.body.appendChild(mainContent);
}

export default generatePage;
