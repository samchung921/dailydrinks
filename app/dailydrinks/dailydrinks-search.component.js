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
const dailydrinks_service_1 = require("./dailydrinks.service");
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const Observable_1 = require("rxjs/Observable");
const Subject_1 = require("rxjs/Subject");
let DailyDrinkBuscaComponent = class DailyDrinkBuscaComponent {
    constructor(DailyDrinkService, router) {
        this.DailyDrinkService = DailyDrinkService;
        this.router = router;
        this.searchChange = new core_1.EventEmitter();
        this.termosDaBusca = new Subject_1.Subject();
    }
    ngOnInit() {
        this.dailydrinks = this.termosDaBusca
            .debounceTime(500) //aguarde 500ms para emitir novos eventos
            .distinctUntilChanged() //ignore se o próximo termo de search for igual ao anterior
            .switchMap(termo => termo ? this.DailyDrinkService.searchDailyDrinkPorNome(termo) : Observable_1.Observable.of([]))
            .catch(err => {
            console.log(err);
            return Observable_1.Observable.of([]);
        });
        this.dailydrinks.subscribe((dailydrinks) => {
            console.log('retornou do servidor:', dailydrinks);
        });
    }
    ngOnChanges(changes) {
        let search = changes['search'];
        this.doSearch(search.currentValue);
    }
    doSearch(termo) {
        this.termosDaBusca.next(termo);
        this.searchChange.emit(termo);
    }
    verDetalhe(DailyDrink) {
        let link = ['DailyDrink/save', DailyDrink.id];
        this.router.navigate(link);
        this.searchChange.emit('');
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DailyDrinkBuscaComponent.prototype, "search", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DailyDrinkBuscaComponent.prototype, "searchChange", void 0);
DailyDrinkBuscaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'dailydrinks-search',
        templateUrl: './dailydrinks-search.component.html',
        styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }   
    `]
    }),
    __metadata("design:paramtypes", [dailydrinks_service_1.DailyDrinkService,
        router_1.Router])
], DailyDrinkBuscaComponent);
exports.DailyDrinkBuscaComponent = DailyDrinkBuscaComponent;
//# sourceMappingURL=dailydrinks-search.component.js.map