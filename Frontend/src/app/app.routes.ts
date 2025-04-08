import { Routes } from '@angular/router';

//Components
import { PostTableComponent } from './features/post/components/post-table/post-table.component';
import { AddEditPostComponent } from './features/post/components/add-edit-post/add-edit-post.component';


export const routes: Routes = [
    {path:'', component: PostTableComponent},
    {path:'add', component: AddEditPostComponent},
    {path:'edit/:id', component: AddEditPostComponent},
    {path:'**', redirectTo: '', pathMatch:'full'} 
];
