import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  mensaje: string="";

  constructor(private activeRute: ActivatedRoute, private storage: Storage) {
    this.activeRute.queryParams.subscribe(params =>{
      if(params['usuario'])
      {
        this.mensaje = params['usuario'];
      }    
    });
  }

  ngOnInit() {
  }

  async verStorage(){
    let nombre = await this.storage.get("usuario");
    console.log("El nombre guardado es "+nombre)
  }

}
