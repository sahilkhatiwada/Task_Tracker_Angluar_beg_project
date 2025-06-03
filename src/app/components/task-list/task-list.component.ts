import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [AddTaskFormComponent,TaskItemComponent,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(public taskService: TaskService) {}

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }

}
