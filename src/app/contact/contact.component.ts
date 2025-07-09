import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface ContactPage {
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
  contacto : ContactPage[] = []

  submitFormContact(){
    console.log(this.estado_Formulario)
    this.contacto.push({
      nombre: this.estado_Formulario.nombre,
      apellido: this.estado_Formulario.apellido,
      email: this.estado_Formulario.email,
      asunto: this.estado_Formulario.asunto,
      comentario: this.estado_Formulario.comentario
    })
    this.estado_Formulario.nombre = "",
    this.estado_Formulario.apellido = "",
    this.estado_Formulario.email = "",
    this.estado_Formulario.asunto = "",
    this.estado_Formulario.comentario = ""
  }
  estado_Formulario = {
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    comentario: ""
  }
}
