import GoogleCalendarGatewayFake from "@app/Infrastructure/GoogleCalendarGatewayFake";
import event from "@tests/sample/event";

test("fetchEvents/構築時に指定したeventsを得る", async () => {
  const eventsExpected = [event, event];
  const googleCalendarGatewayFake = new GoogleCalendarGatewayFake(eventsExpected);

  const eventsFetched = await googleCalendarGatewayFake.fetchEvents(new Date(), new Date());
  expect(eventsFetched).toBe(eventsExpected);
});
