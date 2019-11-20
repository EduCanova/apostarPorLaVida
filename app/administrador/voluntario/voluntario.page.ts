import { Component, OnInit } from '@angular/core';
import {Voluntarios} from '../../interfaces/voluntarios';
import { Subscription } from 'rxjs';
import { VoluntariosService } from 'src/app/servicios/voluntarios.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage implements OnInit {
  public voluntario = new Array<Voluntarios>();
  private voluntariosSubscription: Subscription;
  private loading: any;

  constructor(private voluntariosService: VoluntariosService,
    public router: Router,
    private authService: AuthService, 
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {    
      this.voluntariosSubscription = this.voluntariosService.getVoluntario().subscribe(data=>{
      this.voluntario = data;
    });  
  }

  ngOnInit() {
  }
 
  ngOnDestroy (){
    this.voluntariosSubscription.unsubscribe();
  }

  async deleteVoluntario(id: string) {
    try {
      await this.voluntariosService.deleteVoluntario(id);
    } catch (error) {
      this.presentToast('Error al borrar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    toast.present();
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Saliendo...' });
    return this.loading.present();
    
  }
}
