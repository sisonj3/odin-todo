import todoFactory from './todo-item';
import projectFactory from './project';
import todoManager from './todo-manager';
import projectListFactory from './project-list';
import { displayTodos } from './todo-dom';
import generatePage from './main-page';

generatePage();

const list = projectListFactory();

const manager = todoManager();

const all = projectFactory('Project1');

const todo1 = todoFactory('one', 'words', new Date('10-12-2023'), 'Low');
const todo2 = todoFactory('two', 'other words', new Date('10-14-2023'), 'Medium');
const todo3 = todoFactory('three', 'more words', new Date('10-13-2023'), 'High');
const todo4 = todoFactory('four', 'less words', new Date('10-18-2023'), 'Low');

list.addProject(all);
all.addTodo(todo1);
all.addTodo(todo2);
all.addTodo(todo3);
all.addTodo(todo4);
console.log(list.print());

// Start by displaying all
list.updateAll();
displayTodos(list.getProjectAtIndex(0), 0);

export default list;
