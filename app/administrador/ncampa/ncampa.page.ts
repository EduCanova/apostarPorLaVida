import { Component, OnInit } from '@angular/core';
import {Campains} from '../../interfaces/campains';
import { Subscription } from 'rxjs';
import { CampainsService } from 'src/app/servicios/campains.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoadingController, ToastController,  NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ncampa',
  templateUrl: './ncampa.page.html',
  styleUrls: ['./ncampa.page.scss'],
})
export class NcampaPage implements OnInit {
  public campain = new Array<Campains>();
  private campainsSubscription: Subscription;
  private loading: any;
  constructor(private campainsService: CampainsService,
    public router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) {
    this.campainsSubscription = this.campainsService.getCampains().subscribe(data=>{
      this.campain = data;
    });
   }

  ngOnInit() {  }

  ngOnDestroy (){
    this.campainsSubscription.unsubscribe();
  }

  async logout(){
    await this.presentLoading();
    try{
      await this.authService.logout();
      this.navCtrl.navigateBack('/home');
  
    }catch(error){
      this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
    }
  }
  async deleteCampain(id: string) {
    try {
      await this.campainsService.deleteCampain(id);
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
