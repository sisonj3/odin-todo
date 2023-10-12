import projectFactory from './project';
import { displayProjects } from './projects-dom';

// Manages a list of projects

// Factory function for project list
const projectListFactory = () => {
    // Array to hold a list of projects
    // Starts with default all project
    const projects = [projectFactory('All')];

    // Index of the current project
    let currentIndex = 0;

    // Function to add project
    function addProject (project) {
        projects.push(project);

        // Update display
        displayProjects(this);

    }

    // Function to remove project
    function remProject (project) {
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

    function print() {
        let output = '';

        projects.forEach((project) => output += project.print());

        return output;
    }

    return {addProject, remProject, getProjectAtIndex, print,
        get length(){return projects.length;}};
};

export default projectListFactory;