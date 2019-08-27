"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const dialog_service_1 = require("../dialog.service");
const core_1 = require("@angular/core");
const dailydrinks_service_1 = require("./dailydrinks.service");
let DailyDrinksListaComponent = class DailyDrinksListaComponent {
    constructor(DailyDrinkService, dialogService) {
        this.DailyDrinkService = DailyDrinkService;
        this.dialogService = dialogService;
        this.dailydrinks = [];
    }
    ngOnInit() {
        this.DailyDrinkService.findAll()
            .then((dailydrinks) => {
            this.dailydrinks = dailydrinks;
        }).catch(err => {
            console.log(err);
            this.mostrarMensagem({
                type: 'danger',
                texto: 'Error on getting the list!'
            });
        });
    }
    onDelete(dailyDrink) {
        this.dialogService.confirm("Do you want to delete " + dailyDrink.name)
            .then((canDelete) => {
            if (canDelete) {
                this.DailyDrinkService
                    .delete(dailyDrink)
                    .then(() => {
                    this.dailydrinks = this.dailydrinks.filter(c => c.id != dailyDrink.id);
                    this.mostrarMensagem({
                        type: 'success',
                        texto: 'DailyDrink deleted!'
                    });
                })
                    .catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        type: 'danger',
                        texto: 'Errored on deleting DailyDrink!'
                    });
                });
            }
        });
    }
    mostrarMensagem(message) {
        this.message = message;
        this.montarClasses(message.type);
        if (message.type != 'danger') {
            if (this.timeOutAtual) {
                clearTimeout(this.timeOutAtual);
            }
            this.timeOutAtual = setTimeout(() => {
                this.message = undefined;
            }, 3000);
        }
    }
    montarClasses(type) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + type] = true;
    }
};
DailyDrinksListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dailydrinks-list',
        templateUrl: 'dailydrinks-list.component.html'
    }),
    __metadata("design:paramtypes", [dailydrinks_service_1.DailyDrinkService,
        dialog_service_1.DialogService])
], DailyDrinksListaComponent);
exports.DailyDrinksListaComponent = DailyDrinksListaComponent;
//# sourceMappingURL=dailydrinks-list.component.js.map