"use strict";

import { calendar_v3 } from "googleapis";
import HostReservation from "@app/Domain/HostReservation";
import DatetimeRange from "@app/Domain/DatetimeRange";
import { injectable } from "inversify";

@injectable()
export default class HostReserationMapper {
  public createFromGoogleCalendarEvent(event: calendar_v3.Schema$Event): HostReservation {
    return new HostReservation(
      event.summary.split("\n")[0],
      new DatetimeRange(
        new Date(event.start.dateTime),
        new Date(event.end.dateTime),
      ),
      new Date(event.updated),
    );
  }
}
