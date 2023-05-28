import { Component,OnInit } from '@angular/core';
import { Administrador } from 'src/app/models/administrador.model';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  admin: Administrador = new Administrador();

  ngOnInit(): void {
  }

  constructor(private cadastroService: CadastroService) { }

  cadastroAdm(): void {
    this.cadastroService.create(this.admin).then(() => {
      console.log("Criado com sucesso");
    });
  }

  newAdmin(): void {
    this.admin = new Administrador();
  }
  // formAdm: FormGroup;
  //   constructor(private formBuilder: FormBuilder, private adm: CadastroService){
  //     this.formAdm = formBuilder.group({
  //       nome:['', Validators.compose([Validators.required])],
  //       senha:['', Validators.compose([Validators.required])]
  //     })
  //   }

  //   ngOnInit(): void {

  //   }

  //   cadastroAdm(){
  //     if (this.formAdm.valid){
  //       this.adm.create(this.formAdm.value)
  //     }
  //   }
}
