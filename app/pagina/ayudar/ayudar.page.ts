import { Component, OnInit } from '@angular/core';
import {Ayudar} from '../../interfaces/ayudar';
import { Subscription } from 'rxjs';
import { AyudarService } from 'src/app/servicios/ayudar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ayudar',
  templateUrl: './ayudar.page.html',
  styleUrls: ['./ayudar.page.scss'],
})
export class AyudarPage implements OnInit {
  public ayudo = new Array<Ayudar>();
  private ayudarSubscription: Subscription;
  //private loading: any;
  constructor(private ayudarService: AyudarService,
    public router: Router,
   // private loadingCtrl: LoadingController,
  //  private navCtrl: NavController,
   /* private toastCtrl: ToastController*/) { 
      this.ayudarSubscription = this.ayudarService.getAyuda().subscribe(data=>{ 
      this.ayudo = data; 
      this.ayudo=this.ayudo.filter(ayudaAct => ayudaAct.ayuPublicado==true);
    }); 
    //  this.ayuda=this.ayuda.filter(ayudaAct => ayudaAct.ayuPublicado==true);
    
  }
  ngOnDestroy (){
    this.ayudarSubscription.unsubscribe();
  }
  ngOnInit() {
   
  }
 
}
