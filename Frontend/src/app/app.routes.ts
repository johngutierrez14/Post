import { Routes } from '@angular/router';

//Components
import { PostTableComponent } from './features/post/components/post-table/post-table.component';
import { AddEditPostComponent } from './features/post/components/add-edit-post/add-edit-post.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { RegisterComponent } from './features/auth/components/register/register.component';


export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'add', component: AddEditPostComponent},
    {path:'edit/:id', component: AddEditPostComponent},
    {path:'**', redirectTo: '', pathMatch:'full'} 
];
