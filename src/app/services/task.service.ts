import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:Task[] = [];

  constructor() {
    const saved = localStorage.getItem('tasks');
    this.tasks = saved ? JSON.parse(saved) : [];
   }

   getTasks() {
    return this.tasks;
   }
   addTask(task: Task): void {
    this.tasks.push(task);
    this.save();
   }
    deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.save();
   }

   toggleCompleted(id: number): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.save();
    }
   }

   private save(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }
}
