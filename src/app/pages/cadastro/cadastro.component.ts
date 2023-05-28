import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { adm } from 'src/app/models/Cadastro.model';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  formAdm: FormGroup;
    constructor(private formBuilder: FormBuilder, private adm: CadastroService){
      this.formAdm = formBuilder.group({
        nome:['', Validators.compose([Validators.required])],
        senha:['', Validators.compose([Validators.required])]
      })
    }

    ngOnInit(): void {
        
    }

    cadastroAdm(){
      if (this.formAdm.valid){
        this.adm.create(this.formAdm.value)
      }
    }
}
