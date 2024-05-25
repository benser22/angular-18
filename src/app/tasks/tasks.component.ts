import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../types/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTaskName: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    const newTask = new Task(this.tasks.length + 1, this.newTaskName, false);
    this.taskService.addTask(newTask);
    this.newTaskName = '';
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.checkTask(task);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  editTask(id: number, data: Task): void {
    this.taskService.editTask(id, data);
    this.tasks = this.taskService.getTasks();
  }
}
