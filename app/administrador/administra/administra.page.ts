import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController,  NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-administra',
  templateUrl: './administra.page.html',
  styleUrls: ['./administra.page.scss'],
})
export class AdministraPage implements OnInit {
  private loading: any;
  constructor(    
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
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