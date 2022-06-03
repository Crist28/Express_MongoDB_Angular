import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//nuevo modulo
import { ModuloEmailModule } from './module/moduleemail.component';
import { AdminModule } from './admin/admin.module';

//Components

import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    StoresComponent,
    PhonesComponent,
    ContactComponent,
    HomeComponent,
    EmployeesComponent,
    RegisterComponent,
    LoginComponent,
    userEditComponent,
    PhoneDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    ModuloEmailModule,
    AdminModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
