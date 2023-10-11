import format from "date-fns/format/index.js";

// Factory function for a todo item
const todoFactory = (title, desc, dueDate, priority) => {

    // Format the date before returning it as part of the object
    dueDate = format(dueDate, 'MM-dd-yyyy');

    return {title, desc, dueDate, priority};
};

export default todoFactory;