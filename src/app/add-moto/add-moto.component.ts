import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html'
})
export class AddMotoComponent implements OnInit {
  newMoto = new Moto();
  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
  }
  addMoto(){
    //console.log(this.newMoto);
    this.motoService.ajouterMoto(this.newMoto);
   }

}
