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
    this.ayudarCollection= this.afs.collection<Ayudar>('ayudar');
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
getAyudas(id: string){
  return this.ayudarCollection.doc<Ayudar>(id).valueChanges();
}

addAyuda (ayudo: Ayudar){
   
  return this.ayudarCollection.add(ayudo);
}

updateAyuda (id: string, ayudo: Ayudar){
  return this.ayudarCollection.doc<Ayudar>(id).update(ayudo);
}
getAyudar(id: string){ 
  return this.ayudarCollection.doc<Ayudar>(id).valueChanges();

}

deleteAyuda(id: string){
  return this.ayudarCollection.doc(id).delete();
}


} 

