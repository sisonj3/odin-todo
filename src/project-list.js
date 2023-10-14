import projectFactory from './project';
import { displayProjects } from './projects-dom';

// Manages a list of projects

// Factory function for project list
const projectListFactory = () => {
    // Array to hold a list of projects
    // Starts with default all project
    const projects = [projectFactory('All')];

    // Function to add project
    function addProject (project) {
        updateAll();
        projects.push(project);

        // Update display
        displayProjects(this);

    }

    // Function to remove project
    function remProject (project) {
        updateAll();
        for (let i = 0; i < projects.length; i++) {
            if(projects[i] == project){
                projects.splice(i, 1);
            }
        }

        // Update display
        displayProjects(this);
    }

    function getProjectAtIndex(index) {
        if(index >= projects.length || index < 0){
            throw new Error('Index is out of bounds');
            return;
        }

        return projects[index];
    }

    function updateAll(){
        // Clear All
        while(projects[0].length > 0){
            projects[0].remTodo(projects[0].getTodoAtIndex(projects[0].length - 1));
        }

        for(let i = 1; i < projects.length; i++){
            for(let j = 0; j < projects[i].length; j++){
                projects[0].addTodo(projects[i].getTodoAtIndex(j));
            }
        }
    }

    function print() {
        let output = '';

        projects.forEach((project) => output += project.print());

        return output;
    }

    return {addProject, remProject, getProjectAtIndex, updateAll, print,
        get length(){return projects.length;}};
};

export default projectListFactory;