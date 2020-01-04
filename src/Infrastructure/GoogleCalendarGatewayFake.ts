"use strict";

import { calendar_v3 } from "googleapis";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";

export default class GoogleCalendarGatewayFake implements GoogleCalendarGateway {

  constructor(private events: calendar_v3.Schema$Event[]) { }

  public async fetchEvents(
    _: Date,
    __: Date,
  ): Promise<calendar_v3.Schema$Event[]> {
    return Promise.resolve(this.events);
  }
}
