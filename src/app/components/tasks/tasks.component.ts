import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EditTaskModalComponent } from './edit-task-modal.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule, EditTaskModalComponent],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  newTaskName: string = '';
  taskToEdit?: Task;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    const newTask = new Task(this.tasks.length + 1, this.newTaskName, false);
    this.taskService.addTask(newTask);
    this.newTaskName = '';
    this.tasks = this.taskService.getTasks();
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
    this.taskService.checkTask(task);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  openEditModal(task: Task): void {
    this.taskToEdit = { ...task };
  }

  closeEditModal(): void {
    this.taskToEdit = undefined;
  }

  saveTask(task: Task): void {
    this.taskService.editTask(task.id, task);
    this.tasks = this.taskService.getTasks();
    this.closeEditModal();
  }
}
