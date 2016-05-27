import {Tasks} from '../collections/tasks';
import {Meteor} from 'meteor/meteor';


  Meteor.publish('tasks', function tasksPublication() {
  return Tasks.find({owner: this.userId}); // find only user tasks
});



Meteor.publish('task', function(taskId: string) {
  return Tasks.find(
    {
      $and: [{  // find with given task id
          '_id': {
            $eq: taskId
          }
        }, { // find only if the owner access the task
          'owner': this.userId
        }, ],
      }
);

});
