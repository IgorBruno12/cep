/*import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { adm } from '../models/Cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private afd: AngularFirestore) { }

  create(adm : adm){
    adm.id = this.afd.createId()
    this.afd.collection('adm').doc().set()
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}*/

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { adm } from '../models/Cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private afd: AngularFirestore) { }

  create(adm: adm) {
    adm.id = this.afd.createId();
    this.afd.collection('adm').doc(adm.id).set(adm)
      .then((res: any) => {
        console.log(res);
      })

      .catch((error: any) => {
        console.log(error);
      });
  }
}
