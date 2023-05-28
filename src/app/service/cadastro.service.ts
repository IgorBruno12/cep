import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Administrador } from '../models/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private dbPath = '/administradores';

  administradoresRef: AngularFirestoreCollection<Administrador>;

  constructor(private db: AngularFirestore) {
    this.administradoresRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Administrador> {
    return this.administradoresRef;
  }

  create(admin: Administrador): any {
    return this.administradoresRef.add({ ...admin });
  }

  update(id: string, data: any): Promise<void> {
    return this.administradoresRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.administradoresRef.doc(id).delete();
  }

  // create(adm: adm) {
  //   adm.id = this.afd.createId();
  //   this.afd.collection('adm').doc(adm.id).set(adm)
  //     .then((res: any) => {
  //       console.log(res);
  //     })

  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // }
}
