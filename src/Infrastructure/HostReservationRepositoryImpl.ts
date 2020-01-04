"use strict";

import HostReservationRepository from "@app/Domain/HostReservationRepository";
import SearchCriteria from "@app/Domain/SearchCriteria";
import HostReservation from "@app/Domain/HostReservation";
import HostReserationMapper from "@app/Mappers/HostReservationMapper";
import { inject, injectable } from "inversify";
import TYPES from "@app/types";
import GoogleCalendarGateway from "./GoogleCalendarGateway";

@injectable()
export default class HostReservationRepositoryImpl implements HostReservationRepository {
  constructor(
    @inject(TYPES.GoogleCalendarGateway) private googleCalendarGateway: GoogleCalendarGateway,
    @inject(TYPES.HostReservationMapper) private hostReservationMapper: HostReserationMapper,
  ) { }

  public async matched(searchCriteria: SearchCriteria): Promise<HostReservation[]> {
    const timeMin = new Date(searchCriteria.getDatetime());
    timeMin.setDate(timeMin.getDate() - 1);

    const timeMax = new Date(searchCriteria.getDatetime());
    timeMax.setDate(timeMax.getDate() + 1);

    const events = await this.googleCalendarGateway.fetchEvents(timeMin, timeMax);

    return events.map((event) => {
      return this.hostReservationMapper.createFromGoogleCalendarEvent(event);
    }).filter((hostReservation) => {
      return hostReservation.containsDatetime(searchCriteria.getDatetime());
    }).sort((left, right) => left.isOlderThan(right) ? -1 : +1);
  }
}
