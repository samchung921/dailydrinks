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
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let DailyDrinkService = class DailyDrinkService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.dailydrinksUrl = 'app/dailydrinks';
    }
    findAll() {
        return this.http.get(this.dailydrinksUrl)
            .toPromise()
            .then(response => response.json().data);
    }
    find(id) {
        return this.findAll()
            .then((dailydrinks) => dailydrinks.find((DailyDrink) => DailyDrink.id === id));
    }
    create(dailyDrink) {
        dailyDrink.id = Guid.newGuid();
        console.log(dailyDrink);
        return this.http
            .post(this.dailydrinksUrl, JSON.stringify(dailyDrink), { headers: this.headers })
            .toPromise()
            .then((response) => {
            console.log(response.json().data);
            return response.json().data;
        })
            .catch(this.handleError);
    }
    update(DailyDrink) {
        const url = `${this.dailydrinksUrl}/${DailyDrink.id}`;
        return this.http
            .put(url, JSON.stringify(DailyDrink), { headers: this.headers })
            .toPromise()
            .then(() => DailyDrink)
            .catch(this.handleError);
    }
    delete(DailyDrink) {
        const url = `${this.dailydrinksUrl}/${DailyDrink.id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => DailyDrink)
            .catch(this.handleError);
    }
    handleError(err) {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }
    searchDailyDrinkPorNome(termo) {
        return this.http
            .get(`${this.dailydrinksUrl}/?nome=${termo}`)
            .map((res) => res.json().data);
    }
};
DailyDrinkService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DailyDrinkService);
exports.DailyDrinkService = DailyDrinkService;
class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
//# sourceMappingURL=dailydrinks.service.js.map