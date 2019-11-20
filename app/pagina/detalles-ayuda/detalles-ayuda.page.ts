import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AyudarService } from 'src/app/servicios/ayudar.service';
import { Ayudar } from 'src/app/interfaces/ayudar';
@Component({
  selector: 'app-detalles-ayuda',
  templateUrl: './detalles-ayuda.page.html',
  styleUrls: ['./detalles-ayuda.page.scss'],
})
export class DetallesAyudaPage implements OnInit {
  
  public ayudaId: string = null;
  private ayudaSubscription: Subscription;

  public ayudar: Ayudar = {};
  public fecha: string;
  public fechaTest: Date;
  constructor( private activatedRoute: ActivatedRoute,
    private ayudaService: AyudarService,
    ) {     
    this.ayudaId = this.activatedRoute.snapshot.params['id'];
    if (this.ayudaId) {
         this.loadAyuda();
      }
  }

  ngOnInit() { 
  }
  ngOnDestroy() {
    if (this.ayudaSubscription) this.ayudaSubscription.unsubscribe();
  }

  loadAyuda(){
    this.ayudaSubscription = this.ayudaService.getAyudas(this.ayudaId).subscribe(data => {
       this.ayudar = data;    
       this.fechaTest=new Date(this.ayudar.ayuFecha);
       this.fecha="IHLhwQpoW6c";
    });
  }
  
} 
