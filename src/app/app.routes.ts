import { Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'users'},
    {path:'users',component:UsersComponent},
    {path:'add-user',component: AddUserComponent},
    {path:'user/:id',component:UserComponent}

];
