import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{
  formCad: FormGroup;
    constructor(private formBuilder: FormBuilder){
      this.formCad = formBuilder.group({
        nome:['', Validators.compose([Validators.required])],
        senha:['', Validators.compose([Validators.required])]
      })
    }

    ngOnInit(): void {
        
    }
}
