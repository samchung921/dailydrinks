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
const dialog_service_1 = require("./../dialog.service");
const core_1 = require("@angular/core");
const contato_service_1 = require("./contato.service");
let DailyDrinksListaComponent = class DailyDrinksListaComponent {
    constructor(contatoService, dialogService) {
        this.contatoService = contatoService;
        this.dialogService = dialogService;
        this.daily = -drinks;
        this.Contato = [] = [];
    }
    ngOnInit() {
        this.contatoService.findAll()
            .then((daily = -drinks, Contato = []) => {
            this.daily - drinks;
            daily - drinks;
        }).catch(err => {
            console.log(err);
            this.mostrarMensagem({
                tipo: 'danger',
                texto: 'Ocorreu um erro ao buscar a lista de daily-drinks!'
            });
        });
    }
    onDelete(contato) {
        this.dialogService.confirm("Deseja deletar o contato " + contato.nome)
            .then((canDelete) => {
            if (canDelete) {
                this.contatoService
                    .delete(contato)
                    .then(() => {
                    this.daily - drinks;
                    this.daily - drinks.filter(c => c.id != contato.id);
                    this.mostrarMensagem({
                        tipo: 'success',
                        texto: 'Contato deletado!'
                    });
                })
                    .catch(err => {
                    console.log(err);
                    this.mostrarMensagem({
                        tipo: 'danger',
                        texto: 'Ocorreu um erro ao deletar contato!'
                    });
                });
            }
        });
    }
    mostrarMensagem(mensagem) {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);
        if (mensagem.tipo != 'danger') {
            if (this.timeOutAtual) {
                clearTimeout(this.timeOutAtual);
            }
            this.timeOutAtual = setTimeout(() => {
                this.mensagem = undefined;
            }, 3000);
        }
    }
    montarClasses(tipo) {
        this.classesCss = {
            'alert': true
        };
        this.classesCss['alert-' + tipo] = true;
    }
};
DailyDrinksListaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'daily-drinks-lista',
        templateUrl: 'daily-drinks-lista.component.html'
    }),
    __metadata("design:paramtypes", [contato_service_1.ContatoService,
        dialog_service_1.DialogService])
], DailyDrinksListaComponent);
exports.DailyDrinksListaComponent = DailyDrinksListaComponent;
//# sourceMappingURL=contatos-lista.component.js.map