'use strict';

export default class DatetimeRange {
  constructor(
    private begin: Date,
    private end: Date,
  ) {

  }

  public contains(datetime: Date): boolean {
    return this.begin <= datetime
      && datetime <= this.end;
  }
}
