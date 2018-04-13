export class Todo {
	completed: Boolean;
	editing: Boolean;
	title: String;
	
	constructor(title: String) {
		this.completed = false;
		this.editing = false;
		this.title = title;
	}
}

export class TodoStorage {
	todos:Array<Todo>;
	
	constructor() {
		this.todos = JSON.parse(localStorage.getItem('todo-angular') || '[]');
	}
	
	private updateStorage() {
		localStorage.setItem('todo-angular', JSON.stringify(this.todos));
	}
	
	addTodo(title: String) {
		let newTodo = new Todo(title);
		this.todos.push(newTodo);
		this.updateStorage();
	}
	
	remove(todo: Todo) {
		this.todos.splice(this.todos.indexOf(todo), 1);
		this.updateStorage();
	}
	
	getAll() {
		this.todos = JSON.parse(localStorage.getItem('todo-angular') || '[]');
	}
	
	getByCompleted(completed: Boolean) {
		this.getAll();
		this.todos = this.todos.filter((obj) => obj.completed === completed);
	}
	
	removeCompleted(){
		this.getByCompleted(false);
		this.updateStorage();
	}
	
	toggle(todo: Todo, event: any) {
		for (let i=0; i<this.todos.length; i++) {
			if (this.todos[i] === todo){
				this.todos[i].completed = event.checked;
				break;
			}
		}
		this.updateStorage();
	}
	getIncompleteTodo() {
		let tempTodos = JSON.parse(localStorage.getItem('todo-angular') || '[]');
		let count = tempTodos.filter((obj) => obj.completed === false).length;
		return count;
	}
	
}