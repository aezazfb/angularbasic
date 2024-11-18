import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import store from 'store2';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
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
  
  constructor(private router: Router){

  }

  ngOnInit(): void {
    if (store('token') != null)// && this.tokenService.getSessionExpiryTime() > 15)
      {
        this.router.navigateByUrl('/home');
      }
      else
      {
        this.router.navigateByUrl('/login');
      }
  }

  OnSubmit(form: NgForm){
    this.loading = true;
    console.log(form.value);
    
    if(form.value.Password != ''){
      store('token', form.value);
    }
    console.log(store('token'));
    if (store('token') != null)// && this.tokenService.getSessionExpiryTime() > 15)
    {
      this.router.navigateByUrl('/home');
    }
    else
    {
      this.router.navigateByUrl('/login');
    }
    // this.userService.login(form.value).subscribe(
    //   (res: any) => {
    //     if(res == null)
    //     {
    //       console.log('Something went wrong, try later.', 'Authentication failed.');
    //     }
    //     else if(res.token == "3001")
    //     {
    //       console.log('Incorrect username or password.', 'Authentication failed.');
    //     }
    //     else if(res == 2003)
    //     {
    //       console.log('Unable to login! Please contact your administrator.', 'Authentication failed.');
    //     }
    //     else if(res == 2002)
    //     {
    //       console.log('Due to many attempts, your account is locked out. Kindly wait for 10 minutes and try again!', 'Authentication failed.')         
    //     }
    //     else{
    //       console.log("res", res);
    //       store('token', res.token);
    //       store('role', res.role);
    //       // this._dataStatus.updateTokenTime(this.tokenService.getSessionExpiryTime());
    //       if(res?.agency > 0)
    //       {
    //         store('AgencyID', res.agency);
    //       }
    //       // this.GetSystemUserInfo();          
    //     }
    //     this.loading = false;
    //     // this.Reset();
    //   },
    //   err => {
    //     if (err.status == 400)
    //       console.log('Incorrect username or password.', 'Authentication failed.');
    //     else if(err.status == 460)
    //       console.log('Invalid Request', 'Authentication failed.');
    //     else if(err.status == 500)
    //       console.log('Something went wrong, try later.', 'Authentication failed.');
    //     this.loading = false;
    //     // this.Reset();
    //   }
    // );
  }
}
