import { Component }   from '@angular/core';
import { Tasks } from '../../../../../collections/tasks.ts';
import { Mongo }       from 'meteor/mongo';
import { RouterLink }  from '@angular/router-deprecated';
import { MeteorComponent } from 'angular2-meteor';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'task-details',
   templateUrl: '/client/apps/TodoApp/components/TaskDetails/TaskDetails.html',
   directives: [RouterLink],
})

export class TaskDetails extends MeteorComponent {
  task: Task;

  constructor(params: RouteParams) {
    super();
      var taskId = params.get('taskId');
      this.subscribe('task', taskId, () => {
            this.task = Tasks.findOne(taskId);
          }, true);

      }

/*
  saveParty(party) {
    if (Meteor.userId()) {
      Parties.update(party._id, {
        $set: {
          name: party.name,
          description: party.description,
          location: party.location
        }
      });
    } else {
      alert('Please log in to change this party');
    }
  }

  invite(user: Meteor.User) {
      this.call('invite', this.party._id, user._id, (error) => {
        if (error) {
          alert(`Failed to invite due to ${error}`);
          return;
        }

        alert('User successfully invited.');
      });
    }

    reply(rsvp: string) {
        this.call('reply', this.party._id, rsvp, (error) => {
          if (error) {
            alert(`Failed to reply due to ${error}`);
          }
          else {
            alert('You successfully replied.');
          }
        });
      }*/
    }
