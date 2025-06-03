import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms'; // Import FormsModule} from '@angular/common';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css',
})
export class AddTaskFormComponent {
  taskTitle: string = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle.trim(),
        completed: false,
      };
      this.taskService.addTask(newTask);
      this.taskTitle = '';
    }
  }
}
