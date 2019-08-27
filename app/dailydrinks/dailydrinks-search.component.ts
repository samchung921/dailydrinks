import { DailyDrinkService } from './dailydrinks.service';
import { Component, EventEmitter, OnChanges, OnInit, Input, SimpleChange ,SimpleChanges, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DailyDrink } from './dailydrinks.model';

@Component({
    moduleId: module.id,
    selector: 'dailydrinks-search',
    templateUrl: './dailydrinks-search.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }   
    `]

})
export class DailyDrinkBuscaComponent implements OnInit, OnChanges {
    
    @Input() search: string;
    @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
    dailydrinks: Observable<DailyDrink[]>;
    private termosDaBusca: Subject<any> = new Subject<any>();
    
    constructor(
        private DailyDrinkService: DailyDrinkService,
        private router: Router
    ) { }

    ngOnInit(): void { 
        this.dailydrinks = this.termosDaBusca
        .debounceTime(500) //aguarde 500ms para emitir novos eventos
        .distinctUntilChanged() //ignore se o próximo termo de search for igual ao anterior
        .switchMap(termo =>  termo ? this.DailyDrinkService.searchDailyDrinkPorNome(termo) : Observable.of<DailyDrink[]>([]))
        .catch(err => {
            console.log(err);
            return Observable.of<DailyDrink[]>([]);
        });

        this.dailydrinks.subscribe((dailydrinks: DailyDrink[]) => {
            console.log('retornou do servidor:', dailydrinks)
        });
    }


    ngOnChanges(changes: SimpleChanges): void {
        let search: SimpleChange = changes['search'];
        this.doSearch(search.currentValue);
    }

    doSearch(termo: string): void {
        this.termosDaBusca.next(termo);
        this.searchChange.emit(termo);
    }

    verDetalhe(DailyDrink: DailyDrink){
        let link = ['DailyDrink/save', DailyDrink.id];
        this.router.navigate(link);
        this.searchChange.emit('');
    }
}
