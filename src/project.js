import { displayTodos } from "./todo-dom";

// Factory function for a project
const projectFactory = (name) => {
    // A project holds an array of todo-items
    const project = new Array();

    // Function to add todo item to project
    function addTodo (todoItem) {
        project.push(todoItem);
        if(todoItem.project == ''){
            todoItem.project = name;   
        }

        if(document.body.dataset.project == name){
            displayTodos(this);
        }
    }

    // Function to remove todo item from project
    function remTodo (todoItem) {
        for (let i = 0; i < project.length; i++) {
            if(project[i] == todoItem){
                project.splice(i, 1);
            }
        }

        if(document.body.dataset.project == name){
            displayTodos(this);
        }
    }

    // Function to get a todo item from index
    function getTodoAtIndex(index) {
        if(index >= project.length || index < 0){
            throw new Error('Index is out of bounds');
            return;
        }

        return project[index];
    }

    function print() {
        let output = name + '\n';

        project.forEach((todo) => {
            output += todo.print() + '\n';
        });

        output += '\n';

        return output;

    }

    return {name, addTodo, remTodo, getTodoAtIndex, print,
        get length(){return project.length}};
};

export default projectFactory;