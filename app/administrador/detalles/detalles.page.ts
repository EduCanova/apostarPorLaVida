import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Campains } from 'src/app/interfaces/campains';
import { LoadingController, ToastController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CampainsService } from 'src/app/servicios/campains.service';
import { AuthService } from 'src/app/servicios/auth.service';
//import { File } from '@ionic-native/file/ngx';
import {AngularFireStorage } from '@angular/fire/storage';
import {Observable} from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  @ViewChild('pwaphoto', null)  pwaphoto: ElementRef;
  imgURI: string = null;

  public uploadPercent: Observable<number>;
  public downloadUrl: Observable<string>;
  public campains: Campains = {};
  public fechaTest: Date;
  public fecha: string;
  public fecha2: string;
  private loading: any;
  private campainId: string = null;
  private campainSubscription: Subscription;
  constructor(
    
   // private camera: Camera,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private campainService: CampainsService,
    private navCtrl: NavController,
  //  private platform: Platform,
    //private file: File,
  //  private afStorage: AngularFireStorage 
  ){
    
    this.campainId = this.activatedRoute.snapshot.params['id'];
    if (this.campainId) {
           this.loadCampain();
    }

    

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.campainSubscription) this.campainSubscription.unsubscribe();
  }
  async saveCampain (){
    await this.presentLoading();
    this.campains.campUsr = this.authService.getAuth().currentUser.uid;
    
    if(this.campainId){
      try {
        this.campains.campInicio=Date.parse(this.fecha);
        this.campains.campFinal=Date.parse(this.fecha2);
        await this.campainService.updateCampain(this.campainId, this.campains);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/ncampa');
      } catch (error) {
        this.presentToast('Error al guardar');
        this.loading.dismiss();
      }
    }else{
      try{
        if (this.campains.campEstado==undefined){
            this.campains.campEstado=false
          }
        this.campains.campInicio=Date.parse(this.fecha2);
        this.campains.campFinal=Date.parse(this.fecha);
          console.log(Date.parse(this.fecha));
          await this.campainService.addCapain(this.campains);
          await this.loading.dismiss();
          this.navCtrl.navigateBack('/ncampa');
      }catch (error) {
        this.presentToast(error);
        this.loading.dismiss();
      }
    }
    
  }
  
  loadCampain(){
    this.campainSubscription = this.campainService.getCampain(this.campainId).subscribe(data => {
       this.campains = data;    
       this.fechaTest=new Date(this.campains.campFinal);
       this.fecha2=this.fechaTest.toString();
       this.fechaTest=new Date(this.campains.campInicio);
       this.fecha=this.fechaTest.toString();
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

 openGalery(){
  if (this.pwaphoto == null) {
    return;
  }
  this.pwaphoto.nativeElement.click();
 }

  uploadPWA() {

    if (this.pwaphoto == null) {
      return;
    }

    const fileList: FileList = this.pwaphoto.nativeElement.files;

    if (fileList && fileList.length > 0) {
      this.firstFileToBase64(fileList[0]).then((result: string) => {
        this.imgURI = result;
        alert(JSON.stringify(this.imgURI));
      }, (err: any) => {
        // Ignore error, do nothing
        this.imgURI = null;
      });
    }
  }

  private firstFileToBase64(fileImage: File): Promise<{}> {
    return new Promise((resolve, reject) => {
      let fileReader: FileReader = new FileReader();
      if (fileReader && fileImage != null) {
        fileReader.readAsDataURL(fileImage);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        reject(new Error('No file found'));
      }
    });
  }



/*



      try {
        if (this.pwaphoto == null) {
          return;
        }
        const fileList: FileList = this.pwaphoto.nativeElement.files;

        if (fileList && fileList.length > 0) {
          this.firstFileToBase64(fileList[0]).then((result: string) => {
            this.imgURI = result;
            alert(JSON.stringify(this.imgURI));
          }, (err: any) => {
            // Ignore error, do nothing
            this.imgURI = null;
          });
        }
    
        this.pwaphoto.nativeElement.click();
      const fileUri: string= await this.camera.getPicture(options);
      let file: string;
        if(this.platform.is('ios')){
        file=fileUri.split('/').pop();
      }else{
        file=fileUri.substring(fileUri.lastIndexOf('/')+1, fileUri.indexOf('?'));
      }
   const path: string= fileUri.substring(0, fileUri.lastIndexOf('/'));
      const buffer: ArrayBuffer= await this.file.readAsArrayBuffer(path, file);
      const blob: Blob= new Blob([buffer], {type: 'image/jpeg'});
      this.uploadPicture(blob);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  }
  
  uploadPicture(){
    if (this.pwaphoto == null) {
      return;
    }
    const fileList: FileList = this.pwaphoto.nativeElement.files;
   /* const ref = this.afStorage.ref('imagenes/ionic.jpg');
    const task = ref.put(blob);
    this.uploadPercent=task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(()=>this.downloadUrl= ref.getDownloadURL())).subscribe(); 
      if (fileList && fileList.length > 0) {
        this.firstFileToBase64(fileList[0]).then((result: string) => {
          this.imgURI = result;
          alert(JSON.stringify(this.imgURI));
        }, (err: any) => {
          // Ignore error, do nothing
          this.imgURI = null;
        });
      }
  }

  private firstFileToBase64(fileImage: File): Promise<{}> {
    return new Promise((resolve, reject) => {
      let fileReader: FileReader = new FileReader();
      if (fileReader && fileImage != null) {
        fileReader.readAsDataURL(fileImage);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        reject(new Error('No file found'));
      }
    });
  }
  */
}
