import { Injectable } from '@angular/core';
import { Moto } from '../model/moto.model';

 @Injectable
 ({
    providedIn: 'root'
 })
  export class MotoService {
     motos : Moto[]; //un tableau de Moto
     moto : Moto;
     constructor() {
        this.motos = [
          { idMoto : 1, nomMoto : "Z1000", prixMoto : 3000.600, dateCreation : new Date("01/14/2011")},
          { idMoto : 2, nomMoto : "KAWAZAKI NINJA H2R", prixMoto : 450, dateCreation : new Date("12/17/2010")},
          { idMoto : 3, nomMoto :"Honda Deauville", prixMoto : 900.123, dateCreation : new Date("02/20/2020")}
         ];
       }
        listeMotos():Moto[] {
          return this.motos;
         }
        ajouterMoto( prod: Moto){
           this.motos.push(prod);
           }
           supprimerMoto( prod: Moto){
              //supprimer le moto prod du tableau motos
               const index = this.motos.indexOf(prod, 0);
                if (index > -1) {
                  this.motos.splice(index, 1);
                }
       }
       consulterMoto(id:number): Moto{
          this.moto = this.motos.find(p => p.idMoto == id);
           return this.moto;
         }
         updateMoto(p:Moto) {
          // console.log(p);
          this.supprimerMoto(p);
          this.ajouterMoto(p);
           this.trierMotos();
           }
           trierMotos(){
              this.motos =
                        this.motos.sort((n1,n2) => {
                           if (n1.idMoto > n2.idMoto) {
                             return 1;
                             } if (n1.idMoto < n2.idMoto) {
                               return -1;
                              }
                              return 0;
                            });
                          }
  }
