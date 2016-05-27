import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { RouterLink }  from '@angular/router-deprecated';
import {TodoList} from '../../apps/TodoApp/components/TodoList/TodoList';
import {AddTask} from '../../apps/TodoApp/components/AddTask/AddTask';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
@Component({
  selector: 'home',
  templateUrl: '/client/views/home/home.html',
   directives: [TodoList, AddTask, RouterLink, LoginButtons]
})
export class home { }
