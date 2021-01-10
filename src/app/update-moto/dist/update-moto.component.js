"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateMotoComponent = void 0;
var core_1 = require("@angular/core");
var moto_model_1 = require("../model/moto.model");
var UpdateMotoComponent = /** @class */ (function () {
    function UpdateMotoComponent(activatedRoute, router, motoService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.motoService = motoService;
        this.currentMoto = new moto_model_1.Moto();
    }
    UpdateMotoComponent.prototype.ngOnInit = function () {
        this.currentMoto = this.motoService.consulterMoto(this.activatedRoute.snapshot.params.id);
        console.log(this.currentMoto);
    };
    UpdateMotoComponent.prototype.updateMoto = function () {
        //console.log(this.currentProduit);
        // this.motoService.updateMoto(this.currentMoto);
        this.motoService.updateMoto(this.currentMoto);
        this.router.navigate(['motos']);
    };
    UpdateMotoComponent = __decorate([
        core_1.Component({
            selector: 'app-update-moto',
            templateUrl: './update-moto.component.html',
            styles: []
        })
    ], UpdateMotoComponent);
    return UpdateMotoComponent;
}());
exports.UpdateMotoComponent = UpdateMotoComponent;
