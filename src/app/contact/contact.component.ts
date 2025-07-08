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
    console.log(this.estadoFormulario)
    this.contact.push({
      nombre: this.estadoFormulario.nombre,
      apellido: this.estadoFormulario.apellido,
      email: this.estadoFormulario.email,
      asunto: this.estadoFormulario.asunto,
      comentario: this.estadoFormulario.comentario
    })
    this.estadoFormulario.nombre = "",
    this.estadoFormulario.apellido = "",
    this.estadoFormulario.email = "",
    this.estadoFormulario.asunto = "",
    this.estadoFormulario.comentario = ""
  }
  estadoFormulario = {
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    comentario: ""
  }
}
