import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import { map } from "rxjs/operators";


export interface conte {
  id: string;
  campName: string;
  campObj: string;
 campEstado: boolean;
 campDescrip: string;
 campImg : string;
 campInicio : Date;
 campFinal : Date;
}

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  constructor( private db: AngularFirestore) { }


  getContenido() {
    

    
return this.db.collection('campain').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as conte;
        data.id = a.payload.doc.id;
     
          return data;
      
       
      })
    }))
  }

}
