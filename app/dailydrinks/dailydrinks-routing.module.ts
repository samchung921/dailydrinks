import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { DailyDrinksListaComponent } from "./dailydrinks-list.component";
import { DailyDrinkDetalheComponent } from "./dailydrinks-edit.component";

//Vetor constant com o caminho para seus respectivos component
const DailyDrinkRoutes: Routes = [
    {
        path:'DailyDrink',
        component: DailyDrinksListaComponent
    },
    {
        path: 'DailyDrink/save',
        component: DailyDrinkDetalheComponent
    },
    {
        path: 'DailyDrink/save/:id',
        component: DailyDrinkDetalheComponent
    }

];

@NgModule({
    imports:[
        //Starta as rotas para o módulo de dailydrinks, com as segintes rotas passada por parâmetros
        RouterModule.forChild(DailyDrinkRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DailyDrinkRoutingModule{}