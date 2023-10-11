import format from "date-fns/format/index.js";

// Factory function for a todo item
const todoFactory = (title, desc, dueDate, priority) => {

    // Format the date before returning it as part of the object
    dueDate = format(dueDate, 'MM-dd-yyyy');

    function print () {
        return title + ', ' + desc + ', ' + dueDate + ', ' + priority;
    }

    return {title, desc, dueDate, priority, print};
};

export default todoFactory;