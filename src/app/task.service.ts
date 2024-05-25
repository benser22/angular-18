import { Injectable } from '@angular/core';
import { Task } from './types/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    new Task(1, 'Learn Angular', false),
    new Task(2, 'Build an app', false),
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: number): Task {
    return this.tasks.find((task) => task.id === id)!;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
