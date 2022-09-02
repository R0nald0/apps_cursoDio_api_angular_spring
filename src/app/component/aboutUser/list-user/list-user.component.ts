import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserServiceService } from '../../shared/service/user-service.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  @Input() users!:User[];
  
  constructor() { }

  ngOnInit(): void {
      this.users
  }

  // getAlluser(){
  //   this.user_service.getUsers().subscribe({
  //      next: data => {
  //        this.users = data
  //     },
  //      error: err => console.log(err),
  //    })  
  //   }
}
