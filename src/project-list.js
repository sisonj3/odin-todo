import todoFactory from './todo-item';
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
        
        projects.push(project);

        updateAll();
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

        updateAll();
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

        // Save data
        save();
    }

    // Save to local list
    function save() {
        // Make sure local storage list is clear
        console.log('CLEARING');
        localStorage.clear();
        console.log(localStorage.getItem('list') == null);

        let saveData = '';

        // For each project
        for (let i = 0; i < projects.length; i++){
            saveData += JSON.stringify(projects[i]) + '\n';
            // For each todo
            for (let j = 0; j < projects[i].length; j++){
                saveData += JSON.stringify(projects[i].getTodoAtIndex(j)) + '\n';
            }

            // Separate each project
            saveData += '/';
            
        }

        localStorage.setItem('list', saveData);

        console.log('Displaying Save-------------------------');
        console.log(saveData);
    }

    // Load local list
    function load() {
        console.log('Start Load--------------------------------------');
        // End function if there is no local list
        if (localStorage.getItem('list') == null){
            return;
        }

        const loadInfo = localStorage.getItem('list').split('/');

        // Clear local storage to prevent it from getting full
        localStorage.clear();
        console.log(loadInfo);

        // Go through each project except all
        for (let i = 1; i < loadInfo.length - 1; i++){

            console.log(`Load loop ${i}`);

            let projectInfo = loadInfo[i].split('\n');
            let parsedProject = JSON.parse(projectInfo[0]);
            let project = projectFactory(parsedProject.name);

            console.log(parsedProject);
            projects.push(project);

            // Iterate through todos
            for (let j = 1; j < projectInfo.length - 1; j++) {
                console.log(`Load loop ${i}.${j}`);

                try {
                    console.log(projectInfo[j]);
                    let parsedTodo = JSON.parse(projectInfo[j]);

                    console.log(parsedTodo);

                    // Add todo to project
                    let todo = todoFactory(parsedTodo.title, parsedTodo.desc, new Date(parsedTodo.dueDate), parsedTodo.priority);
                    project.addTodo(todo);

                    console.log(todo.print());
                    console.log('No error');
                } catch (error) {
                    console.log('Ignore error');
                }

            }

            console.log(project.print());
        }

        // Display projects when loading is complete
        displayProjects(this);

        console.log('End Load--------------------------------------');
    }

    function print() {
        let output = '';

        projects.forEach((project) => output += project.print());

        return output;
    }

    return {addProject, remProject, getProjectAtIndex, updateAll, print, save, load,
        get length(){return projects.length;}};
};

export default projectListFactory;