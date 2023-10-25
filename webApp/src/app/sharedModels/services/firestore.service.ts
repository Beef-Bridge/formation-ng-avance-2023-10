import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, deleteDoc, doc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })

export class FirestoreService {
  constructor(private _firestore: Firestore) { }

  // -------------------
  public addFirestore = async (datas: any) => {
    try {
      await addDoc(
        collection(this._firestore, 'commandes'), // arg1 : la collection dans firestore
        datas // arg2 : les datas qu'on envoie
      )
    } catch (e) {
      console.warn(e);
    }
  }
  // ------------------- 
  public getCommandes = async () => {
    const querySnapshot = await getDocs(
      collection(this._firestore, 'commandes')
    );
    const arrayDoc: any[] = [];
    querySnapshot.forEach(
      (doc: any) => {
        console.warn(doc.id, doc.data());
        arrayDoc.push(doc.id);
      }
    );
    return arrayDoc;
  }
  // -------------------
  public deleteCommande = async (commande: any) => {
    const docRef = doc(this._firestore, 'commandes', commande);
    await deleteDoc(docRef);
  }
}
