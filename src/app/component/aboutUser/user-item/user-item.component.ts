import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/component/shared/service/user-service.service';
import { User } from 'src/app/model/User';
import { DiologComponent } from '../../shared/diolog/diolog.component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user! :User

  constructor(public dialog:MatDialog ,private httpCliente :HttpClient,private userService :UserServiceService) { }

  ngOnInit(): void {
  }

  deletarUser(){
    if(this.user.id){
      this.userService.delete(this.user.id).subscribe({
        next: data => console.log("deletado"),
        error: er =>console.log(console.error()
        )
      })
      this.userService.getUsers()
    }
 }

 openDialog(): void {
  this.dialog.open(DiologComponent, {
     width: '250px',
     data:this.user
  });
}


}
