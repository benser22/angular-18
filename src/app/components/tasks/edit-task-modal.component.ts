import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../types/task.model';

@Component({
  selector: 'app-edit-task-modal',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./edit-task-modal.component.css'],
  template: `
    <div class="modal-backdrop" (click)="close()"></div>
    <div class="modal" style="background-color:darkslategrey;">
      <h2 style="text-align: center; padding: 0; margin:0">Edit Task</h2>
      <hr style="margin-bottom: 20px;" />
      <form (ngSubmit)="save()">
        <div>
          <label for="task-name">Task Name: </label>
          <input
            id="task-name"
            [(ngModel)]="task.name"
            name="taskName"
            class="input-edit"
            required
          />
        </div>
        <div>
          <label for="task-completed">Completed:</label>
          <input
            id="task-completed"
            type="checkbox"
            [(ngModel)]="task.completed"
            name="taskCompleted"
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" (click)="close()">Cancel</button>
      </form>
    </div>
  `,
  styles: [
    `
      .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;
      }
      .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 8px;
        z-index: 1000;
        max-width: 500px;
        width: 100%;
      }
    `,
  ],
})
export class EditTaskModalComponent {
  @Input() task!: Task;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveTask = new EventEmitter<Task>();

  close() {
    this.closeModal.emit();
  }

  save() {
    this.saveTask.emit(this.task);
    this.close();
  }
}
