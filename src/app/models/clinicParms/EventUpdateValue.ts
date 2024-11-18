export class EventUpdateValue{
    eventID : number;
    content : string;
    start : Date;
    end : Date;
    patientid : number;
    checked : boolean;
    statusId : number;
    appointmentTypeID: number;
    userId : number;
    Timezone: number;
    constructor(eventID, content, start, end, patientid, checked, statusId, appointmentTypeID,userId){
      this.eventID = eventID;
      this.content = content;
      this.start = start;
      this.end = end;
      this.patientid = patientid;
      this.checked = checked;
      this.statusId = statusId;
      this.appointmentTypeID = appointmentTypeID;
      this.userId = userId;
    }
  }

  export class AppointmentParams{
    id : number;
    comments : string;
    start : any;
    end : any;
    patientID : number;
    isClose : boolean;
    followupType: number | null;
    isAllDay : boolean| null;
    statusId : number;
    appointmentTypeID: number;
    userId : number;
    timezone: number;
    providerId: number | null;
    calendlyEventObject: string;
    isVirtualAppointment: boolean | null;
    virtualAppointmentClient: string | null;
    virtualAppointmentObject: string | null;
  }