import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo:'/DailyDrink',
        pathMatch: 'full'
    }
]

@NgModule({
    imports:[
        //Starta o módulo de rotas para a raiz, ou seja, para o modulo app
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}