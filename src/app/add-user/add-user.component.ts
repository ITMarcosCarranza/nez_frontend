import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent{
  Nombre = "";
  Apellido = "";
  Direccion = "";
  Telefono="";
  Estado = "";
  Zip = "";
  TipoUsuario="";
  Ciudad="";
  Login="";
  Password="";
  url="http://localhost:5270/User"

  constructor(private http:HttpClient
    ,private router:Router
  ){}

 

  addUser(event:Event){
    event.preventDefault();
     let  formData = new FormData();
      formData.append("Nombre",this.Nombre)
      formData.append("Apellido",this.Apellido)
      formData.append("Direccion",this.Direccion)
      formData.append("Telefono",this.Telefono)
      formData.append("Estado",this.Estado)
      formData.append("CodigoPostal",this.Zip)
      formData.append("TipoUsuario",this.TipoUsuario)
      formData.append("Ciudad",this.Ciudad)
      formData.append("Login",this.Login)
      formData.append("Password",this.Password)
      

      this.http.post(this.url,formData).subscribe(resp=> this.router.navigate(["/"]));

  }
}
