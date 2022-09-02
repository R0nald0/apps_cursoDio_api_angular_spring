import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserServiceService } from '../service/user-service.service';
import { UsuarioRepository } from '../usuarioRepository/Usuario.reposiory';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

   filtro!:User[];
   listFiltroUser : User[]=[]
    
  constructor(private userService : UserServiceService,private uRepository:UsuarioRepository) {

   }

  ngOnInit(): void { 
          this.getUsers()
  }
  getUsers(){
      this.userService.getUsers().subscribe(dado =>{
        this.listFiltroUser = dado
        this.filtro = this.listFiltroUser
  
       })
  
    }

  
  set filtroText(texto : string){ 
     console.log(texto)
 
      this.filtro = this.listFiltroUser.filter((user : User) => 
            user.nome.toLowerCase().includes(texto.toLowerCase())
          )
     console.log(this.filtro)    
  }

  get filtroRes(){
      return this.filtro
      console.log(this.filtro)    
  }

}
