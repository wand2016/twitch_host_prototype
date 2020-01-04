"use strict";

import DatetimeRange from "@app/Domain/DatetimeRange";

export default class HostReservation {

  constructor(
    private streamerAccountName: string,
    private datetimeRange: DatetimeRange,
    private updatedAt: Date,
  ) { }

  public getStreamerAccountName(): string {
    return this.streamerAccountName;
  }

  public containsDatetime(datetime: Date): boolean {
    return this.datetimeRange.contains(datetime);
  }

  public isOlderThan(other: HostReservation): boolean {
    return this.updatedAt < other.updatedAt;
  }

}
