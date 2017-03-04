import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimulationComponent } from './containers';
@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        SimulationComponent
    ],
    bootstrap: [SimulationComponent]
})
export class AppModule { }