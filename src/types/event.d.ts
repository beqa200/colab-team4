export interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  attendees: Attendee[];
  description: string;
  organizer: Organizer;
  capacity: number;
  imageURL: string;
}

export interface Attendee {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface Organizer {
  name: string;
  contactEmail: string;
  contactPhone: string;
}
