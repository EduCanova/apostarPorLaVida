import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Voluntarios } from '../interfaces/voluntarios';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VoluntariosService {
  private voluntariosCollection: AngularFirestoreCollection<Voluntarios>;
  constructor(private afs: AngularFirestore) {
    this.voluntariosCollection= this.afs.collection<Voluntarios>('voluntario');
   }

  addVoluntario (voluntarios: Voluntarios){ 
    return this.voluntariosCollection.add(voluntarios);
  }
  getVoluntario (){
    return this.voluntariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );

  }
  deleteVoluntario(id: string){
    return this.voluntariosCollection.doc(id).delete();
  }
}
