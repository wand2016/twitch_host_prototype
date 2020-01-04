"use strict";

export default class SearchCriteria {
  constructor(
    private datetime: Date,
  ) { }

  public getDatetime(): Date {
    return this.datetime;
  }
}
