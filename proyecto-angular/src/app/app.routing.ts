import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes

import { TiendaComponent } from './components/tienda/tienda.component';
import { StoresComponent } from './components/stores/stores.component';
import { PhonesComponent } from './components/phones/phones.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { userEditComponent } from './components/user-edit/user-edit.component';
import { PhoneDetailComponent } from './components/phone-detail/iphone-detail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component:HomeComponent},
    {path: 'phones', component:PhonesComponent},
    {path: 'contact', component:ContactComponent},
    {path: 'tienda', component:TiendaComponent},
    {path: 'employees', component:EmployeesComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'mis-datos', component:userEditComponent},
    {path: 'phone/:id', component: PhoneDetailComponent  },
    {path: '**', component:HomeComponent},

];

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);