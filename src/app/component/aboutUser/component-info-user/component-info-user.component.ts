import { HttpHeaders } from '@angular/common/http';
import { Component, getNgModuleById, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { pipe, tap } from 'rxjs';
import { Endereco } from 'src/app/model/Endereco';
import { User } from 'src/app/model/User';
import { UserServiceService } from '../../shared/service/user-service.service';


@Component({
  selector: 'app-component-info-user',
  templateUrl: './component-info-user.component.html',
  styleUrls: ['./component-info-user.component.css']
})
export class ComponentInfoUserComponent implements OnInit {
   endereco! : Endereco 
   user !:User
   id !: number

   enderecoIsvalid=false

   isUser = false

   headers1 = new HttpHeaders().set('Content-Type', 'application/json'); 
  constructor( private router :ActivatedRoute, private  user_service:UserServiceService) {   
    
    this.user =new User;
    this.user.endereco = new Endereco()       
}

  ngOnInit(): void {
         this.getUserById();
  }
      
 getUserById(){
          this.id =+this.router.snapshot.params['id']
          console.log(this.id)
           
          if(this.id){
            return this.user_service.getUserById(this.id).subscribe({
              next : dado => this.user = dado ,
              error : err => console.log(err)
             } )
          }else{
            return 
          }     
      }

 save():void{       
     this.user_service.save(this.user).subscribe(user =>{
        console.log(user)
     },)
 }
 

 validarCampoEnderec(){
  
 }
}

 