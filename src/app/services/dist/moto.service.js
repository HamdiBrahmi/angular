"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MotoService = void 0;
var core_1 = require("@angular/core");
var MotoService = /** @class */ (function () {
    function MotoService() {
        this.motos = [
            { idMoto: 1, nomMoto: "Z1000", prixMoto: 3000.600, dateCreation: new Date("01/14/2011") },
            { idMoto: 2, nomMoto: "KAWAZAKI NINJA H2R", prixMoto: 450, dateCreation: new Date("12/17/2010") },
            { idMoto: 3, nomMoto: "Honda Deauville", prixMoto: 900.123, dateCreation: new Date("02/20/2020") }
        ];
    }
    MotoService.prototype.listeMotos = function () {
        return this.motos;
    };
    MotoService.prototype.ajouterMoto = function (prod) {
        this.motos.push(prod);
    };
    MotoService.prototype.supprimerMoto = function (prod) {
        //supprimer le moto prod du tableau motos
        var index = this.motos.indexOf(prod, 0);
        if (index > -1) {
            this.motos.splice(index, 1);
        }
    };
    MotoService.prototype.consulterMoto = function (id) {
        this.moto = this.motos.find(function (p) { return p.idMoto == id; });
        return this.moto;
    };
    MotoService.prototype.updateMoto = function (p) {
        // console.log(p);
        this.supprimerMoto(p);
        this.ajouterMoto(p);
        this.trierMotos();
    };
    MotoService.prototype.trierMotos = function () {
        this.motos =
            this.motos.sort(function (n1, n2) {
                if (n1.idMoto > n2.idMoto) {
                    return 1;
                }
                if (n1.idMoto < n2.idMoto) {
                    return -1;
                }
                return 0;
            });
    };
    MotoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MotoService);
    return MotoService;
}());
exports.MotoService = MotoService;
