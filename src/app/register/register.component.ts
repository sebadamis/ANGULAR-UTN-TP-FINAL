import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Usuario {
  id: number,
  nombre: string,
  apellido: string,
  telefono: string,
  email: string,
  password: string,
  confirmPassword: string
}

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class Register {
  usuarios : Usuario[] = []

  submitFormRegister(){
    console.log(this.formState)
    this.usuarios.push({
      nombre: this.formState.nombre,
      apellido: this.formState.apellido,
      telefono: this.formState.telefono,
      email: this.formState.email,
      password: this.formState.password,
      confirmPassword: this.formState.confirmPassword,
      id: this.usuarios.length + 1
    })
    this.formState.nombre = "",
    this.formState.apellido = "",
    this.formState.telefono = "",
    this.formState.email = "",
    this.formState.password = "",
    this.formState.confirmPassword = ""
  }
  formState = {
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
}


