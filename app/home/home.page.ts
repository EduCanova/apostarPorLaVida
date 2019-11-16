import { Component } from '@angular/core';
import { NumericValueAccessor, NavController, LoadingController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contador: number=0;
  private loading: any;
  constructor(private nvrclr: NavController,
    private loadingCtrl: LoadingController) {}

 async cargarInicio(){
    this.contador=this.contador+1;
    if(this.contador==7){
      await this.presentLoading();
      this.nvrclr.navigateForward('/ingresar');
      console.log(this.contador);
      this.contador=0;
    }
  }

  async presentLoading(){
    this.loading = await this.loadingCtrl.create({message: 'Abriendo...', duration: 2000});
    return this.loading.present();
  }

}
