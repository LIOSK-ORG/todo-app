import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common';
import {home} from './views/home/home';
import {TaskDetails} from './apps/TodoApp/components/TaskDetails/TaskDetails';

@Component({
  selector: 'lioskapp',
  templateUrl: 'client/lioskapp.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Home', component: home },
  { path: '/task/:taskId', as: 'TaskDetails', component: TaskDetails }
])
class lioskapp { }

bootstrap(lioskapp, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
