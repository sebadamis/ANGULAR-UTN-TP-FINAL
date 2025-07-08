import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Contacto {
  nombre: string,
  apellido: string,
  email: string,
  asunto: string,
  comentario: string
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})


export class Contact {
  contact : Contacto[] = []

  submitForm(){
    console.log(this.formState)
    this.contact.push({
      nombre: this.formState.nombre,
      apellido: this.formState.apellido,
      email: this.formState.email,
      asunto: this.formState.asunto,
      comentario: this.formState.comentario
    })
    this.formState.nombre = "",
    this.formState.apellido = "",
    this.formState.email = "",
    this.formState.asunto = "",
    this.formState.comentario = ""
  }
  formState = {
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    comentario: ""
  }
}
