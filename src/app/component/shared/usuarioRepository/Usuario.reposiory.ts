import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/model/User";
import { UserServiceService } from "../service/user-service.service";

@Injectable() 
export class UsuarioRepository  {
    

    constructor(private uService:UserServiceService){
    
    }
  
  impirmirNome(){
     console.log("NOMEAQUI")
  }

//   public listarTodosUsuarios():Observable<User[]>{ 
//        var lista: Observable<User> 
//         this.uService.getUsers().subscribe({
//             next: data => console.log( data)
//             }
//     )

//         }
}