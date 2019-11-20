import { Component, OnInit } from '@angular/core';
import { Voluntarios } from 'src/app/interfaces/voluntarios';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

import { VoluntariosService } from 'src/app/servicios/voluntarios.service';



@Component({
  selector: 'app-unirse',
  templateUrl: './unirse.page.html',
  styleUrls: ['./unirse.page.scss'],
})
export class UnirsePage implements OnInit {
 
  public voluntarios: Voluntarios = {};
  public fechaGuarda: Date;
  private loading: any;
  
  
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private voluntariosService: VoluntariosService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  async saveVoluntario (){
    await this.presentLoading();
      try{
          this.voluntarios.volFecha= new Date().getTime();
          if ((this.voluntarios.volNombre==undefined) || (this.voluntarios.volTel==undefined)){
            this.presentToast("campos obligatorios vacios");
            await this.loading.dismiss();
          }else{
            if(this.voluntarios.volEmail==undefined){
              this.voluntarios.volEmail="sin correo";
            }
            if(this.voluntarios.volDescri==undefined){
              this.voluntarios.volDescri="sin descripción";
            }
          await this.voluntariosService.addVoluntario(this.voluntarios);
          await this.loading.dismiss();
          this.navCtrl.navigateBack('/home');
        }
      }catch (error) {
        console.log(error);
        this.presentToast(error);
        this.loading.dismiss();
      }
    
  }
  async presentToast (message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }

  async presentLoading(){
    this.loading = await this.loadingCtrl.create({message: 'Guardando...'});
    return this.loading.present();
  }

}
