import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStatusService {
  private RefreshCalendarFlag = new BehaviorSubject<boolean>(false);
  private RefreshPatientListForApptFlag = new BehaviorSubject<number>(0);
  private RefreshClinicListFlag = new BehaviorSubject<number>(0);
  private LoadClinicListFlag = new BehaviorSubject<boolean>(false);
  private NeedRefreshCalendarByPatientFlag = new BehaviorSubject<boolean>(false);
  private TokenTime = new BehaviorSubject<number>(0);
  public refreshTreatmentRefFlag = new Subject<boolean>();
  public refreshSubscriptionRefFlag= new Subject<boolean>();
  //Used to trigger search calendar
  needRefreshCalendar = this.RefreshCalendarFlag.asObservable();
  //Used to trigger search patients
  needRefreshPatientListForAppt = this.RefreshPatientListForApptFlag.asObservable();
  //Used to trigger Clinics refresh
  needRefreshClinic = this.RefreshClinicListFlag.asObservable();
  //Load Clinic done
  loadClinicListFlag = this.LoadClinicListFlag.asObservable();
  //Used to trigger search calendar By Patient
  needRefreshCalendarByPatinet = this.NeedRefreshCalendarByPatientFlag.asObservable();

  //Used to TokenTime
  tokenTime = this.TokenTime.asObservable();

  constructor() { }
  
  changeRefreshCalendarFlag(flag: boolean) {
    this.RefreshCalendarFlag.next(flag);
  }
  //1 need refresh - 2 need reset - other do nothing
  changeRefreshPatientListForApptFlag(flag: number) {
    this.RefreshPatientListForApptFlag.next(flag);
  }
  //1 need refresh - 2 need reset - other do nothing
  changeRefreshPClinicListFlag(flag: number) {
    this.RefreshClinicListFlag.next(flag);
  }
  changeLoadClinicListFlag(flag: boolean) {
    this.LoadClinicListFlag.next(flag);
  }
  changeNeedRefreshCalendarByPatinetFlag(flag: boolean) {
    this.NeedRefreshCalendarByPatientFlag.next(flag);
  }

  updateTokenTime(minutes: number) {
    this.TokenTime.next(minutes);
  }

  changeRefreshTreatmentRefFlag(flag: boolean) {
    this.refreshTreatmentRefFlag.next(flag);
  }
  changeRefreshSubscriptionRefFlag(flag: boolean) {
    this.refreshSubscriptionRefFlag.next(flag);
  }
}
