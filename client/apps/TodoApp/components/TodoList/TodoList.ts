import { Component,OnInit }   from '@angular/core';
import { RouterLink }  from '@angular/router-deprecated';
import {TaskService} from '../../lib/TaskService';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
   templateUrl: '/client/apps/TodoApp/components/TodoList/TodoList.html',
   directives: [RouterLink],
   providers:[TaskService]
})

export class TodoList implements OnInit{

private tasks : Observable<Array<Task>>;

  constructor(private taskService:TaskService) {
  }

  ngOnInit(){ // OnInit interface. This should run first?
    console.log('in ngOnInit');
    this.tasks = this.taskService.atasks; // subscribe to entire collection
  }
    tasksCount(){
    return this.taskService.tasksCount();
  }
  tasksActive(){
    return this.taskService.tasksActive();
  }
  tasksCompleted(){
    return this.taskService.tasksCompleted();
  }
  removeTask(task){
    this.taskService.removeTask(task._id);
  }
  completeTask(task){
    this.taskService.completeTask(task);
  }
}
