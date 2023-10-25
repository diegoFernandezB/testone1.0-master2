import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin = {
    usuario:"",
    pass:""
  }
  
  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  iniciarSesion(){

    console.log("usuario" + this.formLogin.usuario)
    console.log("pass" + this.formLogin.pass)
    
    let envioDatos: NavigationExtras = {
      queryParams :{usuario:this.formLogin.usuario}
    }

    this.router.navigate(['/home'], envioDatos)

    this.storage.set("usuario",this.formLogin.usuario);




    
  }

}
