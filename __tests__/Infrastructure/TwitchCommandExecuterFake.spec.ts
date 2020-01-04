import TwitchCommandExecuterFake from "@app/Infrastructure/TwitchCommandExecuterFake";

test("host/executedHostがtrueになる", async () => {
  const twitchCommandExecuterFake = new TwitchCommandExecuterFake();

  expect(twitchCommandExecuterFake.executedHost).toBe(false);

  await twitchCommandExecuterFake.host("wand_ta");

  expect(twitchCommandExecuterFake.executedHost).toBe(true);
});

test("host/executedUnhostがtrueになる", async () => {
  const twitchCommandExecuterFake = new TwitchCommandExecuterFake();

  expect(twitchCommandExecuterFake.executedUnhost).toBe(false);

  await twitchCommandExecuterFake.unhost();

  expect(twitchCommandExecuterFake.executedUnhost).toBe(true);
});
