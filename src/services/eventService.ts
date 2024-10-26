// const EVENT_API_URL = "https://api." // ჩასვი api

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

interface EventData {
  title: string;
  date: string;
  venue: string;
  attendees: Attendee[];
  description: string;
  organizer: Organizer;
  capacity: number;
  imageURL: string;
}

async function createEvent(eventData: EventData): Promise<EventData | Error> {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    const data: EventData = await response.json();
    return data;

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Failed to post event data: ", error);
    return error as Error;
  }
}

export default createEvent;
