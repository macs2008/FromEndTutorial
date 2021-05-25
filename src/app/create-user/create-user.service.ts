import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from "@angular/common/http";


import { RestRespondModel } from '../model/RestRespond.model';
import { UserModel } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http:HttpClient) {
   }
/**
*Metodoque valida campos oblicagotios
*/
  public validation(user:UserModel):boolean{
    let isValid = true;

    if(!user.firsName){

      isValid = false;
    }
    if(!user.firsSurname){

      isValid = false;
    }
    if(!user.adrres){

      isValid = false;
    }

    return isValid;
  }
  public saveOrUdpdate(user:UserModel):Observable<RestRespondModel>{

    return this.http.post<RestRespondModel>("http://localhost:8080/saveOrUpdate",JSON.stringify(user));

  }
}
