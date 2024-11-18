import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { catchError, finalize, map, take } from 'rxjs/operators';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HostNameService } from '../shared/services/host-name.service';
import { TokenHelperService } from '../shared/services/token-helper.service';
import { CompanyClinicService } from '../shared/services/companyClinic.service';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import store from 'store2';
import { DataStatusService } from '../shared/services/data-status.service';
import { CommonModule } from '@angular/common';
import { PaymentGateway } from '../models/clinicParms/WorldnetEnum';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ToastrModule, FormsModule, HttpClientModule],
  providers:[UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  forgetPassword = false;
  loading = false;
  reseting = false;
  @Input() error!: string | null;
  @Output() submitEM = new EventEmitter();
  formModel = { UserName: '', Password: '' }
  resetModel = { Email: '', LinkUrl: '' }
  hide = true;

  showResetSuccess = false;
  showResetError = false;
  errorMessage = '';
  constructor(private userService: UserService, private router: Router, private toastr: ToastrService, private titleService: Title, private hostnameService: HostNameService, private tokenService: TokenHelperService, private _dataStatus: DataStatusService,
    private _companyClinicservice: CompanyClinicService) { }
    
  ngOnInit(): void {
    this.toastr.success("workinG ALhamdulilah");
    this.titleService.setTitle("Clinics");
    if (store('token') != null && this.tokenService.getSessionExpiryTime() > 15)
    {
      this.router.navigateByUrl('/cliniccalendar');
    }
    else
    {
      this.router.navigateByUrl('/login');
    }
    // if (store('theme') == null)
    // {
    //   // store('theme', "indigo-pink");
    //   // this.themeService.setTheme("indigo-pink");
    // }
    // else
    // {
    //   this.themeService.setTheme(store('theme'));
    // } 
  }
  onSubmit(form: NgForm) {
    this.loading = true;
    this.userService.login(form.value).subscribe(
      (res: any) => {
        if(res == null)
        {
          this.toastr.error('Something went wrong, try later.', 'Authentication failed.');
        }
        else if(res.token == "3001")
        {
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        }
        else if(res == 2003)
        {
          this.toastr.error('Unable to login! Please contact your administrator.', 'Authentication failed.');
        }
        else if(res == 2002)
        {
          this.toastr.error('Due to many attempts, your account is locked out. Kindly wait for 10 minutes and try again!', 'Authentication failed.')         
        }
        else{
          console.log("res", res);
          store('token', res.token);
          store('role', res.role);
          this._dataStatus.updateTokenTime(this.tokenService.getSessionExpiryTime());
          if(res?.agency > 0)
          {
            store('AgencyID', res.agency);
          }
          this.GetSystemUserInfo();          
        }
        this.loading = false;
        this.Reset();
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else if(err.status == 460)
          this.toastr.error('Invalid Request', 'Authentication failed.');
        else if(err.status == 500)
          this.toastr.error('Something went wrong, try later.', 'Authentication failed.');
        this.loading = false;
        this.Reset();
      }
    );
  }
  returnLogin(){
    this.forgetPassword = false;
  }
  Reset()
  {
    this.formModel =  {UserName: '', Password: ''}
  }
  showForgetPassword(){
    this.forgetPassword = true;
    return false;
  }
  GetSystemUserInfo() {
    var headingCalendar = false;
    var lUserName = this.formModel.UserName.toLowerCase();
    this.userService.GetSystemUserInfo(this.formModel.UserName).subscribe(
      (res: any) => {
        res = res.filter((x: { userName: string; })=> x.userName.toLowerCase() === lUserName);
        if (res != null && res.length > 0) {
          console.log("res[0]",res[0]);
          store('firstName', res[0].firstName);
          store('lastName', res[0].lastName);
          store('userID', res[0].userID);
          store('companyID', res[0].companyID);
          store('roleID', res[0].roleID);
          store('userName', lUserName);
          if(res[0].googleCalendarCode != '' && res[0].googleCalendarCode != null){
            store('IsGoogleCalendarCode',1);
          }
          else{
            store('IsGoogleCalendarCode',0);
          }
          if(res[0].isReleaseNotes == true && res[0].isReleaseNotes != null){
            store('IsReleaseNotesCheck',1);
          }
          else{
            store('IsReleaseNotesCheck',0);
          }
          if(store('companyID') == '0'){
            store(false); 
            return;
          }

          if(res[0].roleID == 4){
            headingCalendar = true;
            this.router.navigate(['/cliniccalendar']);
          }
          else{
            this.GetClinicOfficesByCompany(res[0].companyID).then(
              (gcbres: any) => {
                if(gcbres){
                  this.GetUserBranches(res).then((gubres:any)=>{
                    if(gubres){
                      this.SetPaymentMethod();
                      headingCalendar = true;
                      this.router.navigate(['/cliniccalendar']);
                    }
                  })
                }
              });
          }
        }
      },
      err => {
        this.toastr.error('Locate user info failed! Please contact your administrator.', 'Locate User Info failed.');
      }
    );
  } 
  GetClinicOfficesByCompany(companyID: number) {
    return new Promise((resolve, reject) => {
      this._companyClinicservice.GetClinicOfficesByCompany(companyID).pipe(take(1)).subscribe(
        (res: any) => {
          var clinicOfficeData = JSON.parse(res.data);
          console.log("clinicOfficeData", clinicOfficeData);
          var clinicOfficeItems: { branchID: any; branchName: any; paymentGateway: any; }[] = [];
          if (clinicOfficeData.length > 0) {
            clinicOfficeData.forEach((item: { BranchID: any; BranchName: any; PaymentGateway: any; }) => {
                var clinicOfficeItem = {
                  "branchID": item.BranchID,
                  "branchName": item.BranchName,
                  "paymentGateway" : item.PaymentGateway
                }
                clinicOfficeItems.push(clinicOfficeItem);
            })
          }
          store('clinicOffices', clinicOfficeItems);
          //this.SetPaymentMethod();
          console.log("clinicOffices", clinicOfficeItems);
          resolve(true);
        },
        err => {
          reject();
        });
    });
  }
  SetPaymentMethod() {
    var clinicBranches = store('clinicOffices');
    var allowedBranches =  store('userBranches');
    var allowedBranchesList = allowedBranches.replaceAll(/\s/g,'').split(',');
    var branches = clinicBranches.filter((x: { branchID: { toString: () => any; }; }) => allowedBranchesList.includes(x.branchID.toString()))
    if (branches != null && branches.length > 0) {
      if (branches[0].paymentGateway == PaymentGateway.WORLDNET) {
        store('paymentGateway', 1);
        store('paymentGatewayP', PaymentGateway.WORLDNET);
      }
      else if (branches[0].paymentGateway == PaymentGateway.CARDCONNECT) {
        store('paymentGateway', 2);
        store('paymentGatewayP', PaymentGateway.CARDCONNECT);
      }
      else
      {
        store('paymentGateway', 0);
      }
      console.log("this.paymentAPI", store('paymentGateway'));
    }
  }
  GetUserBranches(res:any){
    return new Promise((resolve, reject) => {
      var branches = "";
      if (res[0].userBranches != null && res[0].userBranches.length > 0) {
        res[0].userBranches.forEach(function (item: { branchID: string; }, index: any) {
          if(branches == ""){
            branches = item.branchID + "";
          }else{
            branches = branches + ", " + item.branchID;
          }
        }.bind(this));
        store('userBranches', branches);
        console.log('Login',  store('userBranches'));
        resolve(true);
      }else{
        reject();
      }
    });
  }
}
