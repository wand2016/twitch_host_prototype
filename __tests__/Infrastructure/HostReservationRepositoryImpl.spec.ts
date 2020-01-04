import HostReservationRepositoryImpl from "@app/Infrastructure/HostReservationRepositoryImpl";
import MyGlobal from "@tests/global";
import TYPES from "@app/types";
import GoogleCalendarGatewayFake from "@app/Infrastructure/GoogleCalendarGatewayFake";
import events from "@tests/sample/events";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";
import SearchCriteria from "@app/Domain/SearchCriteria";

declare const global: MyGlobal;

test("matched/所定の配信ホスト予約を得る", async () => {
  // ----------------------------------------
  // 1. setup mock
  // ----------------------------------------

  const googleCalendarGatewayFake = new GoogleCalendarGatewayFake(events);
  global.container.rebind<GoogleCalendarGateway>(TYPES.GoogleCalendarGateway)
    .toConstantValue(googleCalendarGatewayFake);

  const hostReservationRepositoryImpl = global.container.resolve(HostReservationRepositoryImpl);

  // ----------------------------------------
  // 2. action
  // ----------------------------------------
  const hostReservations = await hostReservationRepositoryImpl.matched(
    new SearchCriteria(
      new Date("2020-01-02T17:30:00+09:00"),
    ),
  );

  // ----------------------------------------
  // 3. assertions
  // ----------------------------------------
  expect(hostReservations.length).toBe(2);
  expect(hostReservations[0].getStreamerAccountName()).toBe("awesome_streamer_C");
  expect(hostReservations[1].getStreamerAccountName()).toBe("awesome_streamer_B");
});
