import { DailyDrink } from './dailydrinks.model';
import { DailyDrinkService } from './dailydrinks.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'dailydrinks-edit',
    templateUrl: 'dailydrinks-edit.component.html'

})
export class DailyDrinkDetalheComponent implements OnInit {

    dailyDrink: DailyDrink;
    private isNew: boolean = true;

    constructor(
        private DailyDrinkService: DailyDrinkService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('on init');

        this.dailyDrink = new DailyDrink('0', '', 0, '');

        this.route.params.forEach((params: Params) => {
            let id: string = params['id'];

            console.log(id);

            if (id) {
                
                this.isNew = false;

                this.DailyDrinkService.find(id)
                    .then((DailyDrink: DailyDrink) => {
                        this.dailyDrink = DailyDrink;
                    })
            }
        });
    }

    teste(): void {
        console.log(this.dailyDrink);
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): any {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): any {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void {
        let promise;
        let newIdPromise;

        if(this.isNew){
            console.log('create DailyDrink');
            promise = this.DailyDrinkService.create(this.dailyDrink);
            
        }
        else{
            console.log('update DailyDrink');
            promise = this.DailyDrinkService.update(this.dailyDrink);
        }

        promise.then(DailyDrink => this.forgetit());
    }

    forgetit(): void {
        this.location.back();
    }

}