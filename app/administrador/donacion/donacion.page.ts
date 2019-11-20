import { Component, OnInit } from '@angular/core';
import {Ayudar} from '../../interfaces/ayudar';
import { Subscription } from 'rxjs';
import { AyudarService } from 'src/app/servicios/Ayudar.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {

public ayudo = new Array<Ayudar>();
  private ayudarSubscription: Subscription;
  constructor(private ayudarService: AyudarService,
    public router: Router,
    private toastCtrl: ToastController) {
    this.ayudarSubscription = this.ayudarService.getAyuda().subscribe(data=>{
      this.ayudo = data;
    }); 
  }
 
  ngOnInit() {  }
  ngOnDestroy (){
    this.ayudarSubscription.unsubscribe();
  }

  
  async deleteAyuda(id: string) {
    try {
      await this.ayudarService.deleteAyuda(id);
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
}
