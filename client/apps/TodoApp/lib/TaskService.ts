import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../../../collections/tasks.ts';
import {Injectable} from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';
import { Mongo } from 'meteor/mongo';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class TaskService extends MeteorComponent{
  tasks: Mongo.Cursor<Task>;
  atasks:Observable<Task[]>;
  private _taskObserver: Observer<Task[]>;

  constructor(){
    super();
    // Create Observable Stream to output our data
    this.atasks = new Observable(observer =>  this._taskObserver = observer).share();

    this.subscribe('tasks', () => {
        this.autorun(() => {
            // fetch data

            // Error :  Throws this error on console
            // Uncaught TypeError: Cannot read property 'next' of undefined
            // this._taskObserver is accessed before it is defined.
            // Not sure why?
            if(this._taskObserver){
              this._taskObserver.next(Tasks.find().fetch());
            }
            console.log('Fetch tasks in service..');
        }, true);
    });

  }
  getTasks(){
    return this.atasks;
  }
/**
 * add Task
 */
addTask(task){
  if (Meteor.userId()) {
      console.log('Calling meteor to add task from TaskService...');
      Meteor.call('tasks.insert', task);
      console.log('success');
      //this._taskObserver.next(Tasks.find().fetch());
  } else {
      alert('Please log in to add a task');
  }
}
tasksCount(){
  console.log('get Task Count in Service');
  return Tasks.find().count();
}
tasksActive(){
  return Tasks.find({status:"ACTIVE"}).count();
}
tasksCompleted(){
  console.log('get Task Completed in Service');
  return Tasks.find({status:"COMPLETED"}).count();
}

removeTask(taskId){
  console.log('Remove Task in Service');
  Tasks.remove(taskId);
  //update observable
//this._taskObserver.next(Tasks.find().fetch());
}
completeTask(task){
  console.log('Task Completed in Service');
  console.log(task);
    if (Meteor.userId()) {
      if(task.status!='COMPLETED')
      Meteor.call('tasks.setStatus', task._id,'COMPLETED');
      else
      Meteor.call('tasks.setStatus', task._id,'ACTIVE');
      //update observable
    // this._taskObserver.next(Tasks.find().fetch());
    } else {
      alert('Please log in to add a task');
    }

}

}
