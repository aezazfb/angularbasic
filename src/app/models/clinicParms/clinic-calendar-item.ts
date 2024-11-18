export class ClinicCalendarItem {
    start: Date | null;
    end: Date | null;
    title: string | null;
    appid: number | null;
    content: string | null;
    patientid: number | null;
    mrn:string | null;
    branchName: string | null;
    backgroundColor:string | null;
    isClose: boolean | null;
    followupType: number | null;
    isAllDay: boolean | null;
    statusId: number|null;
    appointmentTypeID: number|null;
    userId: number|null;
    addByUser: string | null;
    providerId: number | null;
    calendlyEvent: CalendlyEvent;
    isVirtualAppointment: boolean | null;
    virtualAppointmentClient: string | null;
    virtualAppointmentObject: string | null;
    constructor(){
      this.start = new Date();
      this.end = new Date();
      this.title = "";
      this.content = "";
      this.appid = 0;
      this.patientid = 0;
      this.mrn = "";
      this.branchName = "";
      this.backgroundColor = 'green';
      this.isClose = false;
      this.isAllDay = false;
      this.statusId = 0;
      this.appointmentTypeID = 0;
      this.userId = 0;
    }
}


export class CalendlyEventResponse {
  collection: CalendlyEvent[];
  pagination: Pagination;
}

export class CalendlyEvent {
  uri: string;
  name: string;
  meeting_notes_plain: string;
  meeting_notes_html: string;
  status: string;
  start_time: string;
  end_time: string;
  event_type: string;
  location: Location;
  invitees_counter: InviteesCounter;
  created_at: string;
  updated_at: string;
  event_memberships: EventMembership[];
  event_guests: EventGuest[];
  calendar_event: CalendarEvent;
}

export class EventMembership {
  user: string;
  user_email: string;
  user_name: string;
  buffered_end_time: string;
  buffered_start_time: string;
}

export class InviteesCounter {
  total: number;
  active: number;
  limit: number;
}

export class Location {
  type: string;
  join_url: string;
  data: LocationData;
  status: string;
}
export class LocationData {
  id: string | null;
  settings: string;
  password: string;
}

export class LocationSettings {

}

export class EventGuest {
  email: string;
  created_at: string;
  updated_at: string;
}

export class Pagination {
  count: number;
  next_page: string;
  previous_page: string;
  next_page_token: string;
  previous_page_token: string;
}

export class CalendarEvent {
  kind: string;
  external_id: string;
}