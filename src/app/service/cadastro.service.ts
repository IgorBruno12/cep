import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { adm } from '../models/Cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private afd: AngularFirestore) { }

  creat(adm : adm){
    adm.id = this.afd.creatId()
    this.afd.collection('adm').doc().set()
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
}
