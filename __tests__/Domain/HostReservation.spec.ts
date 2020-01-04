import HostReservation from "@app/Domain/HostReservation";
import DatetimeRange from "@app/Domain/DatetimeRange";

test("getStreamerAccountName/構築時に指定したアカウント名を得る", () => {

  const streamerAccountName = "an_awesome_account";
  const hostReservation = new HostReservation(
    streamerAccountName,
    new DatetimeRange(
      new Date("2020-01-01T13:00:00+09:00"),
      new Date("2020-01-01T15:00:00+09:00"),
    ),
    new Date("2019-12-31T22:00:00+09:00"),
  );

  expect(hostReservation.getStreamerAccountName()).toBe(streamerAccountName);
});

test("containsDatetime/指定の日時が予定範囲内ならばtrue", () => {

  const hostReservation = new HostReservation(
    "an_awesome_account",
    new DatetimeRange(
      new Date("2020-01-01T13:00:00+09:00"),
      new Date("2020-01-01T15:00:00+09:00"),
    ),
    new Date("2019-12-31T22:00:00+09:00"),
  );

  expect(hostReservation.containsDatetime(new Date("2020-01-01T15:00:00+09:00"))).toBe(true);
});

test("containsDatetime/指定の日時が予定範囲外ならばfalse", () => {

  const hostReservation = new HostReservation(
    "an_awesome_account",
    new DatetimeRange(
      new Date("2020-01-01T13:00:00+09:00"),
      new Date("2020-01-01T15:00:00+09:00"),
    ),
    new Date("2019-12-31T22:00:00+09:00"),
  );

  expect(hostReservation.containsDatetime(new Date("2020-01-03T15:00:00+09:00"))).toBe(false);
});

test("isOlderThan/引数の予定よりも更新日時が昔の予定ならばtrue", () => {
  const streamerAccountName = "an_awesome_account";
  const datetimeRange = new DatetimeRange(
      new Date("2020-01-01T13:00:00+09:00"),
      new Date("2020-01-01T15:00:00+09:00"),
  );

  const hostReservationOld = new HostReservation(
    streamerAccountName,
    datetimeRange,
    new Date("2019-12-31T22:00:00+09:00"),
  );
  const hostReservationNew = new HostReservation(
    streamerAccountName,
    datetimeRange,
    new Date("2020-01-01T22:00:00+09:00"),
  );

  expect(hostReservationOld.isOlderThan(hostReservationNew)).toBe(true);
});

test("isOlderThan/引数の予定よりも更新日時が新しい予定ならばfalse", () => {
  const streamerAccountName = "an_awesome_account";
  const datetimeRange = new DatetimeRange(
      new Date("2020-01-01T13:00:00+09:00"),
      new Date("2020-01-01T15:00:00+09:00"),
  );

  const hostReservationOld = new HostReservation(
    streamerAccountName,
    datetimeRange,
    new Date("2019-12-31T22:00:00+09:00"),
  );
  const hostReservationNew = new HostReservation(
    streamerAccountName,
    datetimeRange,
    new Date("2020-01-01T22:00:00+09:00"),
  );

  expect(hostReservationNew.isOlderThan(hostReservationOld)).toBe(false);
});
