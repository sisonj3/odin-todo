import {displayTodos} from './todo-dom';
import plusIcon from './plus.svg';

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

    if(projectList.length === undefined){
        return;
    }

    for (let i = 0; i < projectList.length; i++){
        const projectDom = document.createElement('li');
        const currentProject = projectList.getProjectAtIndex(i);
 
        projectDom.textContent = currentProject.name;
        
        if(i > 0){
            const deleteBtn = document.createElement('img');
            deleteBtn.classList.add('delete');
            deleteBtn.src = plusIcon;
            projectDom.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', () => {
                console.log('Deleting project');
                projectList.remProject(currentProject);
                displayProjects(projectList);
            });
        }
        

        // When clicked display todos from that project
        projectDom.addEventListener('click', () => displayTodos(projectList.getProjectAtIndex(i), i));

        projectsListDom.appendChild(projectDom);
    }

}

export {displayProjects};
export default projectsListDom;