import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { UserModel } from '../model/user.model';
import { CreateUserService } from './create-user.service';
import { OK } from '../model/httpStatus';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CreateUserService],
})
export class CreateUserComponent implements OnInit {

public user:UserModel;
public isValide :boolean = true;
public message : string = "";
  constructor(private  createUserService: CreateUserService,
  private router:Router) {
    this.user= new UserModel;
   }

  ngOnInit(): void {
  }
public saveOrUdpdate():void{

  this.isValide = this.createUserService.validation(this.user);

  if(this.isValide){
    this.createUserService.saveOrUdpdate(this.user).subscribe(res=>{
      if(res.responseCode == OK){
        this.router.navigate(['/userComponent']);
      }else{
        this.message = res.messsage;
        this.isValide = false;
      }

    });
  }else{
    this.message ="Los campos con * son obligatotios";
  }

}


}
