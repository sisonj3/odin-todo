import {displayTodos} from './todo-dom';

// Sets up the list of project in the sidebar

// List to hold all projects
const projectsListDom = document.createElement('ul');

// Display all projects in the project list
function displayProjects (projectList) {
    
    // Clear project list dom
    // Remove all children from body
    while (projectsListDom.firstChild) {
        projectsListDom.removeChild(projectsListDom.lastChild);
    }

    for (let i = 0; i < projectList.length; i++){
        const projectDom = document.createElement('li');

        projectDom.textContent = projectList.getProjectAtIndex(i).name;
        projectDom.dataset.index = i;

        // When clicked display todos from that project
        projectDom.addEventListener('click', (e) => displayTodos(projectList.getProjectAtIndex(e.target.dataset.index)));

        projectsListDom.appendChild(projectDom);
    }

}

export {displayProjects};
export default projectsListDom;