import { Component, OnInit } from '@angular/core';
import {AuthService }from '../../servicios/auth.service'
import {Router} from "@angular/router";
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {

  email: string;
  password: string;
  private loading: any;
  constructor(private authService: AuthService, public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
   
    ) { }

  ngOnInit() {
  }

  async onSubmitLogin(){
    await this.presentLoading();
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/administra']);
    }catch(error){
     
    /*  let message: string;
      switch(error.code){
        case 'auth/user-disabled':
          message = 'La cuenta de usuario ha sido desactivada por un administrador.';
        break;
        case 'auth/user-not-found':
          message = 'El usuario no existe o fue borrado';
        break;
        case 'auth/wrong-password':
          message = 'Usuario o contraseña no válidos';
        break;
      }*/
      this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
      
     
    }
  
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Autenticando...' });
    return this.loading.present();

    
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    toast.present();
  }
}
