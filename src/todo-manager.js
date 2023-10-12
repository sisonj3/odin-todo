import projectList from './project-list';
// Manages projects and todos
const todoManager = (() => {
    // Holds all projects
    const projects = projectList();

    // Index of the current project
    let currentIndex = 0;

    // Add project to projectList
    function addProject(project) {
        projects.addProject(project);
    }

    // Add todo to current project
    function addTodo(todoItem) {
        projects.getProjectAtIndex(currentIndex).addTodo(todoItem);
    }

    // Remove project
    function removeProject(project) {
        projects.remProject(project);
    }

    // Remove todo from current project
    function removeTodo(todoItem) {
        projects.getProjectAtIndex(currentIndex).remTodo(todoItem);
    }

    function print(){
        projects.print();
    }

    return {addProject, addTodo, removeProject, removeTodo, print,
        set current(index){currentIndex = index}};
})();