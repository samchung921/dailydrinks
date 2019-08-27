import './util/rxjs-extensions';
import { DialogService } from './dialog.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './dailydrinks/in-memory-data.service';

import { AppComponent } from './app.component';
import { DailyDrinksModule } from "./dailydrinks/dailydrinks.module";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        DailyDrinksModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}
