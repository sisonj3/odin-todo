// Factory function for a todo item
const todoFactory = (title, desc, dueDate, priority) => {

    let project = '';

    function print () {
        return title + ', ' + desc + ', ' + dueDate + ', ' + priority;
    }

    return {title, desc, dueDate, priority, project, print};
};

export default todoFactory;