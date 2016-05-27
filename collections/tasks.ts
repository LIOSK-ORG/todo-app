import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import { check } from 'meteor/check';

export let Tasks = new Mongo.Collection<Task>('tasks');

Tasks.allow({
  insert: function() {
    let user = Meteor.user();
    return !!user;
  },
  update: function() {
    let user = Meteor.user();

    return !!user;
  },
  remove: function() {
    let user = Meteor.user();

    return !!user;
  }
});

Meteor.methods({
  // Insert Task
  'tasks.insert' (task) {
    check(task.name, String);
    check(task.status,String);
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.insert({
      name:task.name,
      status:task.status,
      owner: Meteor.userId(),
      created:new Date()
    });
  },
  'tasks.remove' (taskId) {
    console.log('removing tasks from collection');
    check(taskId, String);
	const task = Tasks.findOne(taskId);
    //if (task.private && task.owner !== Meteor.userId()) {
		//changed when got error in test...
	if (task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    Tasks.remove(taskId);
  },
  'tasks.setStatus' (taskId, status) {
    check(taskId, String);
    check(status, String);
	const task = Tasks.findOne(taskId);
    //if (task.private && task.owner !== Meteor.userId()) {
	if (task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, {
      $set: {
        status: status
      }
    });
  },
    'tasks.setPrivate' (taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, {
      $set: {
        private: setToPrivate
      }
    });
  }

});
