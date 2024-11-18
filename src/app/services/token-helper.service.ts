import { Injectable } from '@angular/core';
import moment from 'moment';
import { environment } from '../../environments/environment';
import store from 'store2';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenHelperService {
  private tokenStr!: string;
  private exp!: number;

  constructor(private userService: UserService) { 
  }
  getSessionExpiryTime() : number{
    this.getCurrentToken();
    // var startDate = new Date();
    // var endDate   = new Date(0);
    // endDate.setSeconds(this.exp);
    // var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    // var minutes = Math.round(seconds/60);


    var mStart = moment();
    var mEnd = moment.unix(this.exp);
    //console.log('moment', mStart, mEnd);
    var minutes = mEnd.diff(mStart, 'minutes');
    //console.log(minutes);
    return minutes
  }
  checkTokenExpiration() 
  {
    this.getCurrentToken();
    var mStart = moment();
    var mEnd = moment.unix(this.exp);
   // console.log('moment', mStart, mEnd);
    var minutes = mEnd.diff(mStart, 'minutes');

    // var startDate = new Date();
    // var endDate   = new Date(0);
    // endDate.setSeconds(this.exp);
    // var seconds = (endDate.getTime() - startDate.getTime()) / 1000;
    // var minutes = Math.round(seconds/60);
    let RenewalMins = environment.TokenRenewalTime ? environment.TokenRenewalTime : 15;
    //console.log("minutes", minutes, " RenewalMins", RenewalMins);
    if(minutes <= RenewalMins )
    {
        this.userService.TokenRenewal(this.tokenStr).subscribe(
            (res: any) => {
              store('token', res.token);
             // console.log("token reset success");
            },
            (err: any) => {
            });
    }
  }
  getCurrentToken(){
    let jwt = store('token');
    let jwtData = jwt != null ? jwt.split('.')[1] :"";
   // console.log('JWTDATA',jwtData);
    let decodedJwtJsonData = window.atob(jwtData)
    if(decodedJwtJsonData == '' || decodedJwtJsonData == undefined || decodedJwtJsonData == null){
      this.exp = 0;
    }
    else{
      let decodedJwtData = JSON.parse(decodedJwtJsonData);
      this.tokenStr = jwt;
      this.exp = decodedJwtData.exp;
    }
  }
}
