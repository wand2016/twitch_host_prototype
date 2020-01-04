import TwitchCommandExecuterFake from "@app/Infrastructure/TwitchCommandExecuterFake";

test("host/executedHostがtrueになる", async () => {
  const twitchCommandExecuterFake = new TwitchCommandExecuterFake();

  expect(twitchCommandExecuterFake.executedHost).toBe(false);

  await twitchCommandExecuterFake.host("wand_ta");

  expect(twitchCommandExecuterFake.executedHost).toBe(true);
});

test("host/hostedAccountNameがホストした配信のものになる", async () => {
  const twitchCommandExecuterFake = new TwitchCommandExecuterFake();
  const accountNameToHost = "wand_ta";

  expect(twitchCommandExecuterFake.hostedAccountName).toBe("");

  await twitchCommandExecuterFake.host(accountNameToHost);

  expect(twitchCommandExecuterFake.hostedAccountName).toBe(accountNameToHost);
});

test("unhost/executedUnhostがtrueになる", async () => {
  const twitchCommandExecuterFake = new TwitchCommandExecuterFake();

  expect(twitchCommandExecuterFake.executedUnhost).toBe(false);

  await twitchCommandExecuterFake.unhost();

  expect(twitchCommandExecuterFake.executedUnhost).toBe(true);
});
