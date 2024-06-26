import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Envio } from "../../model/envio.entity";
import { EnvioService } from "../../services/envio.service";
import { AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-envios-lista',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule],
  templateUrl: './envios-lista.component.html',
  styleUrl: './envios-lista.component.css'
})
export class EnviosListaComponent {

 envios: Array<Envio>= [];

  constructor(private envioapi: EnvioService){

    }

   ngOnInit(): void {
        this.envioapi.getAll().subscribe((response: any) => {
          this.envios = response;
          console.log(this.envios);

        });

   }

}
