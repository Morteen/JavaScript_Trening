"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
//import { CoursesComponent } from './courses.component';
var kurs_component_1 = require("./kurs.component");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{name}}</h1><courses></courses><kurs></kurs>",
        directives: [kurs_component_1.KursComponent]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AppComponent1 = (function () {
    function AppComponent1() {
        this.name = 'Test';
    }
    return AppComponent1;
}());
AppComponent1 = __decorate([
    core_1.Component({
        selector: 'my-app2',
        template: "<h1>Hei {{name}}</h1>",
    })
], AppComponent1);
exports.AppComponent1 = AppComponent1;
//# sourceMappingURL=app.component.js.map