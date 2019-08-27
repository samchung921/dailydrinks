"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const dailydrinks_list_component_1 = require("./dailydrinks-list.component");
const dailydrinks_edit_component_1 = require("./dailydrinks-edit.component");
//Vetor constant com o caminho para seus respectivos component
const DailyDrinkRoutes = [
    {
        path: 'DailyDrink',
        component: dailydrinks_list_component_1.DailyDrinksListaComponent
    },
    {
        path: 'DailyDrink/save',
        component: dailydrinks_edit_component_1.DailyDrinkDetalheComponent
    },
    {
        path: 'DailyDrink/save/:id',
        component: dailydrinks_edit_component_1.DailyDrinkDetalheComponent
    }
];
let DailyDrinkRoutingModule = class DailyDrinkRoutingModule {
};
DailyDrinkRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            //Starta as rotas para o módulo de dailydrinks, com as segintes rotas passada por parâmetros
            router_1.RouterModule.forChild(DailyDrinkRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], DailyDrinkRoutingModule);
exports.DailyDrinkRoutingModule = DailyDrinkRoutingModule;
//# sourceMappingURL=dailydrinks-routing.module.js.map