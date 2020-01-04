import HostReservationMapper from "@app/Mappers/HostReservationMapper";
import event from "@tests/sample/event";
import HostReservation from "@app/Domain/HostReservation";
import DatetimeRange from "@app/Domain/DatetimeRange";

test("createFromGoogleCalendarEvent/所定のJSONから所定のHostReservationを得る", () => {
  const hostReservationMapper = new HostReservationMapper();
  const hostReservation = hostReservationMapper.createFromGoogleCalendarEvent(event);

  expect(hostReservation).toEqual(
    new HostReservation(
      "an_awesome_streamer",
      new DatetimeRange(
        new Date("2020-01-04T17:00:00+09:00"),
        new Date("2020-01-04T18:00:00+09:00"),
      ),
      new Date("2020-01-04T12:13:08.218Z"),
    ),
  );
});
