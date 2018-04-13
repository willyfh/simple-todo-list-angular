import { Component } from '@angular/core';
import {TodoStorage, Todo} from './services/todo-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	newTodo = '';
	todoStorage: TodoStorage;
	filter = 'all';
	constructor(todoStorage: TodoStorage) {
		this.todoStorage = todoStorage;
	}
  
	addTodo() {
		this.todoStorage.addTodo(this.newTodo);
		this.newTodo='';
	}
	
	remove(todo: Todo) {
		this.todoStorage.remove(todo);
	}
	
	toggle(todo: Todo, event:any){
		this.todoStorage.toggle(todo,event);
	}
	
	getIncompleteTodoCount(){
		return this.todoStorage.getIncompleteTodoCount();
	}
	
	removeCompleted() {
		this.todoStorage.removeCompleted();
	}
	
	toggleSelectAll(event: any) {
		this.todoStorage.toggleSelectAll(event);
	}
}
