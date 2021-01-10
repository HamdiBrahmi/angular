import { Component, OnInit } from '@angular/core';

 import { MotoService } from '../services/moto.service';
 import { Moto } from '../model/moto.model';
 import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-moto',
  templateUrl: './update-moto.component.html',
  styles: [
  ]
})
export class UpdateMotoComponent implements OnInit {
  currentMoto = new Moto();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
     private motoService: MotoService)
   { }
  ngOnInit(): void {
    this.currentMoto = this.motoService.consulterMoto(this.activatedRoute.snapshot.params.id); console.log(this.currentMoto);
   }
   updateMoto() {
      //console.log(this.currentProduit);
      // this.motoService.updateMoto(this.currentMoto);
      this.motoService.updateMoto(this.currentMoto);
      this.router.navigate(['motos']);
      }

}
