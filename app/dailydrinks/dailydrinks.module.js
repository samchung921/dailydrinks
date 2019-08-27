"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const dailydrinks_list_component_1 = require("./dailydrinks-list.component");
const dailydrinks_edit_component_1 = require("./dailydrinks-edit.component");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const dailydrinks_routing_module_1 = require("./dailydrinks-routing.module");
const dailydrinks_service_1 = require("./dailydrinks.service");
const dailydrinks_search_component_1 = require("./dailydrinks-search.component");
let DailyDrinksModule = class DailyDrinksModule {
};
DailyDrinksModule = __decorate([
    core_1.NgModule({
        imports: [
            dailydrinks_routing_module_1.DailyDrinkRoutingModule,
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            dailydrinks_search_component_1.DailyDrinkBuscaComponent,
            dailydrinks_edit_component_1.DailyDrinkDetalheComponent,
            dailydrinks_list_component_1.DailyDrinksListaComponent
        ],
        exports: [
            dailydrinks_search_component_1.DailyDrinkBuscaComponent,
            dailydrinks_list_component_1.DailyDrinksListaComponent
        ],
        providers: [
            dailydrinks_service_1.DailyDrinkService
        ]
    })
], DailyDrinksModule);
exports.DailyDrinksModule = DailyDrinksModule;
//# sourceMappingURL=dailydrinks.module.js.map