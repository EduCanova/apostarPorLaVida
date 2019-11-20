import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Campains} from '../interfaces/campains';
import {map} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class CampainsService {

  private campainsCollection: AngularFirestoreCollection<Campains>;

  constructor(private afs: AngularFirestore) { 
    this.campainsCollection= this.afs.collection<Campains>('campain');
  }

  getCampains (){
    return this.campainsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );

  }

  addCapain (campains: Campains){
   
    return this.campainsCollection.add(campains);
  }

  updateCampain (id: string, campains: Campains){
    return this.campainsCollection.doc<Campains>(id).update(campains);
  }
  getCampain(id: string){ 
    return this.campainsCollection.doc<Campains>(id).valueChanges();

  }

  deleteCampain(id: string){
    return this.campainsCollection.doc(id).delete();
  }
}
