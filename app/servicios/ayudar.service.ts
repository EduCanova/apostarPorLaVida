import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {Ayudar} from '../interfaces/ayudar';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AyudarService {
  private ayudarCollection: AngularFirestoreCollection<Ayudar>;

  constructor(private afs: AngularFirestore) { 
    this.ayudarCollection= this.afs.collection<Ayudar>('donar');
}

getAyuda (){
  return this.ayudarCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;

        return { id, ...data };
      });
    })
  );

}
}

