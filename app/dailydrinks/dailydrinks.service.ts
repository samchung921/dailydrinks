import { ServiceInterface } from '../interfaces/service.interface';
import { Injectable } from '@angular/core';
import { DailyDrink } from "./dailydrinks.model";
import { DailyDrinkS } from "./dailydrinks-mock";
import { Http, Headers, Response } from '@angular/http';


import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DailyDrinkService implements ServiceInterface<DailyDrink> {

    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    private dailydrinksUrl: string = 'app/dailydrinks';

    constructor(
        private http: Http
    ) { }

    findAll(): Promise<DailyDrink[]> {
        return this.http.get(this.dailydrinksUrl)
            .toPromise()
            .then(response => response.json().data as DailyDrink[]);
    }

    find(id: string): Promise<DailyDrink> {
        return this.findAll()
            .then((dailydrinks: DailyDrink[]) => dailydrinks.find((DailyDrink) => DailyDrink.id === id));
    }


    create(dailyDrink: DailyDrink): Promise<DailyDrink> {
        
        dailyDrink.id = Guid.newGuid();

        console.log(dailyDrink);
            return this.http
            .post(this.dailydrinksUrl, JSON.stringify(dailyDrink), { headers: this.headers })
            .toPromise()
            .then((response: Response) => {
                console.log(response.json().data);
                return response.json().data as DailyDrink;
            })
            .catch(this.handleError);
         

    }

    update(DailyDrink: DailyDrink): Promise<DailyDrink> {
        const url = `${this.dailydrinksUrl}/${DailyDrink.id}`
        return this.http
            .put(url, JSON.stringify(DailyDrink), { headers: this.headers })
            .toPromise()
            .then(() => DailyDrink as DailyDrink)
            .catch(this.handleError);
    }

    delete(DailyDrink:DailyDrink): Promise<DailyDrink> {
        const url = `${this.dailydrinksUrl}/${DailyDrink.id}`
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => DailyDrink as DailyDrink)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

    searchDailyDrinkPorNome(termo: string): Observable<DailyDrink[]> {
        return this.http
        .get(`${this.dailydrinksUrl}/?nome=${termo}`)
        .map((res: Response) => res.json().data as DailyDrink[]);
    }

}

class Guid {
    static newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }