import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!:Task;

  constructor(private taskService: TaskService) { }

  toggle(){
    this.taskService.toggleCompleted(this.task.id);
  }

  delete(){
    this.taskService.deleteTask(this.task.id);
  }

}
