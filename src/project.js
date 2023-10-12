// Factory function for a project
const projectFactory = (name) => {
    // A project holds an array of todo-items
    const project = new Array();

    // Function to add todo item to project
    function addTodo (todoItem) {
        project.push(todoItem);
    }

    // Function to remove todo item from project
    function remTodo (todoItem) {
        for (let i = 0; i < project.length; i++) {
            if(project[i] == todoItem){
                project.splice(i, 1);
            }
        }
    }

    function print() {
        let output = name + '\n';

        project.forEach((todo) => {
            output += todo.print() + '\n';
        });

        output += '\n';

        return output;

    }

    return {name, addTodo, remTodo, print};
};

export default projectFactory;