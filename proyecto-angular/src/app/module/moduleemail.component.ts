//importaciones-modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//importaciones-componentes
import { SaveEmailComponent } from './components/save-email/save-email.component';
import { ShowEmailComponent } from './components/show-email/show-email.component';
import { MainEmailComponent } from './components/main-email/main.email.component';

//decoradores-component-conf modulos

@NgModule({
    imports:[CommonModule, FormsModule],
    declarations:[
        SaveEmailComponent,
        ShowEmailComponent,
        MainEmailComponent
    ],
    exports:[MainEmailComponent] 
})
export class ModuloEmailModule{}