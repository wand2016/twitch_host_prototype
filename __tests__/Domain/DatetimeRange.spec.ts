import DatetimeRange from "@app/Domain/DatetimeRange";
import each from "jest-each";

each([
  [
    new Date("2020-01-01T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    new Date("2019-12-31T00:00:00+09:00"),
    false,
  ],
  [
    new Date("2020-01-01T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    new Date("2020-01-01T00:00:00+09:00"),
    true,
  ],
  [
    new Date("2020-01-01T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    new Date("2020-01-02T00:00:00+09:00"),
    true,
  ],
  [
    new Date("2020-01-01T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    true,
  ],
  [
    new Date("2020-01-01T00:00:00+09:00"),
    new Date("2020-01-03T00:00:00+09:00"),
    new Date("2020-01-04T00:00:00+09:00"),
    false,
  ],
]).test(
  "contains/指定の日時が日時範囲に含まれていればtrue、さもなくばfalse",
  (
    begin: Date,
    end: Date,
    aDatetime: Date,
    expectedResult: boolean,
  ) => {
    const dateTimeRange = new DatetimeRange(begin, end);
    expect(dateTimeRange.contains(aDatetime)).toBe(expectedResult);
  },
);
