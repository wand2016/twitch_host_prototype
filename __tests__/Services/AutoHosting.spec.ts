import AutoHosting from "@app/Services/AutoHosting";
import GoogleCalendarGatewayFake from "@app/Infrastructure/GoogleCalendarGatewayFake";
import GoogleCalendarGateway from "@app/Infrastructure/GoogleCalendarGateway";
import TwitchCommandExecutor from "@app/Domain/TwitchCommandExecuter";
import TwitchCommandExecutorFake from "@app/Infrastructure/TwitchCommandExecuterFake";
import MyGlobal from "@tests/global";
import TYPES from "@app/types";
import events from "@tests/sample/events";

declare const global: MyGlobal;

let twitchCommandExecutorSpy: TwitchCommandExecutorFake;
let autoHosting: AutoHosting;

beforeEach(() => {
  const googleCalendarGatewayFake = new GoogleCalendarGatewayFake(events);
  global.container.rebind<GoogleCalendarGateway>(TYPES.GoogleCalendarGateway)
    .toConstantValue(googleCalendarGatewayFake);

  twitchCommandExecutorSpy = new TwitchCommandExecutorFake();
  global.container.rebind<TwitchCommandExecutor>(TYPES.TwitchCommandExecuter)
    .toConstantValue(twitchCommandExecutorSpy);

  autoHosting = global.container.resolve(AutoHosting);
});

afterEach(() => {
  twitchCommandExecutorSpy = null;
});

test("当該時刻において配信ホスト予約がある場合、当該予約の配信をhostする", async () => {
  // ----------------------------------------
  // 1. setup
  // ----------------------------------------
  const dateToUse = new Date("2020-01-02T17:30:00+09:00");
  jest.spyOn(Date, "now").mockImplementation(() => dateToUse.getTime());

  // ----------------------------------------
  // 2. action
  // ----------------------------------------
  await autoHosting.checkReservationAndHost();

  // ----------------------------------------
  // 3. assertion
  // ----------------------------------------
  expect(twitchCommandExecutorSpy.executedHost).toBe(true);
  expect(twitchCommandExecutorSpy.hostedAccountName).toBe("awesome_streamer_C");
  expect(twitchCommandExecutorSpy.executedUnhost).toBe(false);
});

test("当該時刻において配信ホスト予約がない場合、unhostする", async () => {
  // ----------------------------------------
  // 1. setup
  // ----------------------------------------
  const dateToUse = new Date("2018-01-02T17:30:00+09:00");
  jest.spyOn(Date, "now").mockImplementation(() => dateToUse.getTime());

  // ----------------------------------------
  // 2. action
  // ----------------------------------------
  await autoHosting.checkReservationAndHost();

  // ----------------------------------------
  // 3. assertion
  // ----------------------------------------
  expect(twitchCommandExecutorSpy.executedHost).toBe(false);
  expect(twitchCommandExecutorSpy.executedUnhost).toBe(true);
});
