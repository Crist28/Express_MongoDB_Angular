//imports-modulos
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
//import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { AdminRoutingModule } from "./admin-routing.module";

import { ListComponent } from "./components/list/list.component";
import { AddComponent } from "./components/add/add.component";
import { EditComponent } from "./components/edit/edit.component";
import { MainComponent } from "./components/main/main.component";
import { AdminGuard } from "../services/admin.guard";
import { UserService } from "../services/user.service";
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
    declarations:[
        MainComponent,
        AddComponent,
        EditComponent,
        ListComponent,
        SearchPipe
        
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpClientModule,
        AdminRoutingModule
    ],
    exports: [
        MainComponent,
        ListComponent,
        AddComponent,
        EditComponent
    ],
    providers:[AdminGuard, UserService]
})

export class AdminModule{}