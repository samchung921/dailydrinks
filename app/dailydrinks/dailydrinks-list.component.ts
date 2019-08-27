import { DialogService } from '../dialog.service';
import { Component, OnInit } from "@angular/core";
import { DailyDrink } from "./dailydrinks.model";
import { DailyDrinkService } from "./dailydrinks.service";

@Component({
    moduleId: module.id,
    selector: 'dailydrinks-list',
    templateUrl: 'dailydrinks-list.component.html'

})
export class DailyDrinksListaComponent implements OnInit {

    dailydrinks: DailyDrink[] = [];
    message: {};
    classesCss: {};
    private timeOutAtual: any;

    constructor(
        private DailyDrinkService: DailyDrinkService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.DailyDrinkService.findAll()
            .then((dailydrinks: DailyDrink[]) => {
                this.dailydrinks = dailydrinks;
            }).catch(err => {
                console.log(err);
                this.mostrarMensagem({
                    type: 'danger',
                    texto: 'Error on getting the list!'
                });
            });
    }

    onDelete(dailyDrink: DailyDrink): void {
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
                            })

                        })
                        .catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                type: 'danger',
                                texto: 'Errored on deleting DailyDrink!'
                            })
                        })
                }
            })
    }

    private mostrarMensagem(message: { type: string, texto: string }): void {
        this.message = message;
        this.montarClasses(message.type);

        if (message.type != 'danger') {

            if(this.timeOutAtual) {
                clearTimeout(this.timeOutAtual);
            }

            this.timeOutAtual = setTimeout(() => {
                this.message = undefined;
            }, 3000);
        }
    }

    private montarClasses(type: string): void {
        this.classesCss = {
            'alert': true
        };

        this.classesCss['alert-' + type] = true;
    }

}