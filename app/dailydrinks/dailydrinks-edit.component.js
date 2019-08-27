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
const dailydrinks_model_1 = require("./dailydrinks.model");
const dailydrinks_service_1 = require("./dailydrinks.service");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const common_1 = require("@angular/common");
let DailyDrinkDetalheComponent = class DailyDrinkDetalheComponent {
    constructor(DailyDrinkService, route, location) {
        this.DailyDrinkService = DailyDrinkService;
        this.route = route;
        this.location = location;
        this.isNew = true;
    }
    ngOnInit() {
        console.log('on init');
        this.dailyDrink = new dailydrinks_model_1.DailyDrink('0', '', 0, '');
        this.route.params.forEach((params) => {
            let id = params['id'];
            console.log(id);
            if (id) {
                this.isNew = false;
                this.DailyDrinkService.find(id)
                    .then((DailyDrink) => {
                    this.dailyDrink = DailyDrink;
                });
            }
        });
    }
    teste() {
        console.log(this.dailyDrink);
    }
    getFormGroupClass(isValid, isPristine) {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }
    getFormControlClass(isValid, isPristine) {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }
    onSubmit() {
        let promise;
        let newIdPromise;
        if (this.isNew) {
            console.log('create DailyDrink');
            promise = this.DailyDrinkService.create(this.dailyDrink);
        }
        else {
            console.log('update DailyDrink');
            promise = this.DailyDrinkService.update(this.dailyDrink);
        }
        promise.then(DailyDrink => this.forgetit());
    }
    forgetit() {
        this.location.back();
    }
};
DailyDrinkDetalheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dailydrinks-edit',
        templateUrl: 'dailydrinks-edit.component.html'
    }),
    __metadata("design:paramtypes", [dailydrinks_service_1.DailyDrinkService,
        router_1.ActivatedRoute,
        common_1.Location])
], DailyDrinkDetalheComponent);
exports.DailyDrinkDetalheComponent = DailyDrinkDetalheComponent;
//# sourceMappingURL=dailydrinks-edit.component.js.map