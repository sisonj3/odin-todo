// Factory function for a todo item
const todoFactory = (title, desc, dueDate, priority) => {
    return {title, desc, dueDate, priority};
};

export default todoFactory;