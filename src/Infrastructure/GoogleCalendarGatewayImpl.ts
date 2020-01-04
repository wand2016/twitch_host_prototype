"use strict";

import { google, calendar_v3 } from "googleapis";
import { JWT } from "google-auth-library";
import { injectable } from "inversify";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";

@injectable()
export default class GoogleCalendarGatewayImpl implements GoogleCalendarGateway {
  /**
   * @readonly
   */
  private calendarId: string;

  /**
   * @readonly
   */
  private jwtClient: JWT;

  constructor(
    clientEmail: string,
    privateKey: string,
    calendarId: string,
  ) {
    this.calendarId = calendarId;

    this.jwtClient = new google.auth.JWT(
      clientEmail,
      null,
      privateKey,
      ["https://www.googleapis.com/auth/calendar.readonly"],
    );
  }

  public async fetchEvents(
    timeMin: Date,
    timeMax: Date,
  ): Promise<calendar_v3.Schema$Event[]> {
    this.authorize();

    const calendar = google.calendar("v3");
    const response = await calendar.events.list({
      calendarId: this.calendarId,
      auth: this.jwtClient,
      timeMin: timeMin.toISOString(),
      timeMax: timeMax.toISOString(),
      orderBy: "updated",
    });

    return response.data.items;
  }

  private async authorize() {
    await this.jwtClient.authorize();
  }
}
