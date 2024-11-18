import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ClinicBranchDetail, PaymentTerminalParams } from '../../models/clinicParms/ClinicBranchDetail';
import { NewClinicParams } from '../../models/clinicParms/clinic-onboard-params';


@Injectable({
  providedIn: 'root'
})
export class CompanyClinicService {
  private API_URL= environment.API_URL;
  private API_KEY = environment.API_KEY;
  
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  GetAllCompanies() 
  {
    return this.http.get<any>(this.API_URL + 'Company/GetAllCompany');
  }
  GetClinicOfficesByCompany(CompanyID: number)
  {
      var payload = {
         "companyID": CompanyID
      };
      return this.http.post(this.API_URL + 'ClinicOffice/GetClinicOffices', payload).
      pipe(
         map((data: any) => {
            return data;
         }), catchError( error => {
            return throwError('GetClinicOffices, Something went wrong!');
         })
      );
  }
  UpdateClinicOffice(eItem: ClinicBranchDetail){
   return this.http.post(this.API_URL + 'ClinicOffice/UpdateClinicOffice', eItem).
   pipe(
      map((data: any) => {
         //console.log(data);
         return data;
      }), catchError( error => {
         return throwError('UpdateClinicOffices, Something went wrong!');
      })
   );
  }
   AddClinicOffice(eItem: ClinicBranchDetail){
      return this.http.post(this.API_URL + 'ClinicOffice/AddClinicOffice', eItem).
      pipe(
         map((data: any) => {
            return data;
         }), catchError( error => {
            return throwError('AddClinicOffices, Something went wrong!');
         })
      );
   }
   DeleteClinicOffice(eItem: ClinicBranchDetail){
      return this.http.post(this.API_URL + 'ClinicOffice/DeleteClinicOffice', eItem).
      pipe(
         map((data: any) => {
            return data;
         }), catchError( error => {
            return throwError('DeleteClinicOffices, Something went wrong!');
         })
      );
   }
   sendClinicInvite(personName:string, inviteEmail:string){
      var payload = {
         "personName": personName,
         "inviteEmail": inviteEmail
      }
      return this.http.post(this.API_URL + 'ClinicOffice/sendClinicInvite', payload).
      pipe(
         map((data: any) => {
            return data;
         }), catchError( error => {
            return throwError('sendClinicInvite, Something went wrong!');
         })
      );
   }
   CreateNewClinic(opItem:NewClinicParams) {
      const formData = new FormData();
      formData.append("Details",JSON.stringify({ request: opItem }));
      formData.append("logofile", opItem.basicInfo.logofile);
      return this.http.post(this.API_URL + 'ClinicOnboard/CreateNewClinic', formData).
        pipe(
          map((data: any) => {
            return data;
          }), catchError( error => {
            return throwError('Add Clinic Failed, Something went wrong!');
          })
       );
    }
   AddPaymentTerminal(opItem:PaymentTerminalParams) {
      return this.http.post(this.API_URL + 'ClinicOffice/InsertUpdatePaymentTerminal', opItem).
        pipe(
          map((data: any) => {
            return data;
          }), catchError( error => {
            return throwError('Add Payment Terminal, Something went wrong!');
          })
       );
    }
    GetPaymentTerminals(branchId: number) {
      return this.http.get(this.API_URL + 'ClinicOffice/GetPaymentTerminals?branchId='+branchId).
        pipe(
          map((data: any) => {
            return data;
          }), catchError( error => {
            return throwError('Get Payment Terminals, Something went wrong!');
          })
       );
    }

  GetAllBranches() 
  {
     return this.http.get<any>(this.API_URL + 'OrbitReports/GetAllBranches/');
  }
  GetCampaignsByCompanyID(CompanyID: number | null) : any
  {
     return this.http.get<any>(this.API_URL + 'OrbitReports/GetCampaignsByCompany/' + CompanyID);
  }
  GetAllCampaigns() : any
  {
     return this.http.get<any>(this.API_URL + 'OrbitReports/GetAllCampaigns');
  }
  GetCompanyContactByCompanyID(CompanyID: number) : any
  {
     return this.http.get<any>(this.API_URL + 'Company/GetCompanyContactByCompanyID/' + CompanyID);
  }

  GetSourceUsersByCompanyID(CompanyID: number) : any
  {
     return this.http.get<any>(this.API_URL + 'CompanyAlert/GetSourceUserByCompany/' + CompanyID);
  }

  GetFollowupRuleByCompanyID(CompanyID: number) : any
  {
     return this.http.get<any>(this.API_URL + 'GeneralParam/GetFollowupRuleByCompanyID/' + CompanyID);
  }
  
}
