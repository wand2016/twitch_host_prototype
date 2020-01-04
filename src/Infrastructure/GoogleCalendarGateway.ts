"use strict";

import { calendar_v3 } from "googleapis";

export default interface GoogleCalendarGateway {
  fetchEvents(
    timeMax: Date,
    timeMin: Date,
  ): Promise<calendar_v3.Schema$Event[]>;
}
