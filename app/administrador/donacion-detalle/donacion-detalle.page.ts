import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AyudarService } from 'src/app/servicios/ayudar.service';
//import { AuthService } from 'src/app/servicios/auth.service';
import { Ayudar } from 'src/app/interfaces/ayudar';


@Component({
  selector: 'app-donacion-detalle',
  templateUrl: './donacion-detalle.page.html',
  styleUrls: ['./donacion-detalle.page.scss'],
})
export class DonacionDetallePage implements OnInit {
  
  public ayudo: Ayudar = {};
  public fechaTest: Date;
  private loading: any;
  private ayudaId: string = null;
  private ayudaSubscription: Subscription;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activatedRoute: ActivatedRoute,
    //private authService: AuthService,
    private ayudarService: AyudarService,
    private navCtrl: NavController,
  ) { 
    this.ayudaId = this.activatedRoute.snapshot.params['id'];
    if (this.ayudaId) {
           this.loadAyuda();
    }
  }
  ngOnDestroy() {
    if (this.ayudaSubscription) this.ayudaSubscription.unsubscribe();
  }
  ngOnInit() {
  }

  async saveAyuda (){
    await this.presentLoading();
  //  this.campains.campUsr = this.authService.getAuth().currentUser.uid;
    
    if(this.ayudaId){
      try {
        this.ayudo.ayuFecha= new Date().getTime();
        await this.ayudarService.updateAyuda(this.ayudaId, this.ayudo);
        await this.loading.dismiss();
        this.navCtrl.navigateBack('/donacion');
      } catch (error) {
        this.presentToast('Error al guardar');
        this.loading.dismiss();
      }
    }else{
      try{
        if (this.ayudo.ayuPublicado==undefined){
            this.ayudo.ayuPublicado=false
          }
          this.ayudo.ayuFecha= new Date().getTime();
        
          
          await this.ayudarService.addAyuda(this.ayudo);
          await this.loading.dismiss();
          this.navCtrl.navigateBack('/donacion');
      }catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    }
  } 
  
  loadAyuda(){
    this.ayudaSubscription = this.ayudarService.getAyudar(this.ayudaId).subscribe(data => {
       this.ayudo = data;    
    });
  }

  async presentLoading(){
    this.loading = await this.loadingCtrl.create({message: 'Guardando...'});
    return this.loading.present();
  }

  async presentToast (message: string) {
    const toast = await this.toastCtrl.create({message, duration: 2000});
    toast.present();
  }
 
}
