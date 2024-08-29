import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  title = 'nezter_frontend';
  url='http://localhost:5270/User';
  user:any
  users=[]
  currentUser="";

  ngOnInit(): void {
    this.http.get(this.url,{

    }).subscribe((resp:any)=>{
     console.log(resp);
       this.users =resp
    });
  }

  constructor(private http:HttpClient){
    

  }


}
