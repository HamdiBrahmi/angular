import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html'
})
export class MotosComponent implements OnInit {
  motos : Moto[]; //un tableau de motos
   constructor(private motoService: MotoService ) { this.motos = motoService.listeMotos(); }

  ngOnInit(): void {
  }
  supprimerMoto(p: Moto) {
   // console.log(p);
   let conf = confirm("Etes-vous sûr ?");
    if (conf)
     this.motoService.supprimerMoto(p);
     }
}
