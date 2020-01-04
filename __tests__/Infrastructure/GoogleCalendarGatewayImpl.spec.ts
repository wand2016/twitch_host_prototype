import GoogleCalendarGatewayImpl from "@app/Infrastructure/GoogleCalendarGatewayImpl";
import MyGlobal from "@tests/global";
import TYPES from "@app/types";

declare const global: MyGlobal;

test("fetchEvents/OK", async () => {
  const googleCalendarGatewayImpl = global.container.get<GoogleCalendarGatewayImpl>(TYPES.GoogleCalendarGatewayImpl);

  const events = await googleCalendarGatewayImpl.fetchEvents(
    new Date("2020-01-01"),
    new Date("2020-01-06"),
  );

  expect(events instanceof Array).toBe(true);
});
