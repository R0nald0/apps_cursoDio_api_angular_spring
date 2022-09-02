

import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { User } from 'src/app/model/User';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.css']
})
export class DiologComponent implements OnInit {

  constructor(private userService:UserServiceService,
    public dialogRef: MatDialogRef<DiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  ngOnInit(): void {
  }
    
  cancelar(): void {
    this.dialogRef.close();
  }

  deletarUser(){
      
    this.data

    if(this.data.id){
      this.userService.delete(this.data.id).subscribe({
        next: data => console.log("deletado",data),
        error: er =>console.log(console.error()
        )
      })
       window.location.reload(); 
    }
    this.dialogRef.close();
 }

}
