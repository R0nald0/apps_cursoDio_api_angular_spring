import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http'
import { User } from 'src/app/model/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService {

  private  url="http://localhost:8080//user";

  httpOptions ={
     Headers : new HttpHeaders({'content-type':'application/json'})
  }

  constructor(  private httpClient : HttpClient) {
    
  }
   
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.url}`)
  }

  getUserById(id:number):Observable<User>{
      return this.httpClient.get<User>(`${this.url}/${id}`)
  }

  save(user:User):Observable<any>{ 
           console.log(user)  
        if(user.id){
          return this.httpClient.put<User>(`${this.url}/${user.id}`,user) //editar dados
        }else{
          return  this.httpClient.post<any>(`${this.url}`,user) 
        }//salvar dados  
        }
  

  delete(id:number):Observable<any>{
     return this.httpClient.delete<any>(`${this.url}/${id}`);
  }
}