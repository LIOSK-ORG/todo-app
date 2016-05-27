import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../../../../../collections/tasks.ts';
import {TaskService} from '../../lib/TaskService';

@Component({
  selector: 'add-task',
  templateUrl: '/client/apps/TodoApp/components/AddTask/AddTask.html',
  providers:[TaskService]
})

export class AddTask {

  private addTaskForm: ControlGroup;

  constructor(private taskService:TaskService) {
    // Instantiate FormBuilder
    let fb = new FormBuilder();
    // Create FormGroup
    this.addTaskForm = fb.group({
    name: ['', Validators.required],
     description: [''],  //TODO: Not yet implemented
     'public': [false],  //TODO: Not yet implemented
     status:'ACTIVE' // Default value.
    });
  }
/**
 * Add Task on button click
 * @param  {[type]} task [description]
 * @return {[type]}      [description]
 */
  addTask(task) {
    if (this.addTaskForm.valid) {
        // Call service method to add task.
        this.taskService.addTask(task);
        // Reset view
        (<Control>this.addTaskForm.controls['name']).updateValue('');
        // TODO: Not yet used in view
        (<Control>this.addTaskForm.controls['description']).updateValue('');
        (<Control>this.addTaskForm.controls['public']).updateValue(false);
      }
  }

}
