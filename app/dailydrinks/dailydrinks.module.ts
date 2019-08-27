import { NgModule } from '@angular/core';
import { DailyDrinksListaComponent } from "./dailydrinks-list.component";
import { DailyDrinkDetalheComponent } from "./dailydrinks-edit.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from  '@angular/forms';
import { DailyDrinkRoutingModule } from "./dailydrinks-routing.module";
import { DailyDrinkService } from "./dailydrinks.service";
import { DailyDrinkBuscaComponent } from './dailydrinks-search.component';

@NgModule({
    imports:[
        DailyDrinkRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        DailyDrinkBuscaComponent,
        DailyDrinkDetalheComponent,
        DailyDrinksListaComponent
    ],
    exports: [
        DailyDrinkBuscaComponent,
        DailyDrinksListaComponent
    ],
    providers: [
        DailyDrinkService
    ]
})
export class DailyDrinksModule{

}