import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: '/user', component: UserComponent },
];
