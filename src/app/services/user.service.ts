import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../models/user';
import store from 'store2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL= environment.API_URL;
  private API_KEY = environment.API_KEY;
  formModel: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { 
    this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
      })
    });
  }
  

  loginForOperator(formData : FormData) {
    let headers = new HttpHeaders();
    headers = headers.set('ApiKey', this.API_KEY);
    return this.http.post(this.API_URL + 'Account/LoginForOperator', formData, {headers: headers} );
  }

  login(formData : FormData) {
    let headers = new HttpHeaders();
    headers = headers.set('ApiKey', this.API_KEY);
    return this.http.post(this.API_URL + 'Account/Login', formData, {headers: headers} );
  }
  GetUserRights() {
    let jwt = store('token');
    let jwtData = jwt != null ? jwt.split('.')[1] :"";
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    
    let ASPNetUserID = decodedJwtData.ASPNetUserID;
    
    return this.http.post(this.API_URL + 'Account/GetSystemUserRights', { "userId": ASPNetUserID.toString() }).
    pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError('GetSystemUserRights', error.message );
      })
    )
  }
  GetSystemUserInfo(username: string) {
    return this.http.post(this.API_URL + 'Account/GetSystemUser', {"username": username});
  }
  GetAlerts() {
    return this.http.post(this.API_URL + 'CompanyAlert/GetCompanyAlerts',
    {
      "companyID": 10211,
      "offSetRows": 1,
      "nextRows": 1
    }
    );
  }
  GetPatients() {
    return this.http.post(this.API_URL + 'Patient/GetPatientByComapnyID',
    {
      "companyID": 10211,
      "inActive": 0,
      "offset": 1,
      "nextRows": 11,
      "totalNum": 0,
      "isMedicare": true,
      "isactive": true,
      "allowedBranches": "181819,181820"
    }
    );
  }
  GetOperators() : any
  {
    return this.http.get<any>(this.API_URL + 'Account/GetOperators');
  }

  TokenRenewal(param: string ) : any{
    return this.http.post(this.API_URL + 'Account/RefreshToken', {"Token": param});
  }
  
  GetUsers(userParam:User) {
    return this.http.post(this.API_URL + 'Account/GetSystemUserPaginated', 
    {
      "Username":userParam.userName,
      "InActive":userParam.inActive,
      "CompanyID":userParam.companyID,
      "sortExpression":null,
      "offSetRows": userParam.offSetRows,
      "nextRows": userParam.nextRows,
    }
    ).pipe(
      map((data: any) => {
        return data;
      }), catchError( error => {
        return throwError('GetUsers Something went wrong!' );
      })
    );
  }

  UpdateUser(FormData:User) {
    return this.http.post(this.API_URL + 'Account/UpdateSystemyUser', FormData).
      pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError('UpdateUser Something went wrong!' );
        })
    )
  }

  AddNewUser(FormData:User) 
  {
    let data = {
      "registerDto": {
        "userName": FormData.userName,
        "firstName": FormData.firstName,
        "lastName": FormData.lastName,
        "email": FormData.email,
        "password": FormData.password,
        "role": FormData.role,
        "requestForm": FormData.requestForm
      },
      "systemUser": {
        "roleID": FormData.roleID,
        "userID": FormData.userID,
        "companyID": FormData.companyID,
        "userType": FormData.userType,
        "userTypeSourceID": FormData.userTypeSourceID,
        "userName": FormData.userName,
        "password": FormData.password,
        "firstName": FormData.firstName,
        "lastName": FormData.lastName,
        "contactNumber": FormData.contactNumber,
        "emailAddress": FormData.emailAddress,
        "email": FormData.email,
        "address": FormData.address,
        "city": FormData.city,
        "cityName": FormData.cityName,
        "gpStateID": FormData.gpStateID,
        "stateID": FormData.stateID,
        "zipCode": FormData.zipCode,
        "zipCodeN": FormData.zipCodeN,
        "gpCountryID": FormData.gpCountryID,
        "countryID": FormData.countryID,
        "comments": FormData.comments,
        "inActive": FormData.inActive,
        "isAdmin": FormData.isAdmin,
        "isSystemDefault": FormData.isSystemDefault,
        "addTerminal": FormData.addTerminal,
      },
      "userRole": {
        "roleID": FormData.roleID
      }, 
      "userBranch" : FormData.userBranches
    };
    return this.http.post(this.API_URL + 'Account/RegisterCompanyUser', data).
      pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError('AddNewUser Something went wrong!' );
        })
    )
  }

  GetRoles() : any
  {
    return this.http.get<any>(this.API_URL + 'Account/GetRoles');
  }

  ForgetPassword(data: any) {
    let headers = new HttpHeaders();
    headers = headers.append('ApiKey', this.API_KEY);
    // headers = headers.append('Content-Type', 'application/json');
    var payload = { "email": data.Email, "linkUrl": data.LinkUrl};
    return this.http.post(this.API_URL + 'Account/ForgetPassword', payload, {headers: headers}).
      pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError('Send reset email failed, something went wrong!');
        })
    );
  }

  ResetPassword(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('ApiKey', this.API_KEY);
    var payload = data;
    return this.http.post(this.API_URL + 'Account/ResetPassword', payload, {headers: headers}).
      pipe(
        map((data: any) => {
          return data;
        }), catchError( error => {
          return throwError('Reset password failed, please contact administrator to resolve this!');
        })
    );
  }

  UpdatePassword(data: any) {
    let headers = new HttpHeaders();
    headers = headers.set('ApiKey', this.API_KEY);
    var payload = data;
    return this.http.post(this.API_URL + 'Account/ChangePasswordRequest', payload).
      pipe(
        map((data: any) => {
          return data;
          var rst = { result: false, data: "" };
          if (data.statusCode == 200){
            rst.result = true;
            rst.data = data.message;
          }
          else{
            rst.result = false;
            rst.data = data.message;
          }
          return rst;
        }), catchError( error => {
          return throwError('Update password failed, please contact administrator to resolve this!');
        })
    );
  }
}
